'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { FiSearch } from 'react-icons/fi'; // Import search icon

export default function Navbar() {
  // Get current date dynamically
  const [day, setDay] = useState(''); // Separate weekday
  const [restOfDate, setRestOfDate] = useState(''); // Rest of the date

  const router = useRouter(); // Use Next.js router for redirection

  useEffect(() => {
    const optionsWeekday = { weekday: 'long' };
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };

    const currentDate = new Date();
    const weekday = currentDate.toLocaleDateString('id-ID', optionsWeekday);
    const date = currentDate.toLocaleDateString('id-ID', optionsDate);

    setDay(weekday);
    setRestOfDate(date);
  }, []);

  return (
    <nav className="bg-white text-black p-4 px-[100px]">
      {/* First Row: Date, Logo, Search Bar */}
      <div className="flex justify-between items-center mb-4">
        {/* Date */}
        <span className="text-sm text-left">
          <strong className="block">{day},</strong>
          <span>{restOfDate}</span>
        </span>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo-kuno.png"
            alt="Logo"
            width={300}
            height={80}
          />
        </div>

        {/* Search Redirect */}
        <div
          className="px-4 py-2 border rounded-md w-64 cursor-pointer text-gray-500 flex items-center gap-2"
          style={{ borderRadius: '15px' }} // Set border radius to 10px
          onClick={() => router.push('/search')}
        >
          <FiSearch className="text-gray-400" size={20} /> {/* Search Icon */}
          <span>Search...</span>
        </div>
      </div>

      {/* Separator Line with 3px thickness */}
      <div className="border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Categories */}
      <div className="flex gap-[75px] text-[18px]">
        <a
          href="/"
          className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
        >
          Beranda
        </a>
        <a
          href="/kategori/how-to"
          className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
        >
          How To
        </a>
        <a
          href="/kategori/what-is"
          className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
        >
          What Is
        </a>
        <a
          href="/kategori/overview"
          className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
        >
          Overview
        </a>
        <a
          href="/kategori/tech-news"
          className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
        >
          Tech News
        </a>
      </div>
    </nav>
  );
}
