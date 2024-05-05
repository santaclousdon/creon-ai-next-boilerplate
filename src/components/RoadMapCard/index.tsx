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
    <div className="flex flex-col bg-[#13171d]/60 flex-1 relative rounded-md h-[659px]">
      <div className="absolute right-[30px] top-0 -translate-y-1/2 flex items-center justify-center px-[6px] py-[3px] rounded-full bg-white text-black text-center custom-font font-bold text-[12px] leading-custom">
        COMING SOON
      </div>
      <div className="p-[30px]">
        <div className="text-white text-[38px] leading-[120%] font-monument">
          {header}
        </div>
        <div className="mt-[15px] h-[58px] font-bold">
          <GradientText
            text={subHeader}
            fontSize="22px"
            fontFamily="satoshi"
            border={false}
          />
        </div>
      </div>
      <div className="overflow-hidden w-[423px] h-[234px] rounded-r-md">
        <img
          className="pl-0 hover:scale-110 transition-transform duration-300 ease-in-out object-cover"
          src={imgUrl}
          alt="card image"
        />
      </div>
      <div className="pt-[30px] px-[30px] text-[18px] text-white font-satoshi leading-[130%]">
        {children}
      </div>
    </div>
  );
};

export default RoadMapCard;
