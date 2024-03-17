import React, { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-2 px-4 mb-2  text-left relative"
        onClick={toggleAccordion}
      >
        <span className="md:text-2xl text-base font-semibold text-black">
          {title}
        </span>
        <i
          className={`fas fa-chevron-down text-xl font-bold text-[#F24E1E] transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
        ></i>
        <div className="absolute bottom-0 left-0 w-full border-b border-[#F24E1E]"></div>
      </button>
      {isOpen && (
        <div>
          <div className="bg-gray-100 p-4 text-start text-base font-normal text-gray-600">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
