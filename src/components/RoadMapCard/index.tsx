import React from "react";
import GradientText from "../GradientText";

type IRoadMapCardProps = {
  header: string;
  subHeader: string;
  imgUrl: string;
  children: React.ReactNode;
};

const RoadMapCard: React.FC<IRoadMapCardProps> = ({
  header,
  subHeader,
  imgUrl,
  children,
}) => {
  return (
    <div className="flex flex-col bg-[#13171d]/60 flex-1 relative rounded-md w-[23.594vw] py-[1.563vw]">
      <div className="absolute right-[30px] top-0 -translate-y-1/2 flex items-center justify-center px-[6px] py-[3px] rounded-full bg-white text-black text-center custom-font font-bold text-[12px] leading-custom">
        COMING SOON
      </div>
      <div className="p-[1.563vw]">
        <div className="text-white text-[1.979vw] leading-[120%] font-monument">
          {header}
        </div>
        <div className="mt-[0.781vw] h-[3.02vw] font-bold">
          <GradientText
            text={subHeader}
            fontSize="1.146vw"
            fontFamily="satoshi"
            border={false}
          />
        </div>
      </div>
      <div className="overflow-hidden w-[22.031vw] h-[12.188vw] rounded-r-md">
        <img
          className="pl-0 hover:scale-110 transition-transform duration-300 ease-in-out object-cover"
          src={imgUrl}
          alt="card image"
        />
      </div>
      <div className="pt-[1.563vw] px-[1.563vw] text-[0.938vw] text-white font-satoshi leading-[130%]">
        {children}
      </div>
    </div>
  );
};

export default RoadMapCard;
