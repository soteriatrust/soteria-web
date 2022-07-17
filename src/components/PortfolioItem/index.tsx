import React from "react";
const PortfolioItem = ({ icon }: any) => {
  return (
    <div className="rounded-[15px] flex justify-center border-[#1D2234]  border-[1px] px-[40px] py-[20px]">
      <img src={icon} className='w-[126px]' />
    </div>
  );
};
export default PortfolioItem;
