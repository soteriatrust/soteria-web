import { useEffect, useRef, useState } from "react";
import "./App.scss";
import avt from "./assets/demo-team-avt.png";
import emoney from "./assets/e-money.png";
import security from "./assets/security.svg";
import technology from "./assets/technology.svg";
import uptime from "./assets/uptime.svg";
// import ReactWOW from 'react-wow'
//@ts-ignore
import WOW from "wowjs";
import curveBottom from "./assets/curve-bottom.png";
import curveTop from "./assets/curve-top.png";
import Logo from "./assets/logo-white.png";
import LogoAndText from "./assets/logoNtext.svg";
import LogoMask from "./assets/planet-with-light.png";
import Portfolio from "./assets/portfolio-demo.svg";
import Validator from "./assets/validator.jpg";
import BenefitItem from "./components/BenefitItem";
import Input from "./components/Input/Input";
import PortfolioItem from "./components/PortfolioItem";
import Slider from "./components/Slider";
import StackItem from "./components/StackItem";
import MemoFacebook from "./components/svgr/Facebook";
import MemoLinkedin from "./components/svgr/Linkedin";
import MemoTelegram from "./components/svgr/Telegram";
import MemoTwitter from "./components/svgr/Twitter";
import Teammate from "./components/Teammate";
import WhyChooseUs from './assets/bg-why-choose-us.jpeg'
import BgTop from './assets/bg-full.jpg'
import earth from './assets/earth.jpg'
import arrowDown from './assets/arrowDown.png'

function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: null,
      resetAnimation: true,
    });
    wow.init();
  }, []);

  const scrollTo = (ref: any) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  let homeRef: any = useRef(null);

  let aboutUsRef: any = useRef(null);

  let stackNowRef: any = useRef(null);

  let teamRef: any = useRef(null);

  let contactRef: any = useRef(null);

  const [scroll, setScroll] = useState(0);

  const onScroll = (e: any) => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const portfolioItems = [
    { icon: require('./assets/portfolio/1.png') },
    { icon: require('./assets/portfolio/2.png') },
    { icon: require('./assets/portfolio/3.png') },
    { icon: require('./assets/portfolio/4.png') },
    { icon: require('./assets/portfolio/5.png') },
    { icon: require('./assets/portfolio/6.png') },
    { icon: require('./assets/portfolio/7.png') },
    { icon: require('./assets/portfolio/8.png') },
    { icon: require('./assets/portfolio/9.png') },
    { icon: require('./assets/portfolio/10.png') },
    { icon: require('./assets/portfolio/11.png') },
    { icon: require('./assets/portfolio/12.png') },
  ];

  const SocialIcon = ({ children }: any) => (
    <div className=" w-[38px] h-[38px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#B1891D] to-[#EFC659] mr-4">
      {children}
    </div>
  );

  return (
    <div className="landing-page" ref={homeRef} id="abc">
      <div className="landing-page-mask" />
      <div className="landing-page-first-section relative">
        <img
          src={earth}
          className="absolute w-[145px] left-[40px] bottom-14 hidden 2xl:visible"
          style={{ zIndex: 0 }}
        />
        <img
          src={arrowDown}
          className="absolute h-[140px] w-[18px] m-auto"
          style={{ zIndex: 0, bottom: -70, left: '50%' }}
        />
        <img src={BgTop} className="absolute w-screen h-full" style={{ zIndex: -1 }} />
        <div className="landing-page-header">
          <img src={LogoAndText} className="landing-page-header__logo" />
          <div className="landing-page-header__right hidden 2xl:visible">
            <div className="landing-page-header__right__item" onClick={() => scrollTo(homeRef)}>
              Home
            </div>
            <div className="landing-page-header__right__item" onClick={() => scrollTo(aboutUsRef)}>
              About Us
            </div>
            <div className="landing-page-header__right__item" onClick={() => scrollTo(stackNowRef)}>
              Stake now
            </div>
            <div className="landing-page-header__right__item" onClick={() => scrollTo(teamRef)}>
              Team
            </div>
            <div className="landing-page-header__right__item" onClick={() => scrollTo(contactRef)}>
              Contact Us
            </div>
          </div>
        </div>
        <div className="landing-page-top-container flex flex-col 2xl:flex-row 2xl:px-[123px] 2xl:py-[80] p-[10px]">
          <div className="landing-page-top-container__left text-center pb-[108px] 2xl:pb-0 2xl:text-left">
            <div className="header-text">
              <div className="header-text__main">SOTERIA</div>
              <div className="header-text__sub">TRUST</div>
            </div>
          </div>
          <div className="landing-page-top-container__right justify-center pt- 2xl:justify-end">
            <svg viewBox="0 0 100 100" className="2xl:w-[400px] w-[300px]">
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
                  style={{ transform: `translateY(${-scroll}px)`, width: "33vw" }}
                  className="overflow-hidden"
                  xlinkHref={LogoMask}></image>
              </g>
            </svg>
          </div>
        </div>
        <div className="landing-page-trusted-validating">
          <div className="px-[50px] 2xl:px-[123px] flex flex-col  2xl:flex-row items-center">
            <div className="font-light text-[50px] text-white 2xl:mr-5 pb-[50px] 2xl:pb-0">
              Trusted Validating
            </div>
            <div className="flex-1 border border-white h-[1px] 2xl:visible invisible" />
            <div className="bg-gradient-to-r px-[26px] py-[13px] ml-3 rounded-full from-[#B1891D] to-[#EFC659] text-[white] text-[20px] text-normal">
              {" "}
              ✧ STAKE NOW ✧
            </div>
          </div>
          <div
            className="2xl:px-[313px] px-[50px] flex justify-center flex-col items-center pb-[106px]"
            ref={aboutUsRef}>
            <div className="pt-[100px] text-[50px] font-medium text-white">Soteria Trust</div>
            <div className="pt-5 text-[32px] font-extralight text-white">
              Soteria means <span className="text-[#B1891D]">the goddess of faith</span>, and as its
              name suggests, our team promises to provide{" "}
              <span className="font-semibold">safe</span> and{" "}
              <span className="font-semibold">high-yield</span> staking rewards to our trusted
              customers.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="landing-page-first-section__mask" /> */}
      <div className="landing-page-why-choose-us px-[50px] overflow-hidden">
        {/* <img src={WhyChooseUs} className="absolute w-screen h-full" style={{ zIndex: -1 }} /> */}
        <img
          src={require("./assets/top-parabol.png")}
          className="absolute top-0 w-screen h-[100px]"
          style={{ zIndex: -1 }}
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
        <div className="grid 2xl:px-[143px] px-[50px] 2xl:grid-cols-3 grid-cols-1">
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
        <div className="2xl:px-[112px] px-[50px] pt-[120px]">
          <div className="flex 2xl:flex-row flex-col-reverse">
            <div className="flex flex-1 justify-center items-center">
              <img src={Validator} className="w-[500px] h-[500px]" />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="text-[50px] font-medium pb-5 text-left ">What is Validator ?</div>
              <div className="text-[20px] font-light">
                Proof-Of-Stake blockchains rely on validators to secure the network.
                <br />
                <br />
                The role of a validator is to run a full node server and participate in the
                consensus protocol by broadcasting votes that contain cryptographic signatures
                signed by each validator.
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
      </div>

      <div className="landing-page-stake-now px-[50px] 2xl:px-[123px] relative" ref={stackNowRef}>
        <img
          src={curveTop}
          style={{ top: -1 }}
          className="absolute left-0 overflow-hidden h-[170px] w-full"
        />
        <div className="pt-[200px] font-medium text-[50px] pb-[70px] text-center">STAKE NOW</div>
        <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 pb-[171px]">
          <StackItem icon={emoney} name="E-money" percent="12.23" />
          <StackItem icon={emoney} name="E-money" percent="12.23" />
          <StackItem icon={emoney} name="E-money" percent="12.23" />
          <StackItem icon={emoney} name="E-money" percent="12.23" />
          <StackItem icon={emoney} name="E-money" percent="12.23" />
          <StackItem icon={emoney} name="E-money" percent="12.23" />
        </div>
        <img
          src={curveBottom}
          style={{ bottom: -1 }}
          className="absolute left-0 overflow-hidden h-[50px] w-full object-fill"
        />
      </div>
      <div className="landing-page-portfolio bg-[#070C20] px-[80px] 2xl:px-[123px] pt-[21px] pb-[95px]">
        <div className="text-center font-medium text-[50px] pb-[50px]">Our Portfolio</div>
        <div className="grid 2xl:grid-cols-6 grid-cols-2 gap-5">
          {portfolioItems?.map((it: any) => (
            <PortfolioItem icon={it?.icon} />
          ))}
        </div>
        <div className="pt-[40px] text-center text-[22px] font-normal">And more...</div>
      </div>
      <div
        className="px-[50px] 2xl:px-[123px] py-[70px] bg-[#070C20] border-t border-white"
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
      <div className="landing-page-contact px-[50px] 2xl:px-[313px] z-10 relative" ref={contactRef}>
        <div className="font-medium text-[50px] text-center pb-[15px]">Get In Touch</div>
        <div className="max-w-[800px] m-auto ">
          <div className="font-light text-[18px] text-center pb-[45px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt.
          </div>
          <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-[20px] pb-[20px]">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Mobile phone number" />
          </div>
          <Input placeholder="Message" textarea className="mb-[30px]" />
          <div className="mx-auto flex flex-row justify-center">
            <div className="bg-gradient-to-r px-[60px] py-[10px] p-[1px] rounded-full from-[#B1891D] to-[#EFC659] text-[white]">
              Submit
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-[50px] 2xl:px-[123px] py-[80px] bg-[#070C20] gap-[66px] 2xl:grid text-[#ffffffd9] flex flex-col justify-center items-center 2xl:items-start"
        style={{ gridTemplateColumns: "1fr 2fr 1fr" }}>
        <div className="justify-between flex flex-col 2xl:items-start h-full">
          <img className="h-[52px]" src={LogoAndText} />
          <div className="text-[16px] font-light invisible 2xl:visible">
            © 2019. All Rights. Reserved.
          </div>
        </div>

        <div className="text-[16px] font-light">
          SOTERIA is a leading blockchain infrastructure company based in Seoul, South Korea.
          <br /> <br />
          We operate state-of-the-art distributed and redundant validator infrastructure for Proof
          of Stake Blockchains.
          <br /> <br />
          Not only do we push the network forward proposing, verifying, and signing transaction
          blocks as often as every few seconds we also provide all crypto holders the opportunity to
          stake alongside us, accessing the chains’ rewards.
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-center pb-[40px] 2xl:pb-0 2xl:text-left">
            <div className="text-[18px] font-light text-[#ffffff73]">Contact Us</div>
            <div className="text-[22px] font-medium">hello@SOTERIAtrust.com</div>
          </div>
          <div className="text-center 2xl:text-left">
            <div className="text-[18px] font-light text-[#ffffff73] pb-[15px]">Follow Us</div>
            <div className="flex flex-row justify-center 2xl:justify-start">
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
          <div className="text-[16px] font-light 2xl:hidden text-center mt-[80px] mb-[20px] ">
            © 2019. All Rights. Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
