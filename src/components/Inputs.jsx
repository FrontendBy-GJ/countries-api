import React from 'react';
import { BiChevronDown, BiSearch } from 'react-icons/bi';

const Inputs = ({
  darkMode,
  regions,
  options,
  onClick,
  onSearchChange,
  onKeyDown,
  searchValue,
  onOptionClick,
  onOptionKeyDown,
}) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between py-10 flex-wrap gap-10 px-6">
      <div
        className={`flex items-center p-3 gap-5 max-w-md w-full rounded shadow-md ${
          darkMode ? 'bg-dark-blue text-white' : 'bg-white text-input-lightMode'
        } `}
      >
        <BiSearch className="ml-5 text-xl" />
        <input
          className={`border-none bg-transparent focus:outline-none focus:ring-4 ${
            darkMode
              ? 'placeholder:text-white'
              : 'placeholder:text-input-lightMode'
          } `}
          type="search"
          placeholder="Search for a country..."
          onChange={onSearchChange}
          value={searchValue}
        />
      </div>

      <div
        className={`${
          !options ? 'shadow-md' : 'shadow-none'
        } rounded-md py-3 px-6 relative ${
          darkMode ? 'bg-dark-blue text-white' : 'bg-white text-text-lightMode'
        }`}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-5 cursor-pointer">
          Filter by Region
          <BiChevronDown
            className={`text-xl transition duration-300 ease-in-out ${
              options ? 'rotate-180' : ''
            }`}
          />
        </div>
        <ul
          className={`${options ? 'block' : 'hidden'} ${
            darkMode
              ? 'bg-dark-blue text-white'
              : 'bg-white text-text-lightMode'
          } absolute rounded-md shadow-lg mt-4 inset-x-0 space-y-3 p-6 `}
        >
          {regions.map((region) => (
            <li
              tabIndex={0}
              key={region}
              className="cursor-pointer"
              onClick={onOptionClick}
              onKeyDown={onOptionKeyDown}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inputs;
