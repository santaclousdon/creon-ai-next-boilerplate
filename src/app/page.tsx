import GradientText from "@/components/gradientText";
import Image from "next/image";
import { useRef, useEffect } from "react";

const Home = () => {
  return (
    <div className="w-full h-auto m-0 p-0 border-0 box-border no-underline align-baseline">
      <div className="flex flex-col w-full relative">
        <div className="flex absolute left-0 top-0 justify-between w-full px-[50px] py-[30px] items-center z-20">
          <img
            className="object-fit"
            src="/assets/images/logo.png"
            alt="logo"
          />
          <div className="flex gap-[58px] font-satoshi">
            <div className="flex gap-[40px] items-center">
              <div className="font-bold text-white text-lg  leading-custom">
                Creon Pass
              </div>
              <div className="flex gap-1">
                <div className="font-bold text-white text-lg  leading-custom">
                  Token
                </div>
                <div className="flex items-center h-[14px] px-1 py-[2px] text-[#ab23ff] bg-black font-satoshi rounded-full text-[10px] font-bold  leading-custom">
                  SOON
                </div>
              </div>
              <div className="flex gap-1">
                <div className="font-bold text-white text-lg  leading-custom">
                  AI Revenue
                </div>
                <div className="flex items-center h-[14px] px-1 py-[2px] text-[#ab23ff] bg-black font-satoshi rounded-full text-[10px] font-bold  leading-custom">
                  SOON
                </div>
              </div>
              <div className="flex gap-1">
                <div className="font-bold text-white text-lg  leading-custom">
                  AI Launchpad
                </div>
                <div className="flex items-center h-[14px] px-1 py-[2px] text-[#ab23ff] bg-black rounded-full text-[10px] font-bold  leading-custom">
                  SOON
                </div>
              </div>
            </div>
            <div className="px-[30px] pt-[9px] pb-[11px] text-[18px] text-white font-bold rounded-md border-2 border-white leading-custom">
              Connect
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-screen justify-between">
          <div className="flex flex-col relative justify-end px-[240px] pt-0 pb-[102px] gap-[40px]">
            <div className="absolute left-0 top-0 w-full h-full z-0 object-cover">
              <video
                className="w-full h-full object-cover z-0"
                autoPlay
                loop
                playsInline
                muted
              >
                <source
                  src="/assets/videos/main-background-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <img
              className="absolute top-0 left-0 bg-transparent mix-blend-soft-light"
              src="/assets/images/background.png"
              alt="background"
            />
            <h2 className="font-monument font-normal text-[68px] text-white z-10 mt-[555px]  leading-custom">
              THE WORLD'S FIRST <br></br>PLATFORM FOR TOKENIZING AI BLOCKCHAIN
              PROJECTS
            </h2>
            <GradientText
              text="Hold the Creon Pass NFT and earn passive income from AI Tools"
              fontSize="22px"
              fontFamily="satoshi"
              border={true}
            />
          </div>
        </div>
        <div className="nft-video-container flex justify-between items-center py-[81px] pl-[240px] pr-[132px] gap-[40px] overflow-hidden relative">
          <div className="flex flex-col">
            <h2 className="flex font-monument leading-custom pb-[30px] text-[68px] text-white border-b-[1px] border-b-[#13171d] mb-[30px]">
              CREON PASS NFT
            </h2>
            <GradientText
              text="The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools."
              fontSize="22px"
              fontFamily="satoshi"
              border={false}
            />
            <div className="flex flex-col items-start gap-[10px] mt-[40px] font-satoshi text-[18px] text-white mb-[72px]">
              <div className="px-[18px] pt-[12px] pb-[16px] h-max leading-[130%] border border-[#13171d] rounded-md">
                Pre-launch investment opportunities for upcoming AI projects
              </div>
              <div className="px-[18px] pt-[12px] pb-[16px] h-max leading-[130%] border border-[#13171d] rounded-md">
                Free and early access to Creon built AI projects
              </div>
              <div className="px-[18px] pt-[12px] pb-[16px] h-max leading-[130%] border border-[#13171d] rounded-md">
                Higher allocation limits on the Creon AI Launchpad
              </div>
              <div className="px-[18px] pt-[12px] pb-[16px] h-max leading-[130%] border border-[#13171d] rounded-md">
                Revenue share distribution from Creon built AI projects
              </div>
            </div>
            <button className="w-[453px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] px-[162px] pt-[16px] pb-[18px] text-[18px] font-bold text-white font-satoshi rounded-md leading-custom">
              Buy Creon Pass
            </button>
          </div>
          <div className="nft-video w-[808px] h-[808px] flex-shrink-0 relative">
            <video
              className="object-cover w-full h-full before:bg-black"
              autoPlay
              loop
              playsInline
              muted
            >
              <source src="/assets/videos/nft-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="block px-[240px] pt-[120px] pb-[141px]">
          <h2 className="font-monument leading-custom text-white text-[68px]">
            PROFITING THROUGH
          </h2>
          <div className="flex justify-end mt-[20px]">
            <GradientText
              text="AI INNOVATION & DECENTRALIZATION"
              border={false}
              fontSize="38px"
              fontFamily="monument"
            />
          </div>
          <div className="creon-video-container flex justify-between relative overflow-hidden mt-[83px] gap-[38px]">
            <video
              className="w-[49.323vw] h-[25.26vw] object-cover rounded-md flex-shrink-0"
              autoPlay
              loop
              playsInline
              muted
            >
              <source src="/assets/videos/creon-logo.mp4" type="video/mp4" />
            </video>
            <div className="flex flex-col font-satoshi text-white px-[30px] justify-center border-x-[1px] border-x-[#13171d]">
              <h4 className="text-[22px] font-bold leading-[130%]">
                The dynamic community driven business model of the future
              </h4>
              <p className="text-[18px] leading-[130%] mt-[28px] font-normal">
                At Creon, we blend the power of AI tools with the dynamic crypto
                and NFT markets, utilizing an innovative business model to drive
                profitability. This approach empowers our community, as our NFT
                and token holders directly benefit from the growth and
                prosperity of the Creon network, creating a win-win scenario for
                both our community and for the projects we launch.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between relative px-[240px] pt-[115px] gap-[189px]">
          <div className="flex flex-col">
            <h3 className="text-white font-monument text-[38px] leading-[120%]">
              OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS
            </h3>
            <GradientText
              text="WHILE PRIORITIZING COMMUNITIES AND DEMORCRATIZING PROFITS"
              fontFamily="monument"
              fontSize="38px"
              border={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
