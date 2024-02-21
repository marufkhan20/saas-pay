const PaymentStep = ({ step, title = "", icon = "", description = "" }) => {
  return (
    <div>
      <div
        className={`h-[2px] ${
          Number(step) === 1 ? "bg-primary" : "bg-[#BBC0CA]"
        }`}
      />
      <div className="mt-8">
        <div
          className={`w-12 h-12 rounded-xl ${
            step === 1 ? "bg-[#E2DAFF]" : "bg-[#F3F6FA]"
          } flex items-center justify-center`}
        >
          <img src={`/images/icons/${icon}`} alt="wallet" />
        </div>
        <h3 className="mt-5 text-[28px] leading-[36px]">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-3 items-center">
          <span
            className={`block py-2 px-[20px] rounded-full ${
              Number(step) === 1 ? "bg-primary" : "bg-[#BBC0CA]"
            } text-white font-bold`}
          >
            Step {step}
          </span>
          <span className="text-sm">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
