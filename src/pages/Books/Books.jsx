import React, { Suspense, useState } from "react";
import Book from "./Book";

const Books = ({data}) => {
  // const [allBooks, setAllBooks] = useState([]);
//   useEffect(()=>{
//     fetch('/booksData.json')
//     .then(res=>res.json())
//     .then(data=> setAllBooks(data))
//   },[])

// const bookPromise = fetch('/booksData.json').then(res=>res.json())
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-semibold text-center  p-6">Books</h2>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
            data.map(book=> <Book key={book.bookId} book={book}></Book>)
        }
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
