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
    <div className="flex bg-[#13171d]/60 relative rounded-md">
      <div className="flex flex-col p-[40px] text-white">
        <div className="text-[38px] font-monument leading-[130%]">{header}</div>
        <div className="text-[18px] font-satoshi leading-[130%]">
          {children}
        </div>
      </div>
      <img className="object-cover" src={imgUrl} alt="market image" />
    </div>
  );
};

export default MarketCard;
