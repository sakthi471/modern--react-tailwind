import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full px-4 py-14">
      <div className="max-w-[1240px] grid md:grid-cols-2">
        <img className="w-[350px] mx-auto" src={laptop} alt="laptop img" />
        <div className="flex flex-col justify-center py-5 px-5">
          <p  className="uppercase text-[#00df9a] font-bold md:text-xl">data Analytics dashboard</p>
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl ">Manage data Analytics centrally</p>
          <p className="py-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus dolore recusandae officiis voluptatum excepturi
            molestiae iste! Mollitia, distinctio 
          </p>
          <button className="bg-black text-[#00df9a] px-6 py-3 rounded-md  w-[200px] mt-3 mx-auto md:mx-0">Get Started</button>
          
        </div>
      </div>
    </div>
  );
};

export default Analytics;
