import React from "react";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
  IoPeople,
} from "react-icons/io5";

const BookList = ({ book }) => {
  const {
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    author,
    
    totalPages,
  } = book;
  return (
    <div className="p-6 border rounded-2xl border-[#13131315]">
      <div className="flex flex-col md:flex-row   items-center gap-6">
        <div className="">
          <img
            className="h-[200px] py-7 px-12 rounded-2xl bg-[#13131305]"
            src={image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl">{bookName}</h1>
          <p className="font-medium pt-4 text-gray-600 ">By: {author}</p>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="font-bold">Tags:</span>
            {tags.map((tag, ind) => (
              <div key={ind} className="badge badge-soft badge-success ">
                #{tag}
              </div>
            ))}
            <p className="flex items-center text-gray-600 gap-2">
              <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-5 flex-wrap mt-4">
            <p className="flex items-center text-gray-600 gap-2">
              <IoPeople /> Publisher: {publisher}
            </p>
            <p className="flex items-center text-gray-600 gap-2">
              <IoDocumentTextOutline /> Page: {totalPages}
            </p>
          </div>
          <div className="divider"></div>

          <div className="flex gap-4 items-center flex-wrap">
            <span className="font-medium  py-2 px-5 bg-blue-100 text-blue-500  rounded-full">Category: {category}</span>
            <span className="font-medium  py-2.5 px-5 bg-orange-100 text-orange-500 rounded-full">Rating: {rating}</span>
            <button className="btn bg-green-500 text-white rounded-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
