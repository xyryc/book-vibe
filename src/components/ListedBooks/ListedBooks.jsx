import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([])
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);


  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "No. of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadList);

      const sortedWishList = [...wishList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishList(sortedWishList);
    }

    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);

      const sortedWishList = [...wishList].sort((a, b) => b.rating - a.rating);
      setWishList(sortedWishList);
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold py-9 rounded-3xl bg-slate-100 text-center">
        Books
      </h3>

      <div className="text-center mb-14">
        <div className="dropdown ">
          <div tabIndex="0" role="button" className="btn m-1 bg-[#23BE0A] text-white">
            {sort ? `Sort by: ${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("No. of pages")}>
              <a>Number of pages</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
        {wishList.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
