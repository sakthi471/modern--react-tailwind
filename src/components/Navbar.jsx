import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
const [nav,setNav]=useState(false);


  return (
    <div className="flex justify-between items-center px-4 h-20 max-w-[1240px] mx-auto">
      <h1 className="text-[#00df9a]  font-bold text-3xl z-20">REACT .</h1>
      <ul className=" md:flex text-white hidden ">
        <li className="p-4">home</li>
        <li className="p-4">company</li>
        <li className="p-4">resourses</li>
        <li className="p-4">about</li>
        <li className="p-4">contact</li>
      </ul>


      <div onClick={()=>setNav(!nav)} className="block md:hidden">
        { nav ? <AiOutlineClose  size={25} color="white" />:<AiOutlineMenu  size={25} color="white"/> }
      </div>

      <div className={nav ?" z-10 bg-black top-0  left-0 fixed pt-11 w-[50%] h-full border-r border-gray-800 ease-in-out duration-500":"fixed left-[-100%]"}>
        <ul className="flex flex-col text-white p-8 capitalize font-bold ">
          <li className="p-3 border-b border-gray-600">home</li>
          <li className="p-3 border-b border-gray-600">company</li>
          <li className="p-3 border-b border-gray-600">resourses</li>
          <li className="p-3 border-b border-gray-600">about</li>
          <li className="p-3">contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
