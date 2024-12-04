import React from "react";

const SpecialOffers = () => {
  return (
    <div className="px-[60px] py-20">
      <div className="px-[19.5px] py-0">
        <div className="text-[#65AEF2] text-3xl font-inter">
          <p>Special Offers</p>
        </div>
        <div className="flex items-center justify-between mt-5 mb-10 font-inter">
          <h1 className="text-6xl font-medium">Best Offer of the month</h1>
          <h1 className="text-3xl font-bold text-[#65AEF2] cursor-pointer">
            View All
          </h1>
        </div>
        <div className="text-2xl font-normal font-inter">
          <p>
            Experience Fantastic Benefits and Obtain Better Rates When You
            <br /> Make a Direct Booking on Our Official Website
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
