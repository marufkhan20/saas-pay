const Heading = ({ title, subTitle = "" }) => {
  return (
    <div className="flex gap-5 flex-col text-center items-center w-full">
      <h2 className="text-[30px] sm:text-[40px] md:text-[56px] lg:text-[64px] lg:leading-[75px] text-center font-light">
        {title}
      </h2>
      {subTitle && <h4 className="text-2xl font-light">{subTitle}</h4>}
    </div>
  );
};

export default Heading;
