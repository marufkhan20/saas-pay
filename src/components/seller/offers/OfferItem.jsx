import { Link } from "react-router-dom";

const OfferItem = ({ title, description = "", image = "", bgColor = "" }) => {
  return (
    <div className={`p-[50px] rounded-[20px] ${bgColor}`}>
      <h2 className="text-[30px] md:text-[38px] md:leading-[44px] font-light">
        {title}
      </h2>
      <p className="mt-2 text-lg leading-7">{description}</p>
      <Link className="mt-2 inline-block text-base text-[#5B2EB799]/60" to="#">
        Read more
      </Link>
      <div className="mt-5 flex justify-end">
        <img src={`/images/offers/${image}`} alt="offer" />
      </div>
    </div>
  );
};

export default OfferItem;
