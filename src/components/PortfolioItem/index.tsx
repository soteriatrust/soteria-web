import React from "react";
const PortfolioItem = ({ icon }: any) => {
  return (
    <div className="rounded-[15px] flex justify-center border border-[#1D2234]">
      <img src={icon} className='w-[126px]' />
    </div>
  );
};
export default PortfolioItem;
