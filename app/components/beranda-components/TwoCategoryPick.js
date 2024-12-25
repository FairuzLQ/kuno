'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa'; // Import the icon

export default function TwoCategoryPick() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedArticles = [
        {
          id: 1,
          title: 'Article Title 1',
          link: '/article/1',
          image: 'https://via.placeholder.com/340x180',
          category: 'Category 1',
          excerpt: 'This is a short excerpt of the article content.',
          date: 'Dec 24, 2024',
        },
        {
          id: 2,
          title: 'Article Title 2',
          link: '/article/2',
          image: 'https://via.placeholder.com/340x180',
          category: 'Category 2',
          excerpt: 'This is a short excerpt of the article content.',
          date: 'Dec 25, 2024',
        },
      ];
      setArticles(fetchedArticles);
      setLoading(false);
    }, 2000); // Simulate loading
  }, []);

  return (
    <div className="p-5 sm:p-16 md:p-40 bg-white">
      {/* Separator Line */}
      <div className="md:border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Content with 3 Columns Layout */}
      <div className="grid grid-cols-1 gap-0 xl:grid-cols-3 xl:gap-[200px]">
        {/* First Column */}
        <div className="space-y-4">
          {/* Title */}
          <div className="flex items-center gap-4 mb-8 mt-[70px] sm:mt-[70px] md:mt-[70px]">
            <Link
              href="#"
              className="flex items-center gap-4 text-2xl font-bold relative hover:text-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-[28px] text-black">
                Pilihan Editor
                <span className="absolute bottom-[-10px] left-0 w-24 h-[2px] bg-black"></span>
              </span>
              <div className="w-[35px] h-[35px] border-2 border-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105">
                <FaAngleRight className="text-black" />
              </div>
            </Link>
          </div>

          {/* Image and Article Title */}
          <div className="space-y-4">
            {loading ? (
              <div className="w-[340px] h-[180px] bg-gray-200 mb-4 animate-pulse"></div> // Image Skeleton
            ) : (
              <Link href={articles[0].link}>
                <div className="w-[340px] h-[180px] bg-cover bg-center mb-4 transition-transform transform hover:scale-105" style={{ backgroundImage: `url(${articles[0].image})` }}></div>
              </Link> // Image with hover effect
            )}

            <div className="my-2">
              {loading ? (
                <h4 className="text-black text-[24px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h4> // Title Skeleton
              ) : (
                <Link href={articles[0].link} className="text-black text-[24px] font-bold hover:text-gray-500 transition-colors duration-300">
                  {articles[0].title}
                </Link> // Title with hover effect
              )}
            </div>

            {loading ? (
              <p className="text-black text-[14px] bg-gray-200 h-4 w-[300px] animate-pulse mb-4"></p> // Excerpt Skeleton
            ) : (
              <p className="text-black text-[14px] my-4">{articles[0].excerpt}</p>
            )}

            <div className="border-t-[1px] border-[#F5F5F5] my-4"></div>

            {/* Article Titles */}
            {loading ? (
              <h5 className="text-black text-[20px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h5> // Article Title Skeleton
            ) : (
              <div className="my-2 hover:scale-105 transition-all duration-300">
                <Link href={articles[0].link} className="text-black text-[20px] font-bold my-2 hover:text-gray-500 transition-colors duration-300">
                  {articles[0].title}
                </Link>
              </div>
            )}

            <div className="border-t-[1px] border-[#F5F5F5] my-2"></div>

            {loading ? (
              <h5 className="text-black text-[20px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h5> // Article Title Skeleton
            ) : (
              <div className="my-2 hover:scale-105 transition-all duration-300">
                <Link href={articles[0].link} className="text-black text-[20px] font-bold my-2 hover:text-gray-500 transition-colors duration-300">
                  {articles[0].title}
                </Link>
              </div>
            )}

            <div className="border-t-[1px] border-[#F5F5F5] my-2"></div>

            {loading ? (
              <h5 className="text-black text-[20px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h5> // Article Title Skeleton
            ) : (
              <div className="my-2 hover:scale-105 transition-all duration-300">
                <Link href={articles[0].link} className="text-black text-[20px] font-bold my-2 hover:text-gray-500 transition-colors duration-300">
                  {articles[0].title}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Second Column (Same Layout as the First Column) */}
        <div className="space-y-4">
          {/* Title */}
          <div className="flex items-center gap-4 mb-8 mt-[70px] sm:mt-[70px] md:mt-[70px]">
            <Link
              href="#"
              className="flex items-center gap-4 text-2xl font-bold relative hover:text-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-[28px] text-black">
                Pilihan Editor
                <span className="absolute bottom-[-10px] left-0 w-24 h-[2px] bg-black"></span>
              </span>
              <div className="w-[35px] h-[35px] border-2 border-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105">
                <FaAngleRight className="text-black" />
              </div>
            </Link>
          </div>

          {/* Image and Article Title */}
          <div className="space-y-4">
            {loading ? (
              <div className="w-[340px] h-[180px] bg-gray-200 mb-4 animate-pulse"></div> // Image Skeleton
            ) : (
              <Link href={articles[1].link}>
                <div className="w-[340px] h-[180px] bg-cover bg-center mb-4 transition-transform transform hover:scale-105" style={{ backgroundImage: `url(${articles[1].image})` }}></div>
              </Link> // Image with hover effect
            )}

            <div className="my-2">
              {loading ? (
                <h4 className="text-black text-[24px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h4> // Title Skeleton
              ) : (
                <Link href={articles[1].link} className="text-black text-[24px] font-bold hover:text-gray-500 transition-colors duration-300">
                  {articles[1].title}
                </Link> // Title with hover effect
              )}
            </div>

            {loading ? (
              <p className="text-black text-[14px] bg-gray-200 h-4 w-[300px] animate-pulse mb-4"></p> // Excerpt Skeleton
            ) : (
              <p className="text-black text-[14px] my-4">{articles[1].excerpt}</p>
            )}

            <div className="border-t-[1px] border-[#F5F5F5] my-4"></div>

            {/* Article Titles */}
            {loading ? (
              <h5 className="text-black text-[20px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h5> // Article Title Skeleton
            ) : (
              <div className="my-2 hover:scale-105 transition-all duration-300">
                <Link href={articles[0].link} className="text-black text-[20px] font-bold my-2 hover:text-gray-500 transition-colors duration-300">
                  {articles[0].title}
                </Link>
              </div>
            )}

            <div className="border-t-[1px] border-[#F5F5F5] my-2"></div>

            {loading ? (
              <h5 className="text-black text-[20px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h5> // Article Title Skeleton
            ) : (
              <div className="my-2 hover:scale-105 transition-all duration-300">
                <Link href={articles[1].link} className="text-black text-[20px] font-bold my-2 hover:text-gray-500 transition-colors duration-300">
                  {articles[1].title}
                </Link>
              </div>
            )}

            <div className="border-t-[1px] border-[#F5F5F5] my-2"></div>

            {loading ? (
              <h5 className="text-black text-[20px] font-bold bg-gray-200 h-6 w-[200px] animate-pulse mb-2"></h5> // Article Title Skeleton
            ) : (
              <div className="my-2 transform hover:scale-105 transition-all duration-300">
                <Link href={articles[1].link} className="text-black text-[20px] font-bold my-2 hover:text-gray-500 transition-colors duration-300">
                  {articles[1].title}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Third Column (Blank Column) */}
        <div className="space-y-4">
          {/* This column is intentionally left blank */}
        </div>
      </div>
    </div>
  );
}
