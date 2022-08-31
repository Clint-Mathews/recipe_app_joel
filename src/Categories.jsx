import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import { mealTypes, mealImages } from "./SearchData.js";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <div className="body grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5 pt-24 pb-5 px-4 md:px-24">
        {mealTypes.map((type, id) => {
          return (
            <Link
              key={id}
              to={"/search?mealTypes=" + type}
              className="flex flex-col gap-y-6 hover: relative w-full"
            >
              <img
                className="drop-shadow-xl filter rounded-lg object-cover object-center h-56 md:h-96"
                src={mealImages[id]}
                alt={type}
              />
              <div className="flex flex-col gap-y-2 px-4 absolute bottom-0 rounded-lg bg-black fade-to-top h-full w-full"></div>
              <p className="text-lg md:text-2xl font-semibold truncate text-white absolute bottom-4 md:bottom-10 left-4 md:left-10 font-inter border-red-500 border-b-2">
                {type}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
