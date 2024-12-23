'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component

export default function Navbar() {
  // Get current date dynamically
  const [day, setDay] = useState(''); // Separate weekday
  const [restOfDate, setRestOfDate] = useState(''); // Rest of the date

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
            src="/logo/logo-kuno.png" // Path to your logo
            alt="Logo"
            width={300} // Increased width for wider logo
            height={80} // Smaller height for the desired aspect ratio
          />
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md w-64"
        />
      </div>

      {/* Separator Line with 3px thickness */}
      <div className="border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Categories */}
      <div className="flex gap-[75px] text-[18px]">
        <a href="/" className="hover:underline">Beranda</a>
        <a href="/kategori/how-to" className="hover:underline">How To</a>
        <a href="/kategori/what-is" className="hover:underline">What Is</a>
        <a href="/kategori/overview" className="hover:underline">Overview</a>
        <a href="/kategori/tech-news" className="hover:underline">Tech News</a>
        {/* Add more categories here */}
      </div>
    </nav>
  );
}
