import Heading from "./Heading";

const PaymentProcess = () => {
  return (
    <section className="pb-[100px] pt-10">
      <div className="container">
        <div>
          <Heading>INR vs. USD</Heading>
          <img src="/images/icons/shadow.png" alt="shadow" />
          <Heading>{`What's`} Holding You Back?</Heading>
          <p className="text-lg leading-[32px] mt-4">
            Transacting in USD presents customers challenges in withholding
            taxes, outward remittance & more.
          </p>
        </div>

        <div className="mt-[72px]">
          <img src="/images/payment-process.png" className="w-full" alt="" />
        </div>

        <div className="mt-[100px] grid sm:grid-cols-2 gap-[30px]">
          <div className="p-8 rounded-[14px] bg-[#F3F7FC]">
            <div className="w-14 h-14 rounded-[14px] bg-white payment-process-item flex items-center justify-center">
              <img src="/images/icons/empty-wallet.png" alt="wallet" />
            </div>
            <h3 className="text-[32px] leading-[40px] mt-8">
              Unrealised Revenue
            </h3>
            <p className="mt-2">
              Deals, revenue and customers remain unrealised due to the
              complexities presented by multi-currency & forex transactions.
            </p>
          </div>
          <div className="p-8 rounded-[14px] bg-[#F3F7FC]">
            <div className="w-14 h-14 rounded-[14px] bg-white payment-process-item flex items-center justify-center">
              <img src="/images/icons/receipt-item.png" alt="receipt" />
            </div>
            <h3 className="text-[32px] leading-[40px] mt-8">
              Setbacks caused by withholding taxes
            </h3>
            <p className="mt-2">
              Withholding taxes set the customer back an 15 to 20%, leaving them
              expecting SaaS sellers to absorb the added costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcess;
