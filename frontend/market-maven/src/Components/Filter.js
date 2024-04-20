import React from "react";

const Filter = (props) => {
  return (
    <>
      <div className="inset-y-0 left-0 z-40 flex flex-col w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        </div>
        <div className="flex flex-col py-4 px-4">
          <form className="border-b border-gray-200 pb-4">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              <li>
                <a href="#" className="block px-2 py-3">
                  Fresh Produce
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Baked Goods
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Art
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Gifts
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Home Decor
                </a>
              </li>
            </ul>
          </form>
          <div className="py-6 pr-16">
            <h3 className="px-2 pb-3 font-medium text-gray-900">Color</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center">
                <input
                  id="filter-mobile-color-0"
                  name="color[]"
                  value="white"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-mobile-color-0"
                  className="ml-3 text-gray-500"
                >
                  White
                </label>
              </div>
              {/* Repeat for other color options */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
