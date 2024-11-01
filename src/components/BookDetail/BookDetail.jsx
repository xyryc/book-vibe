import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addStoredReadList, addStoredWishList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  //   console.log(bookId);

  const data = useLoaderData();
  //   console.log(data);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
  } = book;

  const handleMarkAsRead = (id) => {
    addStoredReadList(id);
  };

  const handleWishList = (id) => {
    addStoredWishList(id);
  };

  return (
    <div className="my-14 flex flex-col md:flex-row md:gap-12">
      <img
        className="w-[425px] p-[74px] bg-slate-100 rounded-2xl"
        src={image}
        alt={bookName}
      />

      <div>
        <div className="mb-6">
          <h1 className="font-bold text-[40px] mb-4">{bookName}</h1>
          <p className="text-xl font-medium text-gray-700">By: {author}</p>
        </div>

        <hr />
        <p className="my-4 text-xl font-medium">{category}</p>
        <hr />

        <p className="leading-[26px] my-6 text-gray-600">
          <span className="font-bold text-black">Review: </span>
          {review}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn btn-accent"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
