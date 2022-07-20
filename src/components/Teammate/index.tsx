import React from "react";
// import "./Teammate.scss";
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'

const Teammate = ({
  avatar,
  name,
  description,
  role,
}: {
  avatar: any;
  name: string;
  role: string;
  description: string;
}) => {

  const renderSocialIcon = (icon = "") => {
    return (
      <div className="w-[38px] h-[38px] mr-[17px] rounded-full bg-[#E4E4E4] flex justify-center items-center">
        <img src={icon} className="w-5 h-5" />
      </div>
    );
  };

  return (
    <div className="teammate-cpn grid grid-cols-2 p-[10px] bg-[white] gap-[30px] mr-[15px] rounded-tr-[50px] xl:rounded-tr-[140px] ">
      <img className="rounded-md object-cover h-[255px]" src={avatar} />
     
      <div className="text-black flex flex-col justify-center">
        <div className="font-medium text-[24px] ">{name}</div>
        <div className="text-[#606060] font-light text-[18px]">{role}</div>
        <div className="w-[50px] h-[1px] bg-[#AB8A36] my-[15px]" />
        <div className=" text-[#606060] font-light text-[16px]">{description}</div>
        <div className='flex pt-[20px]'>
        {renderSocialIcon(linkedin)}
        {renderSocialIcon(twitter)}
        </div>
      </div>
    </div>
  );
};

export default Teammate;
