'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { FiSearch, FiMenu } from 'react-icons/fi'; // Import search and menu icons

export default function ResponsiveNavbar() {
  const [day, setDay] = useState('');
  const [restOfDate, setRestOfDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu

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
      {/* First Row: Date, Logo, Search Bar */}
      <div className="flex justify-between items-center mb-4">
        {/* Date (Desktop) */}
        <div className="hidden md:flex flex-col text-sm text-left">
          <strong className="w-full">{day},</strong> {/* First line */}
          <span className="w-full">{restOfDate}</span> {/* Second line */}
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo-kuno.png"
            alt="Logo"
            width={300}
            height={80}
          />
        </div>

        {/* Search Bar for Desktop */}
        <div
          className="hidden md:flex items-center gap-2 border px-6 py-2 rounded-lg cursor-pointer w-[240px]"
          onClick={() => router.push('/search')}
        >
          <FiSearch className="text-gray-400" size={20} />
          <span>Search...</span>
        </div>

        {/* Hamburger Icon for Mobile/Tablet */}
        <div className="md:hidden flex items-center">
          <FiMenu 
            className="cursor-pointer" 
            size={24} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t-[2px] border-[#F5F5F5] mb-4"></div>

      {/* Categories (Desktop) */}
      <div className="hidden md:flex gap-[75px] text-[18px]">
        <a href="/" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Beranda</a>
        <a href="/kategori/how-to" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">How To</a>
        <a href="/kategori/what-is" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">What Is</a>
        <a href="/kategori/overview" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Overview</a>
        <a href="/kategori/tech-news" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Tech News</a>
      </div>

      {/* Mobile/Tablet Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          {/* Date (Mobile) */}
          <span className="text-sm text-left">
            <strong className="block">{day},</strong>
            <span>{restOfDate}</span>
          </span>

          {/* Search Bar (Mobile) */}
          <div
            className="px-4 py-2 border rounded-md w-64 cursor-pointer text-gray-500 flex items-center gap-2"
            style={{ borderRadius: '15px' }}
            onClick={() => router.push('/search')}
          >
            <FiSearch className="text-gray-400" size={20} /> {/* Search Icon */}
            <span>Search...</span>
          </div>

          {/* Categories (Mobile) */}
          <div className="flex flex-col items-center gap-4 text-[18px]">
            <a href="/" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Beranda</a>
            <a href="/kategori/how-to" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">How To</a>
            <a href="/kategori/what-is" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">What Is</a>
            <a href="/kategori/overview" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Overview</a>
            <a href="/kategori/tech-news" className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">Tech News</a>
          </div>
        </div>
      )}
    </nav>
  );
}
