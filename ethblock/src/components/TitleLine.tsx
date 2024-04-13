import React from 'react';

interface TitleLineProps {
  title: string;
}

const TitleLine: React.FC<TitleLineProps> = ({ title }) => {
  return (
    <div>
      <div className="relative mb-10 mt-10">
        <div className="text-[#62C7FF] absolute z-10 font-bold text-3xl bg-[#0F0F0F] px-2">{title}</div>
        <div className="w-full h-[3px] bg-[#151721] relative top-4"></div>
      </div>
    </div>
  );
};

export default TitleLine;