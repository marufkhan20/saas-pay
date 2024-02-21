import Heading from "./Heading";

const Showcase = () => {
  return (
    <section>
      <div className="container">
        <Heading className="text-center">
          Streamlining Multi-Currency <br />
          Payments with SaaSPay <br />
          <span className="text-primary">Go Borderless with SaaSPay</span>
        </Heading>

        <div className="mt-[90px] relative md:w-[640px] h-[740px] mx-auto">
          <img
            className="absolute top-0 -right-20"
            src="/images/icons/shadow-2.png"
            alt=""
          />
          {/* <img
            className="absolute -top-10 -left-28"
            src="/images/icons/shadow-arrow.png"
            alt=""
          /> */}
          <div className="absolute top-0 w-[90%] md:w-[640px] h-[700px] md:h-[640px] left-[50%] translate-x-[-50%] bg-[#D0FDEA] rounded-2xl rotate-[-8deg]"></div>
          <div className="absolute top-0 w-[90%] md:w-[640px] h-[700px] md:h-[640px] left-[50%] translate-x-[-50%] bg-[#FFF6DE] rounded-2xl rotate-[8deg]"></div>
          <div className="absolute top-0 w-[90%] md:w-[640px] md:h-[640px] left-[50%] translate-x-[-50%] bg-[#E2DAFF] rounded-2xl p-12 flex flex-col items-center">
            <div className="text-center">
              <img src="/images/payment.png" alt="payment" />
            </div>
            <h2 className="text-[36px] leading-[40px] mt-6">
              Receive Payments in USD for AWS Marketplace Deals
            </h2>
            <p className="mt-3">
              Your customers make seamless payments in INR for your USD-billed
              AWS marketplace deals, eliminating ACH transfers, withholding
              taxes & more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
