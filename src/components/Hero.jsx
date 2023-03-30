import React from "react";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className="max-w-full text-white">
      <div  className="flex flex-col h-screen  items-center justify-center w-full gap-3">
        <p className=" py-2 text-center uppercase text-[#00df9a] font-bold text-xl sm:text-2xl md:text-3xl">growing with data analytics</p>
      <p className="text-3xl font-bold sm:text-4xl md:text-5xl">grow with data</p>

      <div className="flex gap-2 items-center ">
        <p className="font-bold text-xl">Fast,flexible finansing for</p>
        <TypeAnimation className="font-bold text-[#00df9a] md:text-2xl"
  sequence={[
    // Same String at the start will only be typed once, initially
    'BTB',
    1000,
    'BTC',
    1000,
    'SASS',
    1000,
   
  ]}
  speed={10}
  style={{ }}
  repeat={Infinity}
  deletionSpeed={20}
/>
         
      </div>
       <p className="text-gray-700 text-center px-4">Monitor your data analytics to increse revenue  for BTB,BTC & SASS platforms </p>
       <button className="bg-[#00df9a] text-black px-6 py-3 rounded-md  w-[200px] mt-3" >Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
