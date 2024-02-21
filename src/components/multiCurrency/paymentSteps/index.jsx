import Heading from "../Heading";
import PaymentStep from "./PaymentStep";

const PaymentSteps = () => {
  return (
    <section className="py-[100px]">
      <div className="container">
        <Heading>
          Localise Your Payments <br />
          How Do We Make It Happen?
        </Heading>

        <div className="mt-[72px] grid sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          <PaymentStep
            title="Simplifying Currency Conversion"
            description="Raise an invoice in INR using SaaSPay"
            step={1}
            icon="empty-wallet-color.png"
          />
          <PaymentStep
            title="Buyer-Friendly INR Payments"
            description="Hassle-free INR payment completed by the buyer"
            step={2}
            icon="coin.png"
          />
          <PaymentStep
            title="Seamlessly Convert to USD"
            description="You realize revenue in USD facilitated by our Forex APIs"
            step={3}
            icon="coin.png"
          />
        </div>

        <div className="mt-16">
          <img
            src="/images/transaction-details.png"
            alt="transaction details"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentSteps;
