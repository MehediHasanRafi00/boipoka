import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  // const data = use(bookPromise)
  const {
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    bookId,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm border border-gray-200">
        <figure className="py-6 m-6 bg-[#F3F3F3] rounded-xl">
          <img className="h-[200px]" src={image} />
        </figure>
        <div className="flex gap-3 ps-6">
          {tags.map((tag, ind) => (
            <div key={ind} className="badge badge-soft badge-success ">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-body">
          <h3 className="card-title text-2xl font-bold">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h3>
          <p className="font-medium py-5">By: {publisher}</p>

          <div className="card-actions justify-between pt-5 border-t-2 border-[#13131315] border-dashed font-medium">
            <div className="">{category}</div>
            <div className=" flex items-center gap-2 ">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
