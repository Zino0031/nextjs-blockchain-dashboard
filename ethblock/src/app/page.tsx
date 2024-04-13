import Image from "next/image";
import Header from '@/components/Header';
import TitleLine from "@/components/TitleLine";
import ChartCard from "@/components/Cards/ChartCard";
import FetchData from "@/utils/FetchData"
import Hero from "@/components/Cards/Hero";
import Table from "@/components/Table";

export default async function Home() {
  const ethPrice = await FetchData.fetchEthPrice();
  const ethChart = await FetchData.fetchEthChart();
  const block = await FetchData.fetchBlockInfo();
  const marketCapData = await FetchData.fetchMarketCap();
  const totalTransactions = block.previousBlockInfo
  const latestBlock = block.latestBlock



  return (
    <main className="min-h-screen">
      <Header />
      <div className="absolute before:absolute top-40 left-10 before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      <div className="absolute before:absolute top-60 right-80 before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div className="mx-4 md:mx-20 "> 
      <TitleLine title="ETH TODAY" />
      <div className="flex justify-center items-center gap-4 mt-20 mb-20">
    <Hero ethChart={ethChart} ethPrice={ethPrice} latestBlock={latestBlock}  marketCapData={marketCapData} totalTransactions={block.previousBlockInfo[1].totalTransactions}  />
      </div>

      <TitleLine title="LATEST" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 min-h-full mt-20 mb-20 ">
  <div className="md:w-1/2 min-h-full">
    <Table data={totalTransactions} type="blocks" />
  </div>
  <div className="md:w-1/2 ">
    <Table data={totalTransactions} type="transactions" />
      </div>
  </div>
</div>

    </main>
  );
}



