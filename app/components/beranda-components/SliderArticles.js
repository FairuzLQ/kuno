'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa'; // Import the icon
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles

export default function SliderArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const fetchedArticles = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: `Article Title ${index + 1}`,
        link: `/article/${index + 1}`,
        image: 'https://via.placeholder.com/230x130',
        category: `Category ${index + 1}`,
        date: `Dec ${24 - index}, 2024`,
      }));
      setArticles(fetchedArticles);
      setLoading(false);
    }, 2000); // Simulate 2-second loading
  }, []);

  return (
    <div className="p-5 sm:p-16 md:p-40 bg-white mt-[0px] sm:mt-[-70px] md:mt-[-200px] xl:mt-[-220px]">
      {/* Separator Line */}
      <div className="border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Title */}
      <div className="flex items-center gap-4 mb-8 mt-[70px] sm:mt-[70px] md:mt-[70px]">
        <Link
          href="#"
          className="flex items-center gap-4 text-2xl font-bold relative hover:text-gray-700 transition-all duration-200 transform hover:scale-105"
        >
          <span className="text-[28px] text-black">
            Tekno Insight
            <span className="absolute bottom-[-10px] left-0 w-24 h-[2px] bg-black"></span>
          </span>
          <div className="w-[35px] h-[35px] border-2 border-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105">
            <FaAngleRight className="text-black" />
          </div>
        </Link>
      </div>

      {/* Swiper Container */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white p-4">
              <div className="w-full h-[130px] bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Default view is 1 for small screens
          navigation
          loop
          className="my-8"
          breakpoints={{
            // Adjust the slides per view based on the screen size
            640: {
              slidesPerView: 2, // 2 articles on tablet
            },
            1024: {
              slidesPerView: 3, // 3 articles on desktop
            },
            1280: {
              slidesPerView: 4, // 4 articles on desktop
            },
          }}
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="bg-white p-4 mx-[70px] sm:mx-0">
                {/* Image */}
                <Link href={article.link}>
                  <div
                    className="w-full h-[130px] bg-cover bg-center mb-4 transition-transform transform hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  ></div>
                </Link>

                {/* Title */}
                <Link href={article.link}>
                  <h4 className="text-black text-[20px] font-bold mb-2 hover:text-gray-500 transition-colors duration-300">
                    {article.title}
                  </h4>
                </Link>

                {/* Category and Date */}
                <div className="flex justify-between text-[14px] text-gray-500">
                  <span className="font-medium">{article.category}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
