'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceData {
  date: Date;
  price: number;
}

interface ChartProps {
  data: PriceData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis hide={true} domain={['auto', 'auto']} axisLine={false} tickLine={false} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const { date, price } = payload[0].payload as PriceData;
              return (
                <div className="bg-white p-2 border border-gray-300 rounded shadow">
                  <p className="text-gray-600">{`Date: ${date.toLocaleString()}`}</p>
                  <p className="text-gray-600">{`Price: ${price}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Line type="monotone" dataKey="price" stroke="#00f0ff" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
