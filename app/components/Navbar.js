'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

export default function ResponsiveNavbar() {
  const [day, setDay] = useState('');
  const [restOfDate, setRestOfDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

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
      {/* First Row */}
      <div className="flex justify-between items-center mb-4">
        {/* Date */}
        <div className="hidden md:flex flex-col text-sm text-left">
          <strong>{day},</strong>
          <span>{restOfDate}</span>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo-kuno.png"
            alt="Logo"
            width={300}
            height={80}
            className="md:w-[200px]"
          />
        </div>

        {/* Search Bar */}
        <div
          className="hidden md:flex items-center gap-2 border px-6 py-2 rounded-lg cursor-pointer w-[240px]"
          onClick={() => router.push('/search')}
        >
          <FiSearch className="text-gray-400" size={20} />
          <span>Search...</span>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-8 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-[6px]' : 'mb-2'
            }`}
          />
          <div
            className={`w-8 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-8 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'mt-2'
            }`}
          />
        </div>
      </div>

      {/* Separator */}
      <div className="border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Desktop Categories */}
      <div className="hidden md:flex gap-[75px] text-[18px] md:gap-[40px]">
        <a href="/" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Beranda</a>
        <a href="/kategori/how-to" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">How To</a>
        <a href="/kategori/what-is" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">What Is</a>
        <a href="/kategori/overview" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Overview</a>
        <a href="/kategori/tech-news" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Tech News</a>
      </div>

      {/* Mobile/Tablet Menu with Animation */}
      <div
        className={`md:hidden flex flex-col items-center mt-4 space-y-4 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Date */}
        <span className="text-sm text-left">
          <strong className="block">{day},</strong>
          <span>{restOfDate}</span>
        </span>

        {/* Search Bar */}
        <div
          className="px-4 py-2 border rounded-md w-64 cursor-pointer text-gray-500 flex items-center gap-2"
          style={{ borderRadius: '15px' }}
          onClick={() => router.push('/search')}
        >
          <FiSearch className="text-gray-400" size={20} />
          <span>Search...</span>
        </div>

        {/* Categories */}
        <div className="flex flex-col items-center gap-4 text-[18px]">
          <a href="/" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Beranda</a>
          <a href="/kategori/how-to" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">How To</a>
          <a href="/kategori/what-is" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">What Is</a>
          <a href="/kategori/overview" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Overview</a>
          <a href="/kategori/tech-news" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Tech News</a>
        </div>
      </div>
    </nav>
  );
}
