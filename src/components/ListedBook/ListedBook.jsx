import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ListedBook = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;

  return (
    <div className="p-6 border rounded-2xl sm:flex items-center gap-6 my-6">
       <Helmet>
        <title>Listed Books | Book Vibe</title>

      </Helmet>

      <img
        className="h-[172px] px-12 py-7 rounded-2xl bg-slate-100"
        src={image}
        alt=""
      />

      <div className="space-y-4">
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <p className="font-medium text-gray-800">By : {author}</p>

        <div className="md:flex items-center gap-2">
          <div className="font-bold">
            Tag
            {tags.map((tag, index) => (
              <span key={index} className="font-medium px-6 text-[#23BE0A]">
                #{tag}
              </span>
            ))}
          </div>
          <div className="text-gray-700 flex items-center gap-2 space-y-2 my-4 md:my-0">
            <IoLocationOutline />
            Year of Publishing: {yearOfPublishing}
          </div>
        </div>

        <div className="md:flex items-center gap-4 text-gray-600 space-y-4 md:space-y-0">
          <p className="flex items-center gap-2">
            <LuUsers />
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            <CgFileDocument />
            Page: {totalPages}
          </p>
        </div>

        <hr />

        <div className="space-x-2 space-y-2">
          <button className="btn btn-sm rounded-[30px] text-blue-400 bg-blue-100">
            Category: {category}
          </button>
          <button className="btn btn-sm rounded-[30px] text-orange-400 bg-orange-100">
            Rating: {rating}
          </button>
          <Link
            to={`/books/${bookId}`}
            className="btn btn-sm rounded-[30px] text-white bg-[#23BE0A]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
