import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    author,
    review,
    totalPages,
  } = singleBook;

  return (
    <div className="pb-[70px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-1">
          <img
            className="h-[710px] p-15 rounded-2xl bg-[#13131305]"
            src={image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <p className="font-medium text-lg pt-4 text-gray-600 ">By:{author}</p>
          <div className="divider"></div>
          <p className="font-medium text-lg text-gray-600 ">{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review : </span>
            {review}
          </p>

          <div className="flex gap-3 mt-5">
            <span className="font-bold">Tags:</span>
            {tags.map((tag, ind) => (
              <div key={ind} className="badge badge-soft badge-success ">
                #{tag}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="">
                  <td className="py-2 text-gray-600 font-medium">
                    Number of Pages:
                  </td>
                  <td className="py-2 font-semibold">{totalPages}</td>
                </tr>
                <tr className="">
                  <td className="py-2 text-gray-600 font-medium">Publisher:</td>
                  <td className="py-2 font-semibold">{publisher}</td>
                </tr>
                <tr className="">
                  <td className="py-2 text-gray-600 font-medium">
                    Year of Publishing:
                  </td>
                  <td className="py-2 font-semibold">{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600 font-medium">Rating:</td>
                  <td className="py-2 font-semibold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider"></div>

          <button className="btn mr-3">Mark As Read</button>
          <button className="btn bg-sky-600 text-white">Add To WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
