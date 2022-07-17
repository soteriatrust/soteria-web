import MemoMore from "../svgr/More";

const StackItem = ({ icon = "", name = "", percent = "" }) => {
  return (
    <div className="stake-item rounded-[20px] flex flex-col items-center p-[25px] bg-white relative">
      <MemoMore className="absolute top-[10px] right-[15px]" />
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
