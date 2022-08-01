import React from "react";
import Input from "./Input/Input";
const Contact = ({ ref }: any) => {
  return (
    <div className="landing-page-contact px-4 md:px-[50px] xl:px-[313px] z-1 relative" ref={ref}>
      <div className="font-medium text-[50px] text-center pb-[15px]">Get In Touch</div>
      <div className="max-w-[800px] m-auto ">
        <div className="font-light text-[18px] text-center pb-[45px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt.
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-[20px] pb-[20px]">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Mobile phone number" />
        </div>
        <Input placeholder="Message" textarea className="mb-[30px]" />
        <div className="mx-auto flex flex-row justify-center">
          <div className="bg-gradient-to-r px-[60px] py-[10px] p-[1px] rounded-full from-[#B1891D] to-[#EFC659] text-[white] cursor-pointer">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
