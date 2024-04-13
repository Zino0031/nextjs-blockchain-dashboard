  import Moralis from 'moralis';
  import { EvmChain } from "@moralisweb3/common-evm-utils";


  Moralis.start({
    apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
  });

  const fetchBlock = async (query: any): Promise<any> => {
    try {
      const response = await Moralis.EvmApi.block.getBlock({
        chain: "0x1",
        blockNumberOrHash: query
      });

      const res = response?.raw;
      return res;

    } catch (error) {
      console.error('Error fetching block:', error);
      return null;
    }
  };


  const fetchEthPrice = async (): Promise<any> => {
    try {
      const response = await Moralis.EvmApi.token.getTokenPrice({
        "chain": "0x1",
        "include": "percent_change",
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
      }); 
      
      const res = response.raw;
      return res; 
    } catch (error) {
      console.error('Error fetching Ethereum price:', error);
      return null; 
    }
  };

  const fetchEthChart = async (): Promise<any> => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=15'
      );
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching ETH data:', error);
      return null;
    }
  };



  const fetchBlockInfo = async (): Promise<any> => {
    try {
      const latestBlock = await Moralis.EvmApi.block.getDateToBlock({
        date: new Date(),
        chain: "0x1",
      });
      let blockNrOrParentHash: string = String(latestBlock?.toJSON().block || '');
      let previousBlockInfo: any[] = [];

      for (let i = 0; i < 5; i++) {
        const previousBlockNrs = await Moralis.EvmApi.block.getBlock({
          chain: "0x1",
          blockNumberOrHash: blockNrOrParentHash,
        });
        blockNrOrParentHash = previousBlockNrs?.toJSON().parent_hash || '';
        if (i === 0) {
          previousBlockInfo.push({
            transactions: previousBlockNrs?.toJSON().transactions.map((i: any) => {
              return {
                transactionHash: i.hash,
                time: i.block_timestamp,
                fromAddress: i.from_address,
                toAddress: i.to_address,
                value: i.value,
              };
            }),
          });
        }
        previousBlockInfo.push({
          blockNumber: previousBlockNrs?.toJSON().number,
          totalTransactions: previousBlockNrs?.toJSON().transaction_count,
          gasUsed: previousBlockNrs?.toJSON().gas_used,
          miner: previousBlockNrs?.toJSON().miner,
          time: previousBlockNrs?.toJSON().timestamp,
        });
      }
      const response = {
        latestBlock: latestBlock.toJSON().block,
        previousBlockInfo,
      };
      return response;
    } catch (error) {
      console.error('Error fetching block information:', error);
      return null;
    }
  };

  const fetchMarketCap = async (): Promise<number> => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum');
      const data = await response.json();
      return data.market_data.market_cap.usd;
    } catch (error) {
      console.error('Error fetching market cap:', error);
      return 0;
    }
  };

  export default {
    fetchEthPrice,
    fetchEthChart,
    fetchBlockInfo,
    fetchMarketCap,
    fetchBlock,
  };