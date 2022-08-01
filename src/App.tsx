import { useEffect, useRef, useState } from "react";
import "./App.scss";
import avt from "./assets/demo-team-avt.png";

import security from "./assets/security.svg";
import technology from "./assets/technology.svg";
import uptime from "./assets/uptime.svg";
// import ReactWOW from 'react-wow'
//@ts-ignore
import arrowDown from "./assets/arrowDown.png";
import BgTop from "./assets/bg-full.jpg";

import earth from "./assets/earth.jpg";
import Logo from "./assets/logo-white.png";
import LogoAndText from "./assets/logoNtext.svg";
import LogoMask from "./assets/planet-with-light.png";
import Validator from "./assets/validator.png";
import BenefitItem from "./components/BenefitItem";
import Contact from "./components/Contact";
import Footer, { SocialIcon } from "./components/Footer";
import PortfolioItem from "./components/PortfolioItem";
import Slider from "./components/Slider";
import StakeNow from "./components/StakeNow";
import MemoClose from "./components/svgr/Close";
import MemoFacebook from "./components/svgr/Facebook";
import MemoHamburger from "./components/svgr/Hamburger";
import MemoLinkedin from "./components/svgr/Linkedin";
import MemoTelegram from "./components/svgr/Telegram";
import MemoTwitter from "./components/svgr/Twitter";
import Teammate from "./components/Teammate";

function App() {
  let homeRef: any = useRef(null);
  let aboutUsRef: any = useRef(null);
  let stackNowRef: any = useRef(null);
  let teamRef: any = useRef(null);
  let contactRef: any = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const onScroll = (e: any) => {
    setScroll(window.pageYOffset);
  };

  const scrollTo = (ref: any) => {
    setShowLeftMenu(false);
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const portfolioItems = [
    { icon: require("./assets/portfolio/1.png") },
    { icon: require("./assets/portfolio/2.png") },
    { icon: require("./assets/portfolio/3.png") },
    { icon: require("./assets/portfolio/4.png") },
    { icon: require("./assets/portfolio/5.png") },
    { icon: require("./assets/portfolio/6.png") },
    { icon: require("./assets/portfolio/7.png") },
    { icon: require("./assets/portfolio/8.png") },
    { icon: require("./assets/portfolio/9.png") },
    { icon: require("./assets/portfolio/10.png") },
    { icon: require("./assets/portfolio/11.png") },
    { icon: require("./assets/portfolio/12.png") },
  ];

  const bgTopHeight = document.getElementById("bg-top")?.clientHeight;

  return (
    <div className="landing-page" ref={homeRef} id="abc">
      <div className="landing-page-mask" />
      <div className="landing-page-first-section relative">
        <img
          src={earth}
          className="absolute w-[145px] left-[40px] bottom-14 hidden xl:visible"
          style={{ zIndex: 0 }}
        />
        <img
          src={arrowDown}
          className="absolute w-[18px] m-auto"
          style={{ zIndex: 0, bottom: -70, left: "50%" }}
        />
        <img src={BgTop} id="bg-top" className="absolute w-screen h-full" style={{ zIndex: -1 }} />
        <div className={`landing-page-header z-10 ${showLeftMenu ? "fixed" : ""} xl:flex w-full`}>
          <div className="flex flex-row z-[101] justify-between items-center w-full">
            <img src={LogoAndText} className="landing-page-header__logo h-[40px] xl:h-[54px]" />
            <div className="landing-page-header__right hidden xl:flex">
              <div className="landing-page-header__right__item" onClick={() => scrollTo(homeRef)}>
                Home
              </div>
              <div
                className="landing-page-header__right__item"
                onClick={() => scrollTo(aboutUsRef)}>
                About Us
              </div>
              <div
                className="landing-page-header__right__item"
                onClick={() => scrollTo(stackNowRef)}>
                Stake now
              </div>
              <div className="landing-page-header__right__item" onClick={() => scrollTo(teamRef)}>
                Team
              </div>
              <div
                className="landing-page-header__right__item"
                onClick={() => scrollTo(contactRef)}>
                Contact Us
              </div>
            </div>
            {showLeftMenu ? (
              <MemoClose
                className="block xl:hidden w-[40px] h-[40px] cursor-pointer"
                onClick={() => setShowLeftMenu(!showLeftMenu)}
              />
            ) : (
              <MemoHamburger
                className="block xl:hidden w-[40px] h-[40px] cursor-pointer"
                onClick={() => setShowLeftMenu(!showLeftMenu)}
              />
            )}
          </div>

          {showLeftMenu && (
            <div className="fixed w-full h-full flex flex-col left-0 z-[100] top-0">
              <img
                src={BgTop}
                className="absolute w-screen overflow-hidden "
                style={{ zIndex: 0, height: bgTopHeight }}
              />
              <div className="z-10 flex flex-col items-center top-[100px] relative top-menu">
                <div
                  className="text-center text-[32px] cursor-pointer"
                  onClick={() => scrollTo(homeRef)}>
                  Home
                </div>
                <div
                  className="text-center text-[32px] cursor-pointer"
                  onClick={() => scrollTo(aboutUsRef)}>
                  About Us
                </div>
                <div
                  className="text-center text-[32px] cursor-pointer"
                  onClick={() => scrollTo(stackNowRef)}>
                  Stake now
                </div>
                <div
                  className="text-center text-[32px] cursor-pointer"
                  onClick={() => scrollTo(teamRef)}>
                  Team
                </div>
                <div
                  className="text-center text-[32px] cursor-pointer"
                  onClick={() => scrollTo(contactRef)}>
                  Contact Us
                </div>

                <div className="bg-gradient-to-r w-[200px] px-[26px] py-[13px] ml-3 rounded-full from-[#B1891D] to-[#EFC659] text-[white] text-[20px] text-normal xl:mt-[80px] mt-5 cursor-pointer" onClick={()=>scrollTo(stackNowRef)}>
                  {" "}
                  ✧ STAKE NOW ✧
                </div>
                <div className="md:h-[100px] bg-white w-[1px] my-[10px] md:my-[50px]" />

                <div className="flex flex-col justify-between h-full">
                  <div className="text-center xl:pb-[40px] pb-0 xl:text-left">
                    <div className="text-[18px] font-light text-[#ffffff73]">Contact Us</div>
                    <div className="text-[22px] font-medium">hello@SOTERIAtrust.com</div>
                  </div>
                  <div className="text-center xl:text-left">
                    <div className="text-[18px] font-light text-[#ffffff73] pb-[15px]">
                      Follow Us
                    </div>
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
            </div>
          )}
        </div>
        <div className="landing-page-top-container flex flex-col xl:flex-row xl:px-[123px] xl:py-[80px] p-[10px]">
          <div className="landing-page-top-container__left text-center pb-[108px] xl:pb-0 xl:text-left">
            <div className="header-text text-[80px] xl:text-[100px]">
              <div className="font-semibold">SOTERIA</div>
              <div className="font-light leading-[60px]">TRUST</div>
            </div>
          </div>
          <div className="landing-page-top-container__right justify-center pt- xl:justify-end">
            <svg viewBox="0 0 100 100" className="xl:w-[400px] w-[300px]">
              <defs>
                <mask
                  id="mask59370484-0ad9-4f0f-b4ad-a4f7dfab5688"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse">
                  <image width="100%" height="100%" xlinkHref={Logo}></image>
                </mask>
              </defs>
              <g mask="url(#mask59370484-0ad9-4f0f-b4ad-a4f7dfab5688)">
                <image
                  style={{ transform: `translateY(${-scroll}px)`, width: "100%" }}
                  className="overflow-hidden"
                  xlinkHref={LogoMask}></image>
              </g>
            </svg>
          </div>
        </div>
        <div className="landing-page-trusted-validating">
          <div className="px-4 md:px-[50px] xl:px-[123px] flex flex-col  xl:flex-row items-center">
            <div className="font-light text-[50px] text-white xl:mr-5 pb-[50px] text-center xl:pb-0">
              Trusted Validating
            </div>
            <div className="flex-1 bg-white h-[1px] xl:visible invisible" />
            <div
              className="bg-gradient-to-r px-[26px] py-[13px] ml-3 rounded-full from-[#B1891D] to-[#EFC659] text-[white] text-[20px] text-normal cursor-pointer"
              onClick={() => scrollTo(stackNowRef)}>
              {" "}
              ✧ STAKE NOW ✧
            </div>
          </div>
          <div
            className="xl:px-[313px] px-4 md:px-[50px] flex justify-center flex-col items-center pb-[106px]"
            ref={aboutUsRef}>
            <div className="pt-[100px] text-[50px] font-medium text-white">Soteria Trust</div>
            <div className="pt-5 text-[32px] font-extralight text-white text-center">
              Soteria means{" "}
              <span className="text-[#B1891D] font-semibold ">the goddess of faith</span>, and as
              its name suggests, our team promises to provide{" "}
              <span className="font-semibold">safe</span> and{" "}
              <span className="font-semibold">high-yield</span> staking rewards to our trusted
              customers.
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-why-choose-us px-4 md:px-[50px] overflow-hidden">
        <img
          src={require("./assets/top-parabol.png")}
          className="absolute w-screen h-[100px]"
          style={{ zIndex: -1, top: 0 }}
        />
        <img
          src={require("./assets/bottom-parabol.png")}
          className="absolute top-[100px] w-screen h-full"
          style={{ zIndex: -1 }}
        />
        <div className="text-[50px] font-medium pt-[154px]">Why Choose Us</div>
        <span className="pt-[20px] font-light text-[20px] text-center ">
          Here are some reasons why you will make the best decision to choosing us
        </span>
        <div className="grid xl:px-[143px] xl:grid-cols-3 grid-cols-1">
          <BenefitItem
            icon={security}
            header="Security & Trust"
            description={
              <div>
                We put safety first. <br /> <br /> We protect our clients' assets from hacking and
                other risks that threaten them. <br /> <br /> We guarantee stability and reliability
                to our customers.
              </div>
            }
          />
          <BenefitItem
            icon={technology}
            header="Technology"
            description={
              <div>
                We are a team of technologists with backgrounds in security, networking, blockchain
                infrastructure, token economics, and decentralized finance. <br /> <br /> Our
                infrastructure is housed in highly secure data centers around the world. We are
                constantly building redundancy into our infrastructure to ensure perpetual node
                coverage and network uptime.
              </div>
            }
          />
          <BenefitItem
            icon={uptime}
            header="High uptime"
            description={
              <div>
                We can provide differentiated staking through 24-hour uptime. <br /> <br /> With a
                technical team in different timezones around the globe, there's always someone
                monitoring node performance <br /> <br /> security & Trust / technology / High
                uptime
              </div>
            }
          />
        </div>
      </div>

      <div className="xl:px-[112px] px-4 md:px-[50px] pt-[60px] xl:pt-[120px] bg-[#070C20]">
        <div className="flex xl:flex-row flex-col-reverse">
          <div className="flex flex-1 justify-center items-center">
            <img src={Validator} className=" w-full xl:w-[500px] xl:h-[500px]" />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-[50px] font-medium pb-5 text-left ">What is Validator ?</div>
            <div className="text-[20px] font-light">
              Proof-Of-Stake blockchains rely on validators to secure the network.
              <br />
              <br />
              The role of a validator is to run a full node server and participate in the consensus
              protocol by broadcasting votes that contain cryptographic signatures signed by each
              validator.
              <br />
              <br />
              That way, validators commit new blocks in the blockchain and receive revenue in
              exchange.
              <br />
              <br />
              Validators also participate in the governance of decentralized networks by voting on
              proposals or crafting their own proposal for the betterment of the network.
            </div>
          </div>
        </div>
      </div>

      <StakeNow ref={stackNowRef} />

      <div className="landing-page-portfolio bg-[#070C20] px-4 md:px-[50px] xl:px-[123px] pt-[21px] pb-[95px]">
        <div className="text-center font-medium text-[50px] pb-[50px]">Our Portfolio</div>
        <div className="grid xl:grid-cols-6 grid-cols-2 gap-5">
          {portfolioItems?.map((it: any, index: number) => (
            <PortfolioItem key={index} icon={it?.icon} />
          ))}
        </div>
        <div className="pt-[40px] text-center text-[22px] font-normal">And more...</div>
      </div>
      <div
        className="px-[20px] xl:px-[123px] py-[70px] bg-[#070C20] border-t-[1px] border-[#2A2E40]"
        ref={teamRef}>
        <div className="font-medium text-[50px] pb-5">OUR TEAM</div>
        <div className="text-[20px] font-light pb-[60px]" style={{ width: "calc(100% - 130px)" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt.
        </div>
        <Slider>
          <Teammate
            avatar={avt}
            name="Name Team"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod."
            role="CEO, Manager"
          />
          <Teammate
            avatar={avt}
            name="Name 2"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod."
            role="CEO, Manager"
          />
          <Teammate
            avatar={avt}
            name="Name 3"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod."
            role="CEO, Manager"
          />
        </Slider>
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;
