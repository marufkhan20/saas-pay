import Heading from "../../shared/Heading";
import OfferItem from "./OfferItem";

const Offers = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Heading
          title={
            <span>
              Convert <span className="font-bold">monthly deals</span> to{" "}
              <span className="font-bold">annual deals</span> without Upfront
              Payments.
            </span>
          }
        />

        <div className="mt-24 grid sm:grid-cols-2 gap-[50px] lg:w-[80%] mx-auto">
          <OfferItem
            bgColor="bg-[#9DE2FD]/15"
            title={
              <span>
                <span className="font-bold">Increase Annual</span> Subscription
                Sales
              </span>
            }
            description="Upfront payments are the only reason your customers choose monthly plans over..."
            image="1.png"
          />
          <OfferItem
            bgColor="bg-[#EE7D75]/15"
            title={
              <span className="font-bold">
                Convert monthly into annual deals
              </span>
            }
            description="Offer annual deals with payment flexibility to customers on renewal cycles to..."
            image="2.png"
          />
          <OfferItem
            bgColor="bg-[#A897F9]/15"
            title={
              <span className="font-bold">
                Eliminate Payment Chasing & Churn
              </span>
            }
            description="Realise annual contract value on day 1 to eliminate payment chasing..."
            image="3.png"
          />
          <OfferItem
            bgColor="bg-[#F9DB88]/15"
            title={
              <span>
                <span className="font-bold">12x AOV & CLTV</span> on Day 1
              </span>
            }
            description="Increase average order and customer lifetime value by 12x on Day 1 by..."
            image="4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
