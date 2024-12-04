import React from "react";

const Card = ({ facilityPrice }) => {
  return (
    <div
      key={facilityPrice.id}
      className="px-5 pt-5 pb-12 bg-white drop-shadow-2xl rounded-3xl font-inter"
    >
      <img src={facilityPrice.image} alt={facilityPrice.title} />
      <div className="flex flex-col gap-5 pt-7">
        <p className="font-bold text-[#5E5E5E] text-xs">
          {facilityPrice.facility}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{facilityPrice.title}</p>
          <div className="flex items-center justify-center gap-1 text-base">
            <p>{facilityPrice.icons}</p>
            <p>{facilityPrice.capacity}</p>
          </div>
        </div>
        <p className="text-[#5E5E5E] font-light text-xs w-[360px] h-[30px]">
          {facilityPrice.description}
        </p>
        <p className="flex items-center justify-center">
          {facilityPrice.price === 499 ? (
            <span>
              <strong className="text-4xl font-bold">
                ${facilityPrice.price}
              </strong>
              /table
            </span>
          ) : (
            <span>
              <strong className="text-4xl font-bold">
                ${facilityPrice.price}
              </strong>
              /night
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
