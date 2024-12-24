'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa'; // Import the icon

export default function InsightArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedArticles = [
        {
          id: 1,
          title: 'Insight Article 1',
          link: '/article/1',
          image: 'https://via.placeholder.com/520x280',
          category: 'Category 1',
          excerpt: 'This is a short excerpt of the article content that gives a preview of what it\'s about.',
          date: 'Dec 24, 2024',
        },
      ];
      setArticles(fetchedArticles);
      setLoading(false);
    }, 2000); // Simulate loading
  }, []);

  return (
    <div className="p-0 sm:p-8 md:p-20">
      {/* Separator Line */}
      <div className="border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Title Similar to the Provided Example */}
      <div className="flex items-center gap-4 mb-8 mt-[70px] sm:mt-[70px] md:mt-[70px]">
        <Link
          href="#"
          className="flex items-center gap-4 text-2xl font-bold relative hover:text-gray-700 transition-all duration-200 transform hover:scale-105"
        >
          <span className="text-[28px]">
            Pilihan Editor
            <span className="absolute bottom-[-10px] left-0 w-24 h-[2px] bg-black"></span>
          </span>
          <div className="w-[35px] h-[35px] border-2 border-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105">
            <FaAngleRight className="text-black" />
          </div>
        </Link>
      </div>

      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div className="space-y-4">
          {loading
            ? (
              <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                {/* Skeleton for Articles */}
                <div className="w-[520px] h-[280px] bg-gray-200 animate-pulse"></div> {/* Image Skeleton */}
              </div>
            )
            : (
              <div key={articles[0].id} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                {/* Image */}
                <Link
                  href={articles[0].link}
                  className="w-[520px] h-[280px] bg-gray-300 bg-cover bg-center shadow-md"
                  style={{ backgroundImage: `url(${articles[0].image})` }}
                ></Link>
              </div>
            )}
        </div>

        {/* Right Column: Category, Title, and Excerpt */}
        <div className="space-y-4">
          {loading
            ? (
              <div key={0} className="flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
                {/* Skeleton for Article Info */}
                <div className="w-1/4 h-4 bg-gray-300 animate-pulse"></div> {/* Category Skeleton */}
                <div className="w-2/3 h-4 bg-gray-300 animate-pulse"></div> {/* Title Skeleton */}
                <div className="w-full h-4 bg-gray-300 animate-pulse"></div> {/* Excerpt Skeleton */}
              </div>
            )
            : (
              <div key={articles[0].id} className="flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
                {/* Category with Background */}
                <div className="w-max py-1 px-4 bg-gray-200 text-gray-700 text-sm font-medium rounded">
                  {articles[0].category}
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold mt-2">
                  <Link
                    href={articles[0].link}
                    className="hover:text-gray-500 transition-all duration-200"
                  >
                    {articles[0].title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] text-gray-600">{articles[0].excerpt}</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
