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
          style={{ fontFamily }}
          className={`text-fill-transparent background-clip bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] z-10 max-w-max leading-130% ${fontSize}`}
        >
          {text}
        </div>
      ) : (
        <div
          style={{ fontFamily }}
          className={`gradient-border text-fill-transparent background-clip bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] z-10 max-w-max leading-130% font-bold relative py-[0.365vw] ${fontSize}`}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default GradientText;
