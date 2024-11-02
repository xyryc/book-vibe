import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("readlist");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    // already exist
    toast.error("Already exist in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("readlist", storedListStr);

    toast.success("This book is added to your read list.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wishlist");

  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addStoredWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    // already exist
    toast.error("Already exist in the wishlist");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wishlist", storedWishListStr);

    toast.success("This book is added to your wishlist.");
  }
};

export { addStoredReadList, addStoredWishList, getStoredReadList };
