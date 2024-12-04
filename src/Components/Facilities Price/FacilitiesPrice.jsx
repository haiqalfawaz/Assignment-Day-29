import React from "react";
import Card from "../Card/Card";

const FacilitiesPrice = ({ facilitiesPriceList }) => {
  return (
    <div className="px-[60px] pt-20 pb-[120px] flex justify-between items-center gap-[60px]">
      {facilitiesPriceList.map((facilityPrice) => (
        <Card facilityPrice={facilityPrice} />
      ))}
    </div>
  );
};

export default FacilitiesPrice;
