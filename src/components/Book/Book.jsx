import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="p-6 border rounded-2xl">
        <div className="bg-[#F3F3F3] rounded-2xl">
          <img className="h-[200px] mx-auto py-2" src={image} alt={bookName} />
        </div>

        <div className="">
          <div className="font-medium text-[#23BE0A] flex gap-3 mt-6 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-4 py-2">{tag}</span>
            ))}
          </div>

          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-4">{bookName}</h3>
            <p className="font-medium text-gray-700">By: {author}</p>
          </div>

          <hr className="border-dashed" />

          <div className="flex justify-between mt-5">
            <span className="font-medium text-gray-600">{category}</span>
            <span className="flex items-center gap-2">
              {rating}
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
