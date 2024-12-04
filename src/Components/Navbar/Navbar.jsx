import React from "react";

const Navbar = ({ logo, navList1, navList2 }) => {
  return (
    <div className="absolute top-0 z-10 flex items-center justify-center px-12 py-4 mt-4 transform -translate-x-1/2 bg-white shadow-md gap-14 left-1/2 rounded-2xl">
      <div className="flex items-center justify-center gap-20 text-base cursor-pointer font-inter">
        {navList1.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <img src={logo} alt="Logo" className="cursor-pointer w-[78px] h-[42px]" />
      <div className="flex items-center justify-center gap-20 text-base cursor-pointer font-inter ">
        {navList2.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
