"use client";

import React, { useState } from "react";
import Accordion from "@/components/Accordion";
import GradientText from "@/components/GradientText";
import LaunchingSVG from "@/components/svg/LaunchingSVG";
import LimitlessSVG from "@/components/svg/LimitlessSVG";
import ProfitabilitySVG from "@/components/svg/ProfitabilitySVG";
import TransparentSVG from "@/components/svg/TransparentSVG";
import ArrowSVG from "@/components/svg/ArrowSVG";
import RoadMapCard from "@/components/RoadMapCard";
import MarketCard from "@/components/MarketCard";
import TelegramSVG from "@/components/svg/TelegramSVG";
import DiscordSVG from "@/components/svg/DiscordSVG";
import TwitterSVG from "@/components/svg/TwitterSVG";
import FooterLetter from "@/components/svg/FooterLetter";
import CloseSVG from "@/components/svg/CloseSVG";

const Home = () => {
  const [accordionState, setAccordionState] = useState(0);
  const [navbarOpenState, setNavbarOpenState] = useState(false);

  const handleAccordionClick = (index: number) => {
    if (index === accordionState) {
      setAccordionState(-1);
    } else {
      setAccordionState(index);
    }
  };

  return (
    <div className="w-full h-auto m-0 p-0 border-0 box-border no-underline align-baseline">
      <div
        className={
          "flex flex-col w-full relative " +
          (navbarOpenState ? "overflow-hidden h-screen" : "")
        }
      >
        <div
          className={
            "z-10 opacity-100 absolute left-0 top-0 w-full h-full bg-[#0d131c]/70 " +
            (navbarOpenState ? "block" : "hidden")
          }
          onClick={() => setNavbarOpenState(false)}
        ></div>
        <div className="flex absolute left-0 top-0 justify-between w-full px-[2.604vw] py-[1.719vw] items-center z-20 max-[600px]:px-[4vw] max-[600px]:py-[5.333vw]">
          <a href="/">
            <img
              className="object-fit w-[7.292vw] h-auto max-[1225px]:w-[11.719vw] max-[600px]:w-[32vw]"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </a>
          <div className="flex gap-[3.021vw] font-satoshi">
            <div className="flex gap-[2.083vw] items-center max-[1225px]:hidden">
              <a
                href="#"
                className="font-bold text-white text-[0.938vw]  leading-custom"
              >
                Creon Pass
              </a>
              <a href="#" className="flex gap-[0.208vw]">
                <div className="font-bold text-white text-[0.938vw]  leading-custom">
                  Token
                </div>
                <div className="flex items-center px-[0.208vw] h-[0.7294vw] py-[0.104vw] text-[#ab23ff] bg-black font-satoshi rounded-full text-[0.521vw] font-bold  leading-custom">
                  SOON
                </div>
              </a>
              <a href="#" className="flex gap-[0.208vw]">
                <div className="font-bold text-white text-[0.938vw]  leading-custom">
                  AI Revenue
                </div>
                <div className="flex items-center px-[0.208vw] py-[0.104vw] h-[0.7294vw] text-[#ab23ff] bg-black font-satoshi rounded-full text-[0.521vw] font-bold  leading-custom">
                  SOON
                </div>
              </a>
              <a href="#" className="flex gap-[0.208vw]">
                <div className="font-bold text-white text-[0.938vw]  leading-custom">
                  AI Launchpad
                </div>
                <div className="flex items-center px-[0.208vw] py-[0.104vw] h-[0.7294vw] text-[#ab23ff] bg-black font-satoshi rounded-full text-[0.521vw] font-bold  leading-custom">
                  SOON
                </div>
              </a>
            </div>
            <div
              className={
                "laptop:hidden absolute right-0 top-0 pt-[8.594vw] pr-0 pb-[2.93vw] pl-[2.93vw] z-30 bg-black h-screen max-[600px]:pt-[23.467vw] max-[600px]:pr-0 max-[600px]:pb-[8vw] max-[600px]:pl-[8vw] " +
                (navbarOpenState ? "flex flex-col" : "hidden")
              }
            >
              <a
                href="#"
                className="font-bold text-white text-[1.563vw] leading-custom w-[18.848vw] border-y border-y-[#13171d] pt-[1.465vw] pr-[2.93vw] pb-[1.758vw] pl-0 max-[600px]:pt-[4vw] max-[600px]:pr-[8vw] max-[600px]:pb-[4.8vw] max-[600px]:pl-0 max-[600px]:w-[47.467vw] max-[600px]:text-[4.267vw]"
              >
                Creon Pass
              </a>
              <a
                href="#"
                className="flex gap-[0.208vw] pt-[1.465vw] pr-[2.93vw] pb-[1.758vw] pl-0 border-b border-b-[#13171d] max-[600px]:pt-[4vw] max-[600px]:pr-[8vw] max-[600px]:pb-[4.8vw] max-[600px]:pl-0 max-[600px]:w-[47.467vw]"
              >
                <div className="font-bold text-white text-[1.563vw]  leading-custom max-[600px]:text-[4.267vw]">
                  Token
                </div>
                <div className="flex items-center px-[0.208vw] h-[0.7294vw] py-[0.104vw] text-[#ab23ff] bg-black font-satoshi rounded-full text-[0.521vw] font-bold  leading-custom max-[1225px]:text-[0.977vw] max-[600px]:text-[2.667vw]">
                  SOON
                </div>
              </a>
              <a
                href="#"
                className="flex gap-[0.208vw] pt-[1.465vw] pr-[2.93vw] pb-[1.758vw] pl-0 border-b border-b-[#13171d] max-[600px]:pt-[4vw] max-[600px]:pr-[8vw] max-[600px]:pb-[4.8vw] max-[600px]:pl-0 max-[600px]:w-[47.467vw]"
              >
                <div className="font-bold text-white text-[1.563vw]  leading-custom max-[600px]:text-[4.267vw]">
                  AI Revenue
                </div>
                <div className="flex items-center px-[0.208vw] py-[0.104vw] h-[0.7294vw] text-[#ab23ff] bg-black font-satoshi rounded-full text-[0.521vw] font-bold  leading-custom max-[1225px]:text-[0.977vw] max-[600px]:text-[2.667vw]">
                  SOON
                </div>
              </a>
              <a
                href="#"
                className="flex gap-[0.208vw] pt-[1.465vw] pr-[2.93vw] pb-[1.758vw] pl-0 border-b border-b-[#13171d] max-[600px]:pt-[4vw] max-[600px]:pr-[8vw] max-[600px]:pb-[4.8vw] max-[600px]:pl-0 max-[600px]:w-[47.467vw]"
              >
                <div className="font-bold text-white text-[1.563vw]  leading-custom max-[600px]:text-[4.267vw]">
                  AI Launchpad
                </div>
                <div className="flex items-center px-[0.208vw] py-[0.104vw] h-[0.7294vw] text-[#ab23ff] bg-black font-satoshi rounded-full text-[0.521vw] font-bold  leading-custom max-[1225px]:text-[0.977vw] max-[600px]:text-[2.667vw]">
                  SOON
                </div>
              </a>
            </div>
            <button className="min-w-[6.875vw] h-[2.292vw] w-auto px-[0.521vw] pt-[0.573vw] pb-[0.677vw] text-[0.938vw] text-white font-bold rounded-md border-2 border-white leading-custom max-[1225px]:text-[1.563vw] max-[1225px]:h-[3.711vw] max-[1225px]:pt-[0.879vw] max-[1225px]:px-[0.977vw] max-[1225px]:pb-[1.074vw] max-[1225px]:min-w-[10.742vw] z-40 max-[600px]:text-[4.267vw] max-[600px]:h-[10.133vw] max-[600px]:pt-[2.4vw] max-[600px]:px-[2.667vw] max-[600px]:pb-[2.933vw]">
              Connect
            </button>
            {!navbarOpenState ? (
              <button
                onClick={() => setNavbarOpenState(true)}
                className="laptop:hidden p-0 bg-white box-border w-[3.711vw] h-[3.711vw] flex flex-col gap-[0.391vw] rounded-[0.586vw] z-40 max-[600px]:w-[10.133vw] max-[600px]:h-[10.133vw] max-[600px]:gap-[1.067vw]"
              >
                <div className="laptop:hidden w-full h-full flex flex-col gap-[8px] items-center justify-center">
                  <span className="laptop:hidden bg-black w-[1.953vw] h-[0.17vw] max-[600px]:w-[5.333vw] max-[600px]:h-[0.533vw]"></span>
                  <span className="laptop:hidden bg-black w-[1.953vw] h-[0.17vw] max-[600px]:w-[5.333vw] max-[600px]:h-[0.533vw]"></span>
                  <span className="laptop:hidden bg-black w-[1.953vw] h-[0.17vw] max-[600px]:w-[5.333vw] max-[600px]:h-[0.533vw]"></span>
                </div>
              </button>
            ) : (
              <div
                className="z-40 h-[3.711vw] laptop:hidden max-[600px]:h-[10.133vw]"
                onClick={() => setNavbarOpenState(false)}
              >
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/menu.png"
                  alt="menu"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col relative justify-end px-[12.5vw] pt-0 pb-[5.313vw] gap-[2.083vw] max-[600px]:gap-[5.333vw] max-[600px]:pt-0 max-[600px]:px-[4vw] max-[600px]:pb-[16.267vw]">
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
            className="absolute top-0 left-0 bg-transparent mix-blend-soft-light h-full w-full"
            src="/assets/images/background.png"
            alt="background"
          />
          <h2 className="font-monument font-normal text-[3.542vw] text-white z-10 mt-[28.906vw] leading-custom max-[600px]:text-[8.533vw] max-[600px]:mt-[113.333vw]">
            THE WORLD'S FIRST <br></br>PLATFORM FOR TOKENIZING AI BLOCKCHAIN
            PROJECTS
          </h2>
          <GradientText
            text="Hold the Creon Pass NFT and earn passive income from AI Tools"
            fontSize="text-[1.146vw] max-[600px]:text-[4.8vw]"
            fontFamily="satoshi"
            border={true}
          />
        </div>
        <div className="nft-video-container flex justify-between items-center py-[4.219vw] pl-[12.5vw] pr-[6.875vw] gap-[2.083vw] overflow-hidden relative">
          <div className="flex flex-col">
            <h2 className="flex font-monument leading-custom pb-[1.563vw] text-[3.542vw] text-white border-b-[1px] border-b-[#13171d] mb-[1.563vw] max-[600px]:text-[8.533vw] max-[600px]:pb-[5.333vw] max-[600px]:mb-[5.333vw]">
              CREON PASS NFT
            </h2>
            <GradientText
              text="The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools."
              fontSize="1.146vw max-[600px]:text-[4.8vw]"
              fontFamily="satoshi"
              border={false}
            />
            <div className="flex flex-col items-start gap-[1.042vw] mt-[2.083vw] font-satoshi text-[0.938vw] text-white mb-[3.752vw] max-[600px]:mt-[160.067vw] max-[600px]:gap-[4vw] max-[600px]:text-[4.267vw] max-[600px]:flex-row max-[600px]:flex-wrap">
              <div className="px-[1.042vw] pt-[0.833vw] pb-[1.042vw] h-max leading-[130%] border border-[#13171d] rounded-md max-[600px]:pt-[2.667vw] max-[600px]:px-[4.267vw] max-[600px]:pb-[4.267vw] max-[600px]:w-[30.078vw]">
                Pre-launch investment opportunities for upcoming AI projects
              </div>
              <div className="px-[1.042vw] pt-[0.833vw] pb-[1.042vw] h-max leading-[130%] border border-[#13171d] rounded-md max-[600px]:pt-[2.667vw] max-[600px]:px-[4.267vw] max-[600px]:pb-[4.267vw] max-[600px]:w-[30.078vw]">
                Free and early access to Creon built AI projects
              </div>
              <div className="px-[1.042vw] pt-[0.833vw] pb-[1.042vw] h-max leading-[130%] border border-[#13171d] rounded-md max-[600px]:pt-[2.667vw] max-[600px]:px-[4.267vw] max-[600px]:pb-[4.267vw] max-[600px]:w-[30.078vw]">
                Higher allocation limits on the Creon AI Launchpad
              </div>
              <div className="px-[1.042vw] pt-[0.833vw] pb-[1.042vw] h-max leading-[130%] border border-[#13171d] rounded-md max-[600px]:pt-[2.667vw] max-[600px]:px-[4.267vw] max-[600px]:pb-[4.267vw] max-[600px]:w-[30.078vw]">
                Revenue share distribution from Creon built AI projects
              </div>
            </div>
            <button className="w-[23.958vw] h-[2.813vw] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] px-[0.781vw] text-[0.938vw] font-bold text-white font-satoshi rounded-md leading-custom max-[600px]:h-[12.267vw] max-[600px]:px-[2.667vw] max-[600px]:text-[4.267vw] max-[600px]:mt-[8vw] max-[600px]:w-full">
              Buy Creon Pass
            </button>
          </div>
          <div className="nft-video w-[42.083vw] h-[42.083vw] flex-shrink-0 relative max-[600px]:absolute max-[600px]:top-[82.133vw] max-[600px]:right-auto max-[600px]:left-1/2 max-[600px]:w-[129.333vw] max-[600px]:h-[129.333vw] max-[600px]:transform translate-x-[-50%]">
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
        <div className="block px-[12.5vw] pt-[6.25vw] pb-[7.292vw] max-[600px]:px-[4vw] max-[600px]:py-[21.333vw]">
          <h2 className="font-monument leading-custom text-white text-[3.542vw] max-[600px]:text-[8.533vw]">
            PROFITING THROUGH
          </h2>
          <div className="flex justify-end mt-[1.042vw] max-[600px]:text-right max-[600px]:mt-[2.667vw]">
            <GradientText
              text="AI INNOVATION & DECENTRALIZATION"
              border={false}
              fontSize="1.979vw max-[600px]:text-[5.867vw]"
              fontFamily="monument"
            />
          </div>
          <div className="creon-video-container flex justify-between relative overflow-hidden mt-[4.323vw] max-[600px]:mt-[24vw] max-[600px]:flex-col">
            <video
              className="w-[49.323vw] h-[25.26vw] object-cover rounded-md flex-shrink-0 max-[600px]:h-[46.933vw] max-[600px]:w-full"
              autoPlay
              loop
              playsInline
              muted
            >
              <source src="/assets/videos/creon-logo.mp4" type="video/mp4" />
            </video>
            <div className="flex flex-col font-satoshi text-white px-[1.563vw] gap-[1.458vw] w-[23.49vw] justify-center border-x-[1px] border-x-[#13171d] max-[600px]:py-[5.333vw] max-[600px]:gap-[4vw] max-[600px]:w-full max-[600px]:border-y-[1px] max-[600px]:border-y-[#13171d] max-[600px]:border-x-0 max-[600px]:mt-[8.333vw]">
              <h4 className="text-[1.146vw] font-bold leading-[130%] max-[600px]:text-[4.8vw]">
                The dynamic community driven business model of the future
              </h4>
              <p className="text-[0.938vw] leading-[130%] mt-[28px] font-normal max-[600px]:text-[4.267vw]">
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
        <div className="flex justify-between relative px-[12.5vw] pt-[5.99vw] max-[600px]:flex-col max-[600px]:gap-[40vw]">
          <img
            className="absolute top-[22.552vw] left-[18.698vw] w-[43.542vw] z-0 max-[600px]:top-[78vw] max-[600px]:w-[80.533vw] max-[600px]:left-auto"
            src="/assets/images/back-logo.png"
            alt="back-logo"
          />
          <div className="flex flex-col z-10 w-[33.333vw] max-[600px]:w-full">
            <h3 className="text-white font-monument text-[1.979vw] leading-[120%] max-[600px]:text-[5.867vw]">
              OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS
            </h3>
            <GradientText
              text="WHILE PRIORITIZING COMMUNITIES AND DEMORCRATIZING PROFITS"
              fontFamily="monument"
              fontSize="1.979vw max-[600px]:text-[5.867vw]"
              border={false}
            />
          </div>
          <div className="flex flex-col z-10">
            <div
              onClick={() => handleAccordionClick(0)}
              className="cursor-pointer pb-[1.563vw] pl-[1.042vw] max-[600px]:pb-[5.333vw] max-[600px]:w-full"
            >
              <Accordion
                headerOne="Profitability and"
                headerTwo="Growth"
                icon={
                  <ProfitabilitySVG
                    active={accordionState === 0 ? true : false}
                  />
                }
                arrow={
                  <ArrowSVG active={accordionState === 0 ? true : false} />
                }
                active={accordionState === 0 ? true : false}
              >
                At Creon, we handpick cutting-edge AI projects and offer our
                community and token holders early access and investment
                opportunities. Our community actively contributes to the growth
                and profitability of these projects, creating a dynamic
                ecosystem of innovation and shared success.
              </Accordion>
            </div>
            <div
              onClick={() => handleAccordionClick(1)}
              className="cursor-pointer pb-[1.563vw] pl-[1.042vw] max-[600px]:pb-[5.333vw] max-[600px]:w-full"
            >
              <Accordion
                headerOne="Transparent & Fair Decentralized"
                headerTwo="Earnings"
                icon={
                  <TransparentSVG
                    active={accordionState === 1 ? true : false}
                  />
                }
                arrow={
                  <ArrowSVG active={accordionState === 1 ? true : false} />
                }
                active={accordionState === 1 ? true : false}
              >
                Thanks to the integration of the CREON NFT Pass, users are given
                a direct stake in the profits generated by AI tools and
                projects. This initiative overturns the traditional profit
                models by putting the community first, allowing them to benefit
                from the collective use of AI applications.
              </Accordion>
            </div>
            <div
              onClick={() => handleAccordionClick(2)}
              className="cursor-pointer pb-[1.563vw] pl-[1.042vw] max-[600px]:pb-[5.333vw] max-[600px]:w-full"
            >
              <Accordion
                headerOne="Launching the"
                headerTwo="future"
                icon={
                  <LaunchingSVG active={accordionState === 2 ? true : false} />
                }
                arrow={
                  <ArrowSVG active={accordionState === 2 ? true : false} />
                }
                active={accordionState === 2 ? true : false}
              >
                The Creon AI Launchpad represents a groundbreaking opportunity
                in the realm of AI and blockchain. It is the first known
                platform for acquiring allocations in tokenized AI projects,
                offering our community of NFT and CREON token holders early
                access to innovative AI endeavors.
              </Accordion>
            </div>
            <div
              onClick={() => handleAccordionClick(3)}
              className="cursor-pointer pb-[1.563vw] pl-[1.042vw] max-[600px]:pb-[5.333vw] max-[600px]:w-full"
            >
              <Accordion
                headerOne="Limitless Possibilities of AI"
                headerTwo="& Crypto"
                icon={
                  <LimitlessSVG active={accordionState === 3 ? true : false} />
                }
                arrow={
                  <ArrowSVG active={accordionState === 3 ? true : false} />
                }
                active={accordionState === 3 ? true : false}
              >
                The integration of AI and cryptocurrencies presents limitless
                possibilities, and as pioneers, we embrace the challenges and
                the extraordinary rewards. Creon isn't just about profiting from
                technology; it's about actively shaping the future of
                innovation.
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-[12.5vw] py-[8.073vw] gap-[2.083vw] max-[600px]:px-[4vw] max-[600px]:py-[21.333vw] max-[600px]:justify-start max-[600px]:overflow-x-scroll">
          <RoadMapCard
            header="TOKEN"
            subHeader="The Gateway token to the world of AI"
            imgUrl="/assets/images/token.png"
          >
            Set to debut in the latter half of 2024, the CREON token serves as
            the pioneering link between cutting-edge AI initiatives and
            blockchain technology. This innovative token provides NFT and token
            holders with unparalleled access to our Launchpad, AI tools, and
            exclusive pre-launch investment prospects.
          </RoadMapCard>
          <RoadMapCard
            header="REVENUE"
            subHeader="Driving income and growth through decentralization"
            imgUrl="/assets/images/revenue.png"
          >
            CREON NFT and token holders are integral participants in th
            eprofit-sharing from our launchpad AI-based enterprises. We support
            the development of AI tools, ensuring a steady revenue stream, all
            while allowing early investors to enjoy the benefits of their
            support.
          </RoadMapCard>
          <RoadMapCard
            header="LAUNCHPAD"
            subHeader="Driving the future of AI Innovation"
            imgUrl="/assets/images/launchpad.png"
          >
            The Creon AI Launchpad, an essential component of our initiative,
            represents a groundbreaking opportunity in the realm of AI and
            blockchain. It provides the first known platform for acquiring
            allocations in tokenized AI projects, offering our community of NFT
            and CREON token holders early access to innovative and promising AI
            endeavors.
          </RoadMapCard>
        </div>
        <div className="flex flex-col px-[12.5vw] py-[4.167vw] gap-[1.042vw] z-10 max-[600px]:px-[4vw] max-[600px]:py-[8vw] max-[600px]:gap-[4vw] max-[600px]:overflow-x-auto max-[600px]:flex-row ">
          <MarketCard
            header="AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE"
            imgUrl="/assets/images/market-1.png"
          >
            The AI market is one of the most dynamically growing areas of
            technology. According to reports, the global AI market is expected
            to reach $190.61 billion by 2025, with a CAGR (Compound Annual
            Growth Rate) of 36.6%. The key drivers behind this growth include
            advancements in machine learning, increasing demand for big data
            analytics, and growing adoption of AI technology across various
            sectors such as healthcare, finance, and transportation.
          </MarketCard>
          <MarketCard
            header="AI TOOLS AND MARKET"
            imgUrl="/assets/images/market-2.png"
          >
            AI tools refer to the technologies and software that enable computer
            systems to perform tasks usually requiring human intellect. The
            market for these tools is dynamic and diverse, encompassing areas
            such as Natural Language Processing (NLP), machine learning,
            computer vision, and robotics. With a wide range of applications, AI
            tools are becoming increasingly indispensable in many sectors, from
            healthcare to finance, retail, manufacturing, and many others.
          </MarketCard>
          <MarketCard
            header="AI, CRYPTO, AND NFT MARKET"
            imgUrl="/assets/images/market-3.png"
          >
            Artificial Intelligence and blockchain technology are two
            groundbreaking areas leading new technological innovations. The
            combination of these two technologies creates intriguing
            possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage
            AI to create unique digital artworks or to provide exclusive
            AI-based services. Meanwhile, cryptocurrencies can benefit from AI
            by improving security mechanisms, transaction efficiency, and
            service personalization. Such combination brings substantial
            benefits for both developers and users, paving the way for
            unprecedented possibilities.
          </MarketCard>
        </div>
        <div className="flex justify-between items-center relative px-[12.5vw] pt-[0.781vw] pb-[1.823vw] max-[600px]:pt-[1.867vw] max-[600px]:px-[4vw] max-[600px]:pb-[10.667vw] max-[600px]:gap-[4vw] max-[600px]:flex-col">
          <div className="flex items-center gap-[4.688vw] z-10 max-[600px]:gap-[7.467vw] max-[600px]:flex-col-reverse flex-col-reverse">
            <span className="text-[0.833vw] leading-[130%] font-satoshi text-white max-[600px]:text-[3.733vw]">
              © Creon 2023. All rights reserved.
            </span>
            <div className="flex gap-[0.521vw] max-[600px]:gap-[2.667vw]">
              <a
                href="#"
                className="flex items-center justify-center w-[1.771vw] h-[1.771vw] flex-shrink-0 border-2 border-white rounded-full transition-all duration-250 ease-out max-[600px]:w-[9.067vw] max-[600px]:h-[9.067vw]"
              >
                <TelegramSVG />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[1.771vw] h-[1.771vw] flex-shrink-0 border-2 border-white rounded-full transition-all duration-250 ease-out max-[600px]:w-[9.067vw] max-[600px]:h-[9.067vw]"
              >
                <DiscordSVG />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[1.771vw] h-[1.771vw] flex-shrink-0 border-2 border-white rounded-full transition-all duration-250 ease-out max-[600px]:w-[9.067vw] max-[600px]:h-[9.067vw]"
              >
                <TwitterSVG />
              </a>
            </div>
          </div>
          <a
            href="#"
            className="flex gap-[0.313vw] font-satoshi leading-[130%] text-[0.833vw] text-white z-10 max-[600px]:gap-[1.6vw] max-[600px]:text-[3.733vw]"
          >
            Powered by
            <FooterLetter />
          </a>
          <div className="absolute left-0 bottom-0 w-full">
            <div className="roadmap-video w-full h-full relative">
              <video
                className="w-full h-full object-cover max-[600px]:h-[103.2vw]"
                autoPlay
                loop
                playsInline
                muted
              >
                <source
                  src="/assets/videos/roadmap-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
