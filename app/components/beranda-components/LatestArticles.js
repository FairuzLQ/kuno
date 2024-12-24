'use client';  // This marks the file as a client component

import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa"; // Import angle right icon from react-icons

export default function LatestArticles() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // Dummy data for articles
    const fetchedArticles = [
      {
        id: 1,
        title: "Title of the Main Article Tes",
        category: "How To",
        date: "December 24, 2024",
        image: "https://via.placeholder.com/540x350",
        categoryId: 1
      },
      {
        id: 2,
        title: "Judul Tes Lorem Ipsum Dono Kasino Indro",
        category: "How To",
        date: "December 24, 2024",
        image: "https://via.placeholder.com/125x100",
        categoryId: 2
      },
      {
        id: 3,
        title: "Sample Article Title Here",
        category: "Category",
        date: "December 23, 2024",
        image: "https://via.placeholder.com/125x100",
        categoryId: 3
      }
    ];
    setArticles(fetchedArticles);

    // Dummy data for categories
    const fetchedCategories = [
      { id: 1, name: "How To" },
      { id: 2, name: "Tech News" },
      { id: 3, name: "Tutorial" }
    ];
    setCategories(fetchedCategories);
  }, []);

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
        {articles.length > 0 && (
          <div
            className="relative bg-cover bg-center h-[350px] lg:h-[350px]"
            style={{ backgroundImage: `url(${articles[0].image})` }}
          >
            {/* Category Badge */}
            <a
              href={`/category-page/${articles[0].categoryId}`}
              className="absolute top-0 left-0 bg-white text-black text-[16px] font-medium px-2 py-1 hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              {articles[0].category}
            </a>
            {/* Date and Title */}
            <div className="absolute bottom-4 left-4 text-black space-y-2">
              <p className="text-[14px] px-5">{articles[0].date}</p>
              <h2 className="text-[28px] font-bold px-5">
                {articles[0].title}
              </h2>
            </div>
          </div>
        )}

        {/* Right Section: Small Articles */}
        <div className="flex flex-col space-y-4">
          {/* Article Item */}
          {articles.slice(1).map((article) => (
            <div key={article.id} className="flex items-start gap-4">
              <div
                className="w-[125px] h-[100px] bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              ></div>
              <div className="flex-1">
                <div className="flex justify-between text-[12px] text-gray-500">
                  {/* Category Link */}
                  <a
                    href={`/category-page/${article.categoryId}`}
                    className="font-medium text-[14px] hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
                  >
                    {article.category}
                  </a>
                  <span>{article.date}</span>
                </div>
                {/* Title with clickable link */}
                <h3
                  className="text-[18px] font-bold mt-2"
                  onClick={() => window.location.href = `/article-detail/${article.id}`}
                >
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
