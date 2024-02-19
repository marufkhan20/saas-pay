const BenefitItem = ({ title = "", lists, bgColor = "" }) => {
  return (
    <div className={`py-10 px-[50px] rounded-[20px] ${bgColor}`}>
      <h2 className="text-[38px] leading-[46px] text-secondary">{title}</h2>
      <ul className="mt-6 flex flex-col gap-5">
        {lists?.map((list) => (
          <li key={list} className="flex items-center gap-4 text-lg w-[80%]">
            <img src="/images/icons/tick.png" alt="" />
            <span>{list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitItem;
