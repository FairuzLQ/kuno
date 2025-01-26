'use client';

import React, { useState, useEffect } from "react";

const articles = [
  { title: "Alpine.js, mengenal library javascript satu ini" },
  { title: "Adakah cara untuk untethered jailbreak iphone?" },
  { title: "Bahasa pemrograman terpopuler di tahun 2024" },
  { title: "Cara menggunakan frida" },
  { title: "Cek fitur terbaru React 18" },
  { title: "C++ vs Python: mana yang lebih efisien?" },
  { title: "Diving into Web3: blockchain and decentralized apps" },
  { title: "Django vs Flask: mana yang lebih cocok?" },
  { title: "Exploring the world of API Design" },
  { title: "Evolusi bahasa pemrograman Go" },
  { title: "Framework populer untuk React 2024" },
  { title: "Git Basics: Understanding version control" },
  { title: "HTML vs HTML5: Apa bedanya?" },
  { title: "How to set up a React project" },
  { title: "Intro to TypeScript for Beginners" },
  { title: "JavaScript ES6 Features You Should Know" },
  { title: "JQuery: Still Relevant in 2024?" },
  { title: "Kotlin: Why is it popular for Android development?" },
  { title: "Learn React Hooks in 2024" },
  { title: "Laravel vs Node.js for Backend Development" },
  { title: "Mastering Docker in 30 Days" },
  // Tambahkan lebih banyak artikel untuk pengujian.
];

const groupArticlesByAlphabet = (articles) => {
  const grouped = {};
  articles.forEach((article) => {
    const firstLetter = article.title[0].toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(article);
  });

  // Urutkan berdasarkan alfabet.
  return Object.keys(grouped)
    .sort()
    .reduce((obj, key) => {
      obj[key] = grouped[key].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return obj;
    }, {});
};

const Skeleton = ({ isAlphabetSkeleton }) => (
  <div
    className={`mb-2 ${
      isAlphabetSkeleton ? "h-9 w-16" : "h-7 w-full"
    } bg-gray-300 rounded animate-pulse ${isAlphabetSkeleton ? 'text-4xl' : 'text-2xl'}`}
  ></div>
);

const SitemapListComponent = () => {
  const groupedArticles = groupArticlesByAlphabet(articles);
  const alphabets = Object.keys(groupedArticles);

  const [visibleAlphabets, setVisibleAlphabets] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentCount = visibleAlphabets.length;
      setVisibleAlphabets((prev) => [
        ...prev,
        ...alphabets.slice(currentCount, currentCount + 5),
      ]);
      setLoading(false);
    }, 1000); // Simulasi delay loading.
  };

  useEffect(() => {
    loadMore(); // Load awal 5 huruf.
  }, []);

  return (
    <div className="p-4">
      {visibleAlphabets.map((alphabet) => (
        <div key={alphabet} className="mb-12">
          <h2 className="text-4xl font-bold mb-5">{alphabet}</h2> {/* Ukuran abjad 36px */}
          {groupedArticles[alphabet].map((article, index) => (
            <div key={index} className="mb-2 text-2xl"> {/* Ukuran title 28px */}
              {article.title}
            </div>
          ))}
        </div>
      ))}

      {loading && (
        <div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton key={idx} isAlphabetSkeleton={idx === 0} />
          ))}
        </div>
      )}

      {!loading && visibleAlphabets.length < alphabets.length && (
        <button
          className="text-black"
          onClick={loadMore}
        >
          Load More...
        </button>
      )}
    </div>
  );
};

export default SitemapListComponent;
