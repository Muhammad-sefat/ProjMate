import React, { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

const CommonInput = ({
  options = [],
  defaultLabel = "Select Option",
  onChange,
  icon: Icon,
  className = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState(defaultLabel);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setContent(option);
    setIsActive(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="flex items-center flex-col gap-5 justify-center w-full">
      <button
        type="button"
        className={`bg-[#fff] dark:bg-transparent text-gray-500 border rounded-md justify-between px-4 py-2 flex items-center w-full relative cursor-pointer dropdown ${className}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-gray-500" />}
          <span>{content}</span>
        </div>
        <IoChevronDown
          className={`${
            isActive ? "rotate-180" : "rotate-0"
          } transition-all duration-300 text-[1.2rem]`}
        />
        <div
          className={`${
            isActive
              ? "z-[1] opacity-100 scale-100"
              : "z-[-1] opacity-0 scale-95"
          } w-full absolute top-10 left-0 right-0 z-40 mt-2  bg-[#fff] rounded-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out border`}
          style={{ boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)" }}
        >
          {options.map((option, index) => (
            <p
              key={index}
              className="py-2 px-4 dark:hover:bg-slate/40 hover:bg-blue-100 text-gray-800 text-start transition-all duration-200"
              onClick={() => handleSelect(option)}
            >
              {option}
            </p>
          ))}
        </div>
      </button>
    </div>
  );
};

export default CommonInput;
