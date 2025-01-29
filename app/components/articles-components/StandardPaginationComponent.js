'use client';

import { useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const dummyArticles = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Judul Artikel ${i + 1}`,
  category: "Teknologi",
  date: "2025-01-29",
  link: `/artikel/${i + 1}`,
  image: "https://via.placeholder.com/125x100",
}));

export default function StandardPaginationComponent() {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 5;

  const offset = currentPage * articlesPerPage;
  const currentArticles = dummyArticles.slice(offset, offset + articlesPerPage);
  const pageCount = Math.ceil(dummyArticles.length / articlesPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* List Artikel */}
      <div className="flex flex-col space-y-4">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="flex items-start gap-4 hover:scale-105 transition-transform duration-300"
          >
            <Link
              href={article.link}
              className="w-[125px] h-[100px] bg-gray-300 bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${article.image})` }}
            ></Link>
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-500">
                <span className="font-medium">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg font-bold mt-2">
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

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-2 text-sm"}
          pageClassName={"px-3 py-1 border rounded-md hover:bg-gray-200"}
          activeClassName={"bg-gray-300"}
          previousClassName={"px-3 py-1 border rounded-md hover:bg-gray-200"}
          nextClassName={"px-3 py-1 border rounded-md hover:bg-gray-200"}
          breakClassName={"px-3 py-1 border rounded-md"}
        />
      </div>
    </div>
  );
}
