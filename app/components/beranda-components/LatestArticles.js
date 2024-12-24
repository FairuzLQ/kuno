import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon from react-icons

export default function LatestArticles() {
  return (
    <div className="p-8 sm:p-20">
      {/* Title Section */}
      <div className="flex items-center gap-4 mb-8 mt-[-100px]">
        <a
          href="#"
          className="text-2xl font-bold relative hover:text-gray-700"
        >
          Latest Articles
          {/* Modern Half Underline */}
          <span className="absolute bottom-[-10px] left-0 w-20 h-[2px] bg-black"></span>
        </a>
        {/* Modern Arrow */}
        <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center">
          <FaArrowRight className="text-black" />
        </div>
      </div>

      {/* Articles Layout */}
      <div className="grid grid-cols-[60%_40%] gap-8">
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
