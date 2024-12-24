import React from "react";
import { FaAngleRight } from "react-icons/fa"; // Import angle right icon from react-icons

export default function LatestArticles() {
  return (
    <div className="p-8 sm:p-20">
      {/* Title Section */}
      <div className="flex items-center gap-4 mb-8 mt-[-100px]">
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
      <div className="grid grid-cols-[55%_45%] gap-8">
        {/* Left Section: Main Article */}
        <div
          className="relative bg-cover bg-center h-96"
          style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}
        >
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white text-black text-xs font-medium px-2 py-1 rounded">
            Category
          </div>
          {/* Date and Title */}
          <div className="absolute bottom-4 left-4 text-white space-y-2">
            <p className="text-xs">December 24, 2024</p>
            <h2 className="text-xl font-bold">Title of the Main Article</h2>
          </div>
        </div>

        {/* Right Section: Small Articles */}
        <div className="flex flex-col space-y-4">
          {/* Article Item */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className="w-24 h-24 bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: "url('https://via.placeholder.com/100x100')" }}
              ></div>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="font-medium">Category</span>
                  <span>December 24, 2024</span>
                </div>
                <h3 className="text-sm font-bold mt-2">Title of the Small Article</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
