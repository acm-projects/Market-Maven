import { useState } from "react";

const ShopSortBar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Browse Bar and Sort */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-19">
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: '#472836' }}>
            Browse
          </h1>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  id="menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  Sort
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {/* Menu items */}
                    <button
                      className="text-gray-500 block px-4 py-2 text-sm"
                      style={{ color: '#472836' }}
                      onClick={() => props.sortItems("lowToHigh")}
                    >
                      Price: Low to High
                    </button>
                    <button
                      className="text-gray-500 block px-4 py-2 text-sm"
                      style={{ color: '#472836' }}
                      onClick={() => props.sortItems("highToLow")}
                    >
                      Price: High to Low
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopSortBar;
