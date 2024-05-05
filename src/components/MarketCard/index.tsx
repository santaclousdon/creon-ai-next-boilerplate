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
    <div className="flex bg-[#13171d]/60 relative rounded-md min-h-[15.729vw]">
      <div className="flex flex-col p-[2.083vw] text-white">
        <div className="text-[1.979vw] font-monument leading-[130%]">
          {header}
        </div>
        <div className="text-[0.938vw] font-satoshi leading-[130%]">
          {children}
        </div>
      </div>
      <img
        className="object-cover w-[23.594vw]"
        src={imgUrl}
        alt="market image"
      />
    </div>
  );
};

export default MarketCard;
