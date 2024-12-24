import React from "react";
import { FaAngleRight } from "react-icons/fa"; // Import angle right icon from react-icons

export default function LatestArticles() {
  return (
    <div className="p-0 sm:p-8 md:p-20">
      {/* Title Section */}
      <div className="flex items-center gap-4 mb-8 mt-[-20px] sm:mt-[-70px] md:mt-[-100px]">
        {/* Wrapper for text and arrow for the hover effect */}
        <a
          href="#"
          className="flex items-center gap-4 text-2xl font-bold relative hover:text-gray-700 transition-all duration-200 transform hover:scale-105"
        >
          <span className="text-[28px]">
            Latest Articles
            {/* Modern Half Underline */}
            <span className="absolute bottom-[-10px] left-0 w-24 h-[2px] bg-black"></span>
          </span>
          {/* Modern Arrow */}
          <div className="w-[35px] h-[35px] border-2 border-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105">
            <FaAngleRight className="text-black" />
          </div>
        </a>
      </div>

      {/* Articles Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
        {/* Left Section: Main Article */}
        <div
          className="relative bg-cover bg-center h-[350px] lg:h-[350px]"
          style={{ backgroundImage: "url('https://via.placeholder.com/540x350')" }}
        >
          {/* Category Badge */}
          <div className="absolute top-0 left-0 bg-white text-black text-[16px] font-medium px-2 py-1">
            How To
          </div>
          {/* Date and Title */}
          <div className="absolute bottom-4 left-4 text-black space-y-2">
            <p className="text-[14px] px-5">December 24, 2024</p>
            <h2 className="text-[28px] font-bold px-5">Title of the Main Article Tes</h2>
          </div>
        </div>

        {/* Right Section: Small Articles */}
        <div className="flex flex-col space-y-4">
          {/* Article Item */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className="w-[125px] h-[100px] bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: "url('https://via.placeholder.com/125x100')" }}
              ></div>
              <div className="flex-1">
                <div className="flex justify-between text-[12px] text-gray-500">
                  <span className="font-medium text-[14px]">Category</span>
                  <span>December 24, 2024</span>
                </div>
                <h3 className="text-[18px] font-bold mt-2">Judul Tes Lorem Ipsum Dono Kasino Indro</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
