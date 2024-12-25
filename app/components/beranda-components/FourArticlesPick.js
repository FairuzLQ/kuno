'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa'; // Import the icon

export default function FourArticlesPick() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedArticles = [
        {
          id: 1,
          title: 'Dummy Article 1',
          link: '/article/1',
          image: 'https://via.placeholder.com/125x100',
          category: 'Category 1',
          date: 'Dec 24, 2024',
        },
        {
          id: 2,
          title: 'Dummy Article 2',
          link: '/article/2',
          image: 'https://via.placeholder.com/125x100',
          category: 'Category 2',
          date: 'Dec 23, 2024',
        },
        {
          id: 3,
          title: 'Dummy Article 3',
          link: '/article/3',
          image: 'https://via.placeholder.com/125x100',
          category: 'Category 3',
          date: 'Dec 22, 2024',
        },
        {
          id: 4,
          title: 'Dummy Article 4',
          link: '/article/4',
          image: 'https://via.placeholder.com/125x100',
          category: 'Category 4',
          date: 'Dec 21, 2024',
        },
      ];
      setArticles(fetchedArticles);
      setLoading(false);
    }, 2000); // Simulate loading
  }, []);

  return (
    <div className="p-0 sm:p-8 md:p-20">
      {/* Separator Line */}
      <div className="md:border-t-[2px] border-[#F5F5F5] mb-4"></div>

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Column */}
        <div className="space-y-4">
          {loading
            ? Array(2)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                    {/* Skeleton for Articles */}
                    <div className="w-[125px] h-[100px] bg-gray-200 animate-pulse"></div> {/* Image Skeleton */}
                    <div className="flex-1 space-y-2">
                      <div className="w-1/4 h-4 bg-gray-300 animate-pulse"></div> {/* Category Skeleton */}
                      <div className="w-2/3 h-4 bg-gray-300 animate-pulse"></div> {/* Title Skeleton */}
                    </div>
                  </div>
                ))
            : articles.slice(0, 2).map((article) => (
                <div key={article.id} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
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

        {/* Second Column */}
        <div className="space-y-4">
          {loading
            ? Array(2)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                    {/* Skeleton for Articles */}
                    <div className="w-[125px] h-[100px] bg-gray-200 animate-pulse"></div> {/* Image Skeleton */}
                    <div className="flex-1 space-y-2">
                      <div className="w-1/4 h-4 bg-gray-300 animate-pulse"></div> {/* Category Skeleton */}
                      <div className="w-2/3 h-4 bg-gray-300 animate-pulse"></div> {/* Title Skeleton */}
                    </div>
                  </div>
                ))
            : articles.slice(2, 4).map((article) => (
                <div key={article.id} className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
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
