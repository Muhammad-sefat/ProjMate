import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const SelectInput = ({
  options = [],
  defaultValue = "Select Option",
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(defaultValue);

  // outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setContent(value);
    setIsActive(false);
    if (onChange) onChange(value);
  };

  return (
    <div className="relative w-[180px]">
      <button
        className="bg-white dark:bg-transparent dark:border-slate-600 text-primary 
                   border border-[#d1d1d1] rounded-md w-full h-[42px] px-3 
                   flex items-center justify-between relative cursor-pointer dropdown text-sm"
        onClick={() => setIsActive(!isActive)}
      >
        {content}
        <IoChevronDown
          className={`${
            isActive ? "rotate-180" : "rotate-0"
          } transition-all duration-300 text-[1.2rem]`}
        />
      </button>
      <div
        className={`${
          isActive ? "z-[1] opacity-100 scale-100" : "z-[-1] opacity-0 scale-95"
        } w-full absolute top-12 left-0 right-0 z-40
           bg-white rounded-xl flex flex-col overflow-hidden 
           transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {options?.map((option, index) => (
          <p
            className="py-2 px-4 text-sm hover:bg-blue-100 transition-all duration-200 cursor-pointer"
            key={index}
            onClick={() => handleSelect(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
