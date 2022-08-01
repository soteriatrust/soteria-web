import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import MemoArrowLeft from "../svgr/ArrowLeft";
import MemoArrowRight from "../svgr/ArrowRight";

const Slider = ({ children, settings }: any) => {
  let slider: any = useRef(null);
  const sliderSettings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return (
    <div className="slider-cpn relative">
      <div className="flex justify-end absolute right-0" style={{ top: -120 }}>
        <div
          onClick={() => slider?.current?.slickPrev()}
          className=" w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#B1891D] to-[#EFC659] cursor-pointer mr-4">
          <MemoArrowLeft className="text-white h-[50px]" />
        </div>
        <div
          onClick={() => slider?.current?.slickNext()}
          className=" w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#B1891D] to-[#EFC659] cursor-pointer ">
          <MemoArrowRight className="text-white" />
        </div>
      </div>

      <SliderSlick ref={slider} {...sliderSettings}>
        {children}
      </SliderSlick>
    </div>
  );
};
export default Slider;



