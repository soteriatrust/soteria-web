import React from "react";
import MemoFacebook from "./svgr/Facebook";
import MemoLinkedin from "./svgr/Linkedin";
import MemoTelegram from "./svgr/Telegram";
import MemoTwitter from "./svgr/Twitter";
import LogoText from "../assets/logoNtext.svg";

export const SocialIcon = ({ children }: any) => (
    <div className=" w-[38px] h-[38px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#B1891D] to-[#EFC659] mr-4">
      {children}
    </div>
  );

const Footer = () => {

  return (
    <div
      className="px-[50px] xl:px-[123px] py-[80px] bg-[#070C20] gap-[66px] xl:grid text-[#ffffffd9] flex flex-col justify-center items-center xl:items-start"
      style={{ gridTemplateColumns: "1fr 2fr 1fr" }}>
      <div className="justify-between flex flex-col xl:items-start h-full">
        <img className="h-[52px]" src={LogoText} />
        <div className="text-[16px] font-light invisible xl:visible">
          © 2019. All Rights. Reserved.
        </div>
      </div>

      <div className="text-[16px] font-light">
        SOTERIA is a leading blockchain infrastructure company based in Seoul, South Korea.
        <br /> <br />
        We operate state-of-the-art distributed and redundant validator infrastructure for Proof of
        Stake Blockchains.
        <br /> <br />
        Not only do we push the network forward proposing, verifying, and signing transaction blocks
        as often as every few seconds we also provide all crypto holders the opportunity to stake
        alongside us, accessing the chains’ rewards.
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="text-center pb-[40px] xl:pb-0 xl:text-left">
          <div className="text-[18px] font-light text-[#ffffff73]">Contact Us</div>
          <div className="text-[22px] font-medium">hello@SOTERIAtrust.com</div>
        </div>
        <div className="text-center xl:text-left">
          <div className="text-[18px] font-light text-[#ffffff73] pb-[15px]">Follow Us</div>
          <div className="flex flex-row justify-center xl:justify-start">
            <SocialIcon>
              <MemoTwitter />
            </SocialIcon>
            <SocialIcon>
              <MemoLinkedin />
            </SocialIcon>
            <SocialIcon>
              <MemoTelegram />
            </SocialIcon>
            <SocialIcon>
              <MemoFacebook />
            </SocialIcon>
          </div>
        </div>
        <div className="text-[16px] font-light xl:hidden text-center mt-[80px] mb-[20px] ">
          © 2019. All Rights. Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
