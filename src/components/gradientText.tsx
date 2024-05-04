type GradientTextProps = {
  text: string;
  fontSize: string;
  border: boolean;
};

const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontSize,
  border,
}) => {
  return (
    <>
      {!border ? (
        <div
          style={{ fontSize }}
          className="text-fill-transparent background-clip bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] z-10 max-w-max leading-130%"
        >
          {text}
        </div>
      ) : (
        <div
          style={{ fontSize }}
          className="text-fill-transparent background-clip bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] z-10 max-w-max leading-130% relative before:content-[''] before:absolute before:left-0 before:top:0 before:w-full before:block before:h-1px"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default GradientText;
