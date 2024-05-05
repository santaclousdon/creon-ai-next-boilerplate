import React from "react";

type IAccordionProps = {
  headerOne: string;
  headerTwo: string;
  icon: React.ReactNode;
  active: boolean;
  children: React.ReactNode;
  arrow: React.ReactNode;
};

const Accordion: React.FC<IAccordionProps> = ({
  headerOne,
  headerTwo,
  icon,
  children,
  arrow,
  active,
}) => {
  return (
    <div className="flex flex-col pb-[1.563vw] border-b border-b-[#13171d] relative transition-all duration-500 ease-out max-[600px]:gap-[5.333vw]">
      <div className="flex justify-between gap-[30px] max-[600px]:gap-[5.333vw]">
        {icon}
        <div className="flex items-center justify-between text-white font-satoshi w-[21.979vw] max-[600px]:w-[67.2vw]">
          <span className=" text-[22px] leading-[130%] font-bold">
            {headerOne} <br></br> {headerTwo}
          </span>
          <div className="transition-all duration-500 ease-out absolute top-[37px] right-[20px] w-[0.729vw]">
            {arrow}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className={
            "text-[18px] leading-[130%] text-white pt-[28px] w-[21.979vw] transition-opacity duration-300 ease-out max-[600px]:w-[67.2vw] " +
            (active ? "block" : "hidden")
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
