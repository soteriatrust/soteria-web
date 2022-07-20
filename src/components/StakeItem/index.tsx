import Global from "../svgr/Global";
import MemoMore from "../svgr/More";
import MemoTelegram from "../svgr/Telegram";
import MemoTwitter from "../svgr/Twitter";
import "./StakeItem.scss";
const StackItem = ({ icon = "", name = "", percent = "" }) => {
  return (
    <div className="stake-item rounded-[20px] flex flex-col items-center p-[25px] bg-white relative">
      <div className="icon-more">
        <MemoMore className="absolute top-[10px] right-[15px] cursor-pointer " />
        <div className="menu text-[#808080] absolute p-4 bg-white right-[10px] invisible">
          <div>
            <Global className="w-[20px]" /> <span className="ml-1">Website</span>
          </div>
          <div>
            <MemoTwitter className="w-[20px]" /> <span className="ml-1">Twitter</span>
          </div>
          <div>
            <MemoTelegram className="w-[20px]" /> <span className="ml-1">Telegram</span>
          </div>
        </div>
      </div>

      <img src={icon} className="w-[80px] mb-[15px]" />
      <div className="text-[#070C20] text-[20px] pb-[15px]">
        <span className="font-light">APR:</span>
        <span className="font-medium"> {percent}%</span>
      </div>
      <div className="bg-gradient-to-r p-[1px] rounded-full from-[#B1891D] to-[#EFC659] text-[#B1891D]">
        <div className="p-1 bg-white rounded-full py-[7px] px-[25px] hover:text-[white] hover:bg-gradient-to-r from-[#B1891D] to-[#EFC659] text-[#B1891D]">
          STAKE NOW
        </div>
      </div>
    </div>
  );
};
export default StackItem;
