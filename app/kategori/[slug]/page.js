"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const articles = [
    {
      id: 1,
      title: "Panduan Lengkap Menggunakan Docker untuk Pengembangan",
      slug: "panduan-docker",
      category: "how-to",
      description: "Pelajari cara menggunakan Docker untuk mempermudah pengembangan aplikasi.",
      author: "Fikri Ardiansyah",
      publishedDate: "2025-03-10",
      thumbnail: "https://picsum.photos/seed/docker/300/200",
    },
    {
      id: 2,
      title: "Apa Itu Kubernetes dan Bagaimana Cara Kerjanya?",
      slug: "apa-itu-kubernetes",
      category: "what-is",
      description: "Pemahaman dasar tentang Kubernetes dan bagaimana cara menggunakannya.",
      author: "Dinda Putri",
      publishedDate: "2025-03-09",
      thumbnail: "https://picsum.photos/seed/kubernetes/300/200",
    },
    {
      id: 3,
      title: "Sejarah dan Perkembangan AI dalam Teknologi Modern",
      slug: "sejarah-ai",
      category: "overview",
      description: "Bagaimana AI berkembang dari teori hingga menjadi bagian dari kehidupan kita.",
      author: "Rizky Pratama",
      publishedDate: "2025-03-08",
      thumbnail: "https://picsum.photos/seed/ai/300/200",
    },
    {
      id: 4,
      title: "OpenAI Merilis GPT-5, Apa yang Baru?",
      slug: "openai-gpt5",
      category: "tech-news",
      description: "GPT-5 hadir dengan peningkatan performa, lebih cepat, dan lebih akurat!",
      author: "Aulia Ramadhan",
      publishedDate: "2025-03-07",
      thumbnail: "https://picsum.photos/seed/gpt5/300/200",
    },
    {
      id: 5,
      title: "Bagaimana Cara Menggunakan Next.js untuk Membuat Website?",
      slug: "cara-nextjs",
      category: "how-to",
      description: "Panduan langkah demi langkah dalam membangun website dengan Next.js.",
      author: "Dian Anggraini",
      publishedDate: "2025-03-06",
      thumbnail: "https://picsum.photos/seed/nextjs/300/200",
    },
    {
      id: 6,
      title: "Mengenal Konsep Cloud Computing dan Jenis-jenisnya",
      slug: "konsep-cloud",
      category: "what-is",
      description: "Penjelasan mendalam tentang cloud computing dan penerapannya di berbagai industri.",
      author: "Andi Saputra",
      publishedDate: "2025-03-05",
      thumbnail: "https://picsum.photos/seed/cloud/300/200",
    },
    {
      id: 7,
      title: "Tren Teknologi yang Akan Mendominasi di Tahun 2025",
      slug: "tren-teknologi-2025",
      category: "overview",
      description: "Prediksi tren teknologi yang akan mengubah industri di tahun 2025.",
      author: "Nina Lestari",
      publishedDate: "2025-03-04",
      thumbnail: "https://picsum.photos/seed/trend2025/300/200",
    },
    {
      id: 8,
      title: "Apple Meluncurkan Chip M3, Apa Saja Keunggulannya?",
      slug: "apple-chip-m3",
      category: "tech-news",
      description: "Chip M3 dari Apple membawa inovasi performa tinggi dengan efisiensi daya lebih baik.",
      author: "Reza Fadillah",
      publishedDate: "2025-03-03",
      thumbnail: "https://picsum.photos/seed/applem3/300/200",
    },
  ];

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.split("/").pop();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const filtered = articles.filter((article) => article.category === category);
    setFilteredArticles(filtered);
  }, [category]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold capitalize">Kategori: {category.replace("-", " ")}</h1>
      <div className="mt-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="flex items-start space-x-4 p-4 border rounded-md shadow-md my-2">
              <img src={article.thumbnail} alt={article.title} className="w-32 h-20 object-cover rounded-md" />
              <div>
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-gray-600 text-sm">{article.description}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Oleh <span className="font-semibold">{article.author}</span> - {article.publishedDate}
                </p>
                <a href={`/artikel/${article.slug}`} className="text-blue-500 hover:underline mt-2 inline-block">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Belum ada artikel dalam kategori ini.</p>
        )}
      </div>
    </div>
  );
}
