const HowItWorkItem = ({
  step = "",
  image = "",
  title = "",
  description = "",
  stepWidth = "",
}) => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="w-1/2">
        <img src={`/images/how-it-works/${image}`} alt="step" />
      </div>
      <div className="flex flex-col gap-2 items-center space-y-[50%]">
        <div className="w-8 h-8 rounded-full bg-[#F1F3F6]" />
        <div className="w-[2px] h-full bg-[#f1f3f6]" />
      </div>
      <div className="w-1/2">
        <div className="w-[200px] h-4 rounded-full bg-[#F2F3F7]">
          <div className={`h-full ${stepWidth} bg-primary rounded-full`} />
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[#F1F3F6] font-semibold text-[72px] leading-[96px]">
            0{step}
          </h2>
          <h2 className="text-[48px] leading-[64px]">{title}</h2>
          <p className="mt-[30px] text-[22px] leading-[32px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkItem;
