import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";

import BookList from "../../components/BookList/BookList";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if(type=== 'Pages'){
        const sortedByPage = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
        setReadList(sortedByPage)
    }
    if(type=== 'Ratings'){
        const sortedByRating = [...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(sortedByRating)
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center py-8 bg-[#f3f3f3] rounded-2xl ">
          Books
        </h2>
      </div>
      <div className="my-5 flex justify-center ">
        <details className="dropdown ">
        <summary className="btn m-1 bg-green-500 text-white">Sort By  {sort?sort:''} </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Rating</a>
          </li>
        </ul>
      </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5 my-10">
            {readList.map((book) => (
              <BookList key={book.bookId} book={book}></BookList>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
