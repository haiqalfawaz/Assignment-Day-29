import React from "react";

const Facilities = ({ facilities }) => {
  const firstGroup = facilities.slice(0, 1);
  const secondGroup = facilities.slice(1, 3);
  const thirdGroup = facilities.slice(3, 5);

  return (
    <div className="w-full flex justify-center items-center px-20 py-14 bg-[#F3F3F3] gap-10">
      <div>
        {firstGroup.map((facility) => (
          <div key={facility.id} className="relative text-center">
            <img src={facility.image} alt={facility.description} />
            <p className="absolute left-0 right-0 z-10 text-4xl font-bold text-center text-white bottom-10">
              {facility.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-10">
        {secondGroup.map((facility) => (
          <div key={facility.id} className="relative text-center">
            <img src={facility.image} alt={facility.description} />
            <p className="absolute left-0 right-0 z-10 text-4xl font-bold text-center text-white bottom-10">
              {facility.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-10">
        {thirdGroup.map((facility) => (
          <div key={facility.id} className="relative text-center">
            <img src={facility.image} alt={facility.description} />
            <p className="absolute left-0 right-0 z-10 p-2 text-4xl font-bold text-center text-white bottom-10">
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
