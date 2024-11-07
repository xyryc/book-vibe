import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addStoredReadList, addStoredWishList } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addStoredReadList(id);
  };

  const handleWishList = (id) => {
    addStoredWishList(id);
  };

  return (
    <div className="my-14 flex flex-col md:flex-row md:gap-12 items-center">
      <Helmet>
        <title>{bookName} | Book Vibe</title>
      </Helmet>

      <img
        className="h-[564px] p-[74px] rounded-2xl"
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

        <div className="font-bold">
          Tag
          {tags.map((tag, index) => (
            <span key={index} className="font-medium px-6 text-[#23BE0A]">
              #{tag}
            </span>
          ))}
        </div>

        <hr className="my-6" />

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="text-gray-600">Number of Pages: </td>
                  <td className="font-semibold">{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-gray-600">Publisher</td>
                  <td className="font-semibold">{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="text-gray-600">Year of Publishing</td>
                  <td className="font-semibold">{yearOfPublishing}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td className="text-gray-600">Rating</td>
                  <td className="font-semibold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn bg-[#50B1C9] text-white"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
