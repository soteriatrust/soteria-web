import Global from "../svgr/Global";
import MemoMore from "../svgr/More";
import MemoTelegram from "../svgr/Telegram";
import MemoTwitter from "../svgr/Twitter";
import { memo } from "react";
import "./StakeItem.scss";
const StackItem = ({ data }: any) => {
  const {
    logo,
    name,
    projectTw,
    projectUrl,
    projectTg,
    linkStake,
    stakeAPR: { nominal, realTime },
  } = data;
  return (
    <div className="stake-item rounded-[20px] flex flex-col items-center p-[25px] bg-white relative">
      <div className="icon-more">
        <MemoMore className="absolute top-[10px] right-[15px] cursor-pointer " />
        <div className="menu text-[#808080] absolute p-4 bg-white right-[10px] invisible">
          {projectUrl && (
            <div className="cursor-pointer">
              <Global className="w-[20px]" />{" "}
              <a href={projectUrl} target="_blank" className="ml-1">
                Website
              </a>
            </div>
          )}
          {projectTw && (
            <div className="cursor-pointer">
              <MemoTwitter className="w-[20px]" onClick={() => window.open(projectTw)} />{" "}
              <a href={projectTw} target="_blank" className="ml-1">
                Twitter
              </a>
            </div>
          )}
          {projectTg && <div className="cursor-pointer">
            <MemoTelegram className="w-[20px]" />
            <a href={projectTg} target="_blank" className="ml-1">
              Telegram
            </a>
          </div>}
        </div>
      </div>

      <img src={logo} className="w-[80px] mb-[15px]" />
      <div className="text-[#070C20] text-[20px] pb-[15px]">
        <span className="font-light">APR:</span>
        <span className="font-medium"> {(nominal * 100)?.toFixed(2)}%</span>
      </div>
      <a href={linkStake} target="_blank" className="bg-gradient-to-r p-[1px] rounded-full from-[#B1891D] to-[#EFC659] text-[#B1891D]">
        <div className="p-1 bg-white rounded-full py-[7px] px-[25px] hover:text-[white] hover:bg-gradient-to-r from-[#B1891D] to-[#EFC659] text-[#B1891D] cursor-pointer">
          STAKE NOW
        </div>
      </a>
    </div>
  );
};
export default memo(StackItem);
