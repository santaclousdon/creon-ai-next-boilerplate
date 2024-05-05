import React from "react";

type IMarketCardProps = {
  header: string;
  imgUrl: string;
  children: React.ReactNode;
};

const MarketCard: React.FC<IMarketCardProps> = ({
  header,
  imgUrl,
  children,
}) => {
  return (
    <div className="flex bg-[#13171d]/60 relative rounded-md min-h-[15.729vw] max-[600px]:min-h-[172vw] max-[600px]:flex-col-reverse max-[600px]:justify-end">
      <div className="flex flex-col p-[2.083vw] text-white max-[600px]:px-[4.8vw] max-[600px]:py-[6.667vw]">
        <div className="text-[1.979vw] font-monument leading-[130%] max-[600px]:text-[5.867vw] max-[600px]:w-[68.267vw]">
          {header}
        </div>
        <div className="text-[0.938vw] font-satoshi leading-[130%] max-[600px]:text-[4.267vw]">
          {children}
        </div>
      </div>
      <img
        className="object-cover w-[23.594vw] max-[600px]:w-full max-[600px]:rounded-t-[1.6vw]"
        src={imgUrl}
        alt="market image"
      />
    </div>
  );
};

export default MarketCard;
