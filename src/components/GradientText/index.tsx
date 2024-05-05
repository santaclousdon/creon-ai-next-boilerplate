type IGradientTextProps = {
  text: string;
  fontSize: string;
  fontFamily: string;
  border: boolean;
};

const GradientText: React.FC<IGradientTextProps> = ({
  text,
  fontSize,
  fontFamily,
  border,
}) => {
  return (
    <>
      {!border ? (
        <div
          style={{ fontSize, fontFamily }}
          className="text-fill-transparent background-clip bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] z-10 max-w-max leading-130%"
        >
          {text}
        </div>
      ) : (
        <div
          style={{ fontSize, fontFamily }}
          className="gradient-border text-fill-transparent background-clip bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] z-10 max-w-max leading-130% relative py-[0.365vw]"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default GradientText;
