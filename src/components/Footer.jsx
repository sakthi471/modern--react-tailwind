import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10  py-16 px-4">
      <div>
        <h1 className="text-[#00df9a]  font-bold text-3xl z-20">REACT .</h1>
        <p className="text-white my-3" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          cupiditate?
        </p>
        <div className="text-white  flex justify-between md:w-[70%] my-6">
          <FaFacebookSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2  mt-2 flex justify-between">
            <div className="text-white">
                <h6 className="font-medium text-gray-400">Solution</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>

                </ul>
            </div>
            <div className="text-white">
                <h6 className="font-medium text-gray-400">Support</h6>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentaion</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API Status</li>

                </ul>
            </div>
            <div className="text-white">
                <h6 className="font-medium text-gray-400">Company</h6>
                <ul>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blogs</li>
                    <li className="py-2 text-sm">Jobd</li>
                    <li className="py-2 text-sm">Careers</li>

                </ul>
            </div>
            <div className="text-white">
                <h6 className="font-medium text-gray-400">Legal</h6>
                <ul>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>

                </ul>
            </div>
            
      </div>

    </div>
  );
};

export default Footer;
