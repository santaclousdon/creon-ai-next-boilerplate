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
    <div className="flex flex-col pb-[30px] border-b border-b-[#13171d] relative transition-all duration-500 ease-out">
      <div className="flex justify-between gap-[30px]">
        {icon}
        <div className="flex items-center justify-between text-white font-satoshi w-[422px]">
          <span className=" text-[22px] leading-[130%]">
            {headerOne} <br></br> {headerTwo}
          </span>
          <div className="transition-all duration-500 ease-out absolute top-[37px] right-[20px]">
            {arrow}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className={
            "text-[18px] leading-[130%] text-white pt-[28px] w-[422px] transition-opacity duration-300 ease-out " +
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
