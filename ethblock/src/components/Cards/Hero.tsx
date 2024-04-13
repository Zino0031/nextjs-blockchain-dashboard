import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faServer, faGauge } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import ChartCard from "@/components/Cards/ChartCard";


interface Props {
    ethChart: any;
    ethPrice: any;
    marketCapData: number;
    totalTransactions: number;
    latestBlock: number;
}

const Hero: React.FC<Props> = ({ ethChart, ethPrice, marketCapData, totalTransactions, latestBlock }) => {

    return (
        <div className="main text-white bg-gradient-to-br from-[#1B1B1B] to-black group rounded-3xl border border-[#00f0ff] px-2 py-2 transition-colors hover:bg-gradient-to-tl">
            <section className="heroSectionContainer flex flex-col md:flex-row justify-center items-center ">
                <section className="flex flex-col md:flex-row justify-between">
                    <div className="left-section flex flex-col justify-between   md:mr-2 min-h-40 max-w-96 p-4  min-w-20">
                    <div className="flex flex-row gap-2  items-center min-h-4 max-h-10 p-4 max-w-60 min-w-20 ">
                    <FontAwesomeIcon icon={faEthereum} className="svgIcons w-10 max-w-10 max-h-10" />
                        <div className="hero_box ">
                 
                            <p className="text-sm font-semibold text-yellow-300">ETHER PRICE</p>
                            <p className="heroValues text-lg">${Number(ethPrice?.usdPriceFormatted).toFixed(2)}</p>
                            </div>
                       
                        </div>
                        <div className="divider  h-[3px] bg-[#00f0ff]"></div>
                        <div className="flex flex-row gap-2 justify-center items-center min-h-4 max-h-10 p-4 max-w-60 min-w-20">
                            <FontAwesomeIcon icon={faGlobe} className="svgIcons w-10 max-w-10 max-h-10" />
                            <div className="hero_box">
                                <p className="text-sm font-semibold text-yellow-300">MARKET CAP</p>
                                <p className="heroValues">${marketCapData.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider  w-[3px] bg-[#00f0ff]"></div>
                    <div className="right-section flex flex-col justify-between   md:ml-2 min-h-40 max-w-96 p-4  min-w-20">
                        <div className="flex flex-row gap-2 justify-center items-center min-h-4 max-h-10 p-4 max-w-60 min-w-20">
                            <FontAwesomeIcon icon={faServer} className="svgIcons w-10 max-w-10 max-h-10" />
                            <div className="hero_box">
                                <p className="text-sm font-semibold text-yellow-300">BLOCK TRANSACTIONS</p>
                                <p className="heroValues text-white">{totalTransactions}</p>
                            </div>
                        </div>
                        <div className="divider  h-[3px] bg-[#00f0ff]"></div>
                        <div className="flex flex-row gap-2 justify-center items-center min-h-4 max-h-10 p-4 max-w-60 min-w-20">
                            <FontAwesomeIcon icon={faGauge} className="svgIcons w-10 max-w-10 max-h-10" />
                            <div className="hero_box">
                                <p className="text-sm font-semibold text-yellow-300">LAST FINALIZED BLOCK </p>
                                <p className="heroValues">{latestBlock}</p>
                            </div>
                        </div>
                    </div>
                </section>
               <div className="p-2  ">
                <ChartCard priceData={ethChart?.prices}  title="Eth Price"  desc="Chart Price 15 DAYS" />
                </div>
             
            </section>
        </div>
    );
};


export default Hero;