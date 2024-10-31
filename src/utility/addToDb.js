const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");

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
    console.log(id, "already exist in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { addStoredReadList };
