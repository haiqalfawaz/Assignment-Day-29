import React from "react";

const Footer = ({ logo, footerList }) => {
  return (
    <div className="w-full bg-[#1E1E1E] pl-[95px] pt-[58px] pr-[54px] pb-[26px] font-inter">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl text-white">Newsletter & Special Promo</h1>
          <div className="flex items-center justify-center ">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="p-4 text-2xl italic font-medium rounded-s-md"
            />
            <button className="bg-[#65AEF2] text-white text-2xl font-bold p-4 rounded-e-md">
              Subscibe
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" />
          <div className="grid grid-cols-3 mt-16 text-white gap-x-10 gap-y-3">
            {footerList.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-white mt-[144px]">
        <p className="border-t-2">
          © Copyright Booking Hotels. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
