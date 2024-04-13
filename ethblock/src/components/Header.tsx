import Image from 'next/image';
import Search from '@/components/Search';

export default function Header() {
  return (
    <div className="relative">
      <div className="p-4 md:p-20 flex flex-col lg:flex-row items-center md:gap-40">
        <div className="order-2 lg:w-1/2 lg:order-1 z-10">
          <h1 className="z-20 text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-[#ff1cf7] to-[#00f0ff]  text-transparent bg-clip-text">
            Eth-Block Explorer
          </h1>
          <p className="text-lg leading-8 text-white mb-10">
            Your key to unlocking Ethereum&apos;s secrets. Track transactions, monitor network activity, and dive into decentralized finance with ease. Gain valuable insights into Ethereum&apos;s ecosystem 
          </p>
          <div className="absolute w-full pr-20 md:pr-80 md:mt-28">
            <Search />
          </div>
        </div>

        <div className="order-1 lg:w-1/2 lg:order-2">
          <Image
            src="/header.gif"
            alt="blockchain"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
    <Image
        src="/bg.png"
        alt="bg"
        width={1700}
        height={900}

        className="hidden md:block absolute md:-top-24 -z-10"
      />     
         <div className="hidden md:block bg-[#0F0F0F] px-full py-5   z-10 -mt- bottom-0 "></div>
      </div>
    </div>
  );
}
