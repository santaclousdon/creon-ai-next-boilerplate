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
    <div className="flex flex-col bg-[#13171d]/60 flex-1 relative rounded-md w-[23.594vw] py-[1.563vw] max-[600px]:w-[77.867vw] max-[600px]:py-[5.333vw]">
      <div className="absolute right-[30px] top-0 -translate-y-1/2 flex items-center justify-center px-[6px] py-[3px] rounded-full bg-white text-black text-center custom-font font-bold text-[12px] leading-custom">
        COMING SOON
      </div>
      <div className="p-[1.563vw]">
        <div className="text-white text-[1.979vw] leading-[120%] font-monument max-[600px]:text-[5.867vw]">
          {header}
        </div>
        <div className="mt-[0.781vw] h-[3.02vw] font-bold max-[600px]:h-[8vw]">
          <GradientText
            text={subHeader}
            fontSize="1.146vw max-[600px]:text-[4.8vw]"
            fontFamily="satoshi"
            border={false}
          />
        </div>
      </div>
      <div className="overflow-hidden w-[22.031vw] h-[12.188vw] rounded-r-md max-[600px]:mt-[5.333vw] max-[600px]:w-[72.533vw] max-[600px]:h-[62.4vw]">
        <img
          className="pl-0 hover:scale-110 transition-transform duration-300 ease-in-out object-cover max-[600px]:h-full"
          src={imgUrl}
          alt="card image"
        />
      </div>
      <div className="pt-[1.563vw] px-[1.563vw] text-[0.938vw] text-white font-satoshi leading-[130%] max-[600px]:text-[4.267vw] max-[600px]:mx-[5.333vw] max-[600px]:my-[4.8vw]">
        {children}
      </div>
    </div>
  );
};

export default RoadMapCard;
