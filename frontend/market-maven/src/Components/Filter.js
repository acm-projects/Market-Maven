import React from "react";

const Filter = (props) => {
  return (
    <>
      <div className="inset-y-0 left-0 z-40 flex flex-col w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        </div>
        <div className="flex flex-col py-4 px-4">
          <form className="border-b border-gray-200 pb-4">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              <li>
                <a href="#" className="block px-2 py-3">
                  Totes
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Backpacks
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Travel Bags
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Hip Bags
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Laptop Sleeves
                </a>
              </li>
            </ul>
          </form>
          <div className="py-4">
            <h3 className="-mx-2 -my-3 font-medium text-gray-900">Color</h3>
            <div className="space-y-4 mt-2">
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
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  White
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-mobile-color-1"
                  name="color[]"
                  value="beige"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-mobile-color-1"
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  Beige
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-mobile-color-2"
                  name="color[]"
                  value="blue"
                  type="checkbox"
                  checked
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-mobile-color-2"
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  Blue
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-mobile-color-3"
                  name="color[]"
                  value="brown"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-mobile-color-3"
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  Brown
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-mobile-color-4"
                  name="color[]"
                  value="green"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-mobile-color-4"
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  Green
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-mobile-color-5"
                  name="color[]"
                  value="purple"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-mobile-color-5"
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  Purple
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
