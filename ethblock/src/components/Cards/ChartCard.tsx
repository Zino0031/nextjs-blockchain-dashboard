"use client"
import React from 'react';
import Chart from '@/components/Chart/LineChart';
import  { EthereumColorful } from '@ant-design/web3-icons';
interface PriceData {
  date: Date;
  price: number;
}

interface ChartCardProps {
  priceData: [number, number][];
  title:string;
  desc:string;
}

const ChartCard: React.FC<ChartCardProps> = ({ priceData ,title ,desc}) => {
  const aggregateDataByDay = (data: [number, number][]) => {
    const aggregatedData: PriceData[] = [];
    let currentDate: Date | null = null;
    let sum = 0;
    let count = 0;

    data?.forEach(([timestamp, price]) => {
      const date = new Date(timestamp);
      if (!currentDate || date.getDate() !== currentDate.getDate()) {
        if (currentDate) {
          const averagePrice = sum / count;
          aggregatedData.push({ date: currentDate, price: averagePrice });
        }
        currentDate = date;
        sum = price;
        count = 1;
      } else {
        sum += price;
        count++;
      }
    });

    if (currentDate) {
      const averagePrice = sum / count;
      aggregatedData.push({ date: currentDate, price: averagePrice });
    }

    return aggregatedData;
  };

  const aggregatedData = aggregateDataByDay(priceData);

  return (
    <div className="bg-gradient-to-br from-[#1B1B1B] to-black group rounded-3xl border border-[#00f0ff] px-2 py-2 transition-colors hover:bg-gradient-to-tl min-w-[300px]">
        <div className='flex flex-row items-center'>
          <div className='flex gap-2'>
        <span className="inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none text-5xl">
        <EthereumColorful />
        </span>
          </div>
      <h2 className="flex flex-col pl-2  gap-2 text-2xl text-yellow-300  font-semibold">
        {title}
        <p className='font-thin text-white text-sm'>{desc}</p>
      </h2>
        </div>
      <Chart data={aggregatedData } />
    </div>
  );
};

export default ChartCard;
