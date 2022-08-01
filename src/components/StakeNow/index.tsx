import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import curveBottom from "../../assets/curve-bottom.png";
import curveTop from "../../assets/curve-top.png";
import StakeItem from "../StakeItem";

const StakeNow = forwardRef((_, ref: any) => {
  const [stakeItems, setStakeItems]: any = useState([]);

  useEffect(() => {
    getStake();
    getIntervalStake();
  }, []);

  const getStake = async () => {
    const data = await axios.get("http://stake.soteriatrust.co/common");
    setStakeItems(data?.data?.networks);
  };

  const getIntervalStake = async () => {
    setInterval(getStake, 30000);
  };

  return (
    <div className="landing-page-stake-now px-4 md:px-[50px] xl:px-[123px] relative" ref={ref}>
      <img
        src={curveTop}
        style={{ top: -1 }}
        className="absolute left-0 overflow-hidden h-[170px] w-full"
      />
      <div className="pt-[200px] font-medium text-[50px] pb-[70px] text-center">STAKE NOW</div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 pb-[171px]">
        {stakeItems?.map((it: any, index: number) => (
          <StakeItem key={index} data={it} />
        ))}
      </div>
      <img
        src={curveBottom}
        style={{ bottom: -1 }}
        className="absolute left-0 overflow-hidden h-[50px] w-full object-fill"
      />
    </div>
  );
});

export default StakeNow;
