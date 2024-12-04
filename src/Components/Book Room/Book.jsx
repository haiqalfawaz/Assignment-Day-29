import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";

const Book = () => {
  return (
    <div className="px-32 py-20">
      <div className="bg-[#E9F3F6] rounded-3xl pt-9 pr-16 pb-16 pl-20">
        <div className="flex flex-col items-center justify-center gap-2 mb-14">
          <h3 className="text-4xl">Book a Room</h3>
          <p>Discover the perfect space for you!</p>
        </div>
        <div className="flex items-center gap-16 justify-evenly">
          <div className="flex flex-col gap-2 text-base">
            <p className="font-bold">Date</p>
            <div className="flex items-center justify-center gap-5 px-6 py-4 bg-white rounded-xl w-fit">
              <IoCalendarOutline />
              <p>Check Available</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-base">
            <p className="font-bold">Person</p>
            <div className="flex items-center justify-center gap-5 px-6 py-4 bg-white rounded-xl w-fit">
              <FaPerson />
              <p>Adults</p>
              <p>2</p>
              <IoIosArrowDown />
              <FaChildren />
              <p>Children</p>
              <p>0</p>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="flex items-center justify-center px-8 py-4 bg-[#65AEF2] rounded-xl w-fit -mb-5 text-white font-bold">
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
