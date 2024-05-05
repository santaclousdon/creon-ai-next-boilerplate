import React from "react";

type IArrowSVGProps = {
  active: boolean;
};

const ArrowSVG: React.FC<IArrowSVGProps> = ({ active }) => {
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {active ? (
          <path d="M2 11L8 5L14 11" stroke="white" stroke-width="1.5" />
        ) : (
          <path d="M2 5L8 11L14 5" stroke="white" stroke-width="1.5" />
        )}
      </svg>
    </div>
  );
};

export default ArrowSVG;
