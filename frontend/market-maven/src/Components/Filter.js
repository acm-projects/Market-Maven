import React, { useState } from "react";

const Filter = ({ onCategorySelect }) => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <>
      <div className="inset-y-0 left-0 z-40 flex flex-col w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <h2 className="text-lg font-medium" style={{ color: '#472836' }}>Filters</h2>
        </div>
        <div className="flex flex-col py-4 px-4">
          <form className="border-b border-gray-200 pb-4">
            <h3 className="sr-only" style={{ color: '#472836' }}>Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium" style={{ color: '#472836' }}>
              <li>
                <a href="" className="block px-2 py-3" onClick={() => handleCategorySelect('65fcc9a9974e2f28519d4c69')}>
                  Produce & Baked Goods
                </a>
              </li>
              <li>
                <a href="" className="block px-2 py-3">
                  Arts & Crafts
                </a>
              </li>
              <li>
                <a href="" className="block px-2 py-3">
                  Fashion & Accessories
                </a>
              </li>
              <li>
                <a href="" className="block px-2 py-3">
                  Vintage & Antiques
                </a>
              </li>
              <li>
                <a href="" className="block px-2 py-3">
                  Handmade Items
                </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">
                  Gifts & Souvenirs
                </a>
              </li>
              <li>
                <a href="" className="block px-2 py-3">
                  Home Decor
                </a>
              </li>
            </ul>
          </form>
          <div className="py-6">
            <h3 className="px-20 pb-3 font-medium" style={{ color: '#472836' }}>Availability</h3>
            <div className="flex flex-col items-start space-y-4 px-2">
              <div className="flex items-center">
                <input
                  id="filter-in-stock"
                  name="availability[]"
                  value="inStock"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="filter-in-stock" className="ml-3" style={{ color: '#472836' }}>
                  In-Stock
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-out-of-stock"
                  name="availability[]"
                  value="outOfStock"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="filter-out-of-stock" className="ml-3" style={{ color: '#472836' }}>
                  Out-of-Stock
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-pre-order"
                  name="availability[]"
                  value="preOrder"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="filter-pre-order" className="ml-3" style={{ color: '#472836' }}>
                  Pre-Order
                </label>
              </div>
              {/* Repeat for other availability options */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
