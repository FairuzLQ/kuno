'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function LatestArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedArticles = [
        {
          id: 1,
          title: "Title of the Main Article Tes",
          category: "How To",
          date: "December 24, 2024",
          image: "https://via.placeholder.com/540x350",
          link: "/article-detail/1",
          categoryId: 1,
        },
        {
          id: 2,
          title: "Judul Tes Lorem Ipsum Dono Kasino Indro",
          category: "How To",
          date: "December 24, 2024",
          image: "https://via.placeholder.com/125x100",
          link: "/article-detail/2",
          categoryId: 2,
        },
        {
          id: 3,
          title: "Sample Article Title Here",
          category: "Category",
          date: "December 23, 2024",
          image: "https://via.placeholder.com/125x100",
          link: "/article-detail/3",
          categoryId: 3,
        },
        {
          id: 4,
          title: "Another Sample Article Title",
          category: "Tech News",
          date: "December 22, 2024",
          image: "https://via.placeholder.com/125x100",
          link: "/article-detail/4",
          categoryId: 4,
        },
      ];
      setArticles(fetchedArticles);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-0 sm:p-8 md:p-20">
      {/* Title Section */}
      <div className="flex items-center gap-4 mb-8 mt-[-20px] sm:mt-[-70px] md:mt-[-100px]">
        <Link
          href="#"
          className="flex items-center gap-4 text-2xl font-bold relative hover:text-gray-700 transition-all duration-200 transform hover:scale-105"
        >
          <span className="text-[28px]">
            Latest Articles
            <span className="absolute bottom-[-10px] left-0 w-24 h-[2px] bg-black"></span>
          </span>
          <div className="w-[35px] h-[35px] border-2 border-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105">
            <FaAngleRight className="text-black" />
          </div>
        </Link>
      </div>

      {/* Articles Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
        {/* Left Section: Main Article */}
        {loading ? (
          <div className="relative bg-gray-200 animate-pulse h-[350px] lg:h-[350px] shadow-md">
            {/* Skeleton for Main Article */}
            <div className="absolute top-0 left-0 bg-gray-300 text-black text-[16px] font-medium px-2 py-1 w-24 h-5 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 text-black space-y-2">
              <div className="w-24 h-4 bg-gray-300 animate-pulse"></div> {/* Date Skeleton */}
              <div className="w-48 h-6 bg-gray-300 animate-pulse"></div> {/* Title Skeleton */}
            </div>
          </div>
        ) : (
          <Link
            href={articles[0].link}
            className="relative block hover:scale-105 transition-transform duration-300"
          >
            <div
              className="relative bg-cover bg-center h-[350px] lg:h-[350px] overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${articles[0].image})` }}
            >
              <div className="absolute top-0 left-0 bg-white text-black text-[16px] font-medium px-2 py-1">
                {articles[0].category}
              </div>
              <div className="absolute bottom-4 left-4 text-black space-y-2">
                <p className="text-[14px] px-5 hover:text-gray-500">{articles[0].date}</p>
                <h2 className="text-[28px] font-bold px-5 hover:text-gray-500">{articles[0].title}</h2>
              </div>
            </div>
          </Link>
        )}

        {/* Right Section: Small Articles */}
        <div className="flex flex-col space-y-4">
          {loading
            ? Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                    {/* Skeleton for small articles */}
                    <div className="w-[125px] h-[100px] bg-gray-200 animate-pulse"></div> {/* Image Skeleton */}
                    <div className="flex-1 space-y-2">
                      <div className="w-1/4 h-4 bg-gray-300 animate-pulse"></div> {/* Category Skeleton */}
                      <div className="w-2/3 h-4 bg-gray-300 animate-pulse"></div> {/* Title Skeleton */}
                    </div>
                  </div>
                ))
            : articles.slice(1).map((article) => (
                <div
                  key={article.id}
                  className="flex items-start gap-4 hover:scale-105 transition-transform duration-300"
                >
                  <Link
                    href={article.link}
                    className="w-[125px] h-[100px] bg-gray-300 bg-cover bg-center shadow-md"
                    style={{ backgroundImage: `url(${article.image})` }}
                  ></Link>
                  <div className="flex-1">
                    <div className="flex justify-between text-[12px] text-gray-500">
                      <span className="font-medium text-[14px]">{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-[18px] font-bold mt-2">
                      <Link
                        href={article.link}
                        className="hover:text-gray-500 transition-all duration-200"
                      >
                        {article.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
