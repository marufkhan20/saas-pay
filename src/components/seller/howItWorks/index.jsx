import Heading from "../../shared/Heading";
import HowItWorkItem from "./HowItWorkItem";

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container">
        <Heading
          title="Magic in Action: The SaasPay Way!"
          subTitle="How does it work?"
        />

        <div className="mt-32 flex flex-col gap-[200px]">
          <HowItWorkItem
            step={1}
            title="On checkout & In sales pitch"
            description="SaaSPay can be introduced to your customers in both sales & product-led motions."
            image="1.png"
            stepWidth="w-[33%]"
          />
          <HowItWorkItem
            step={2}
            title="Checkout using SaaSPay’s widget"
            description="Customers onboard themselves and checkout using SaaSPay's BNPL widget."
            image="2.png"
            stepWidth="w-[66%]"
          />
          <HowItWorkItem
            step={3}
            title="Earn ACV on Day 1"
            description="Customers start using their tool today and pay back flexibly using our SaaS payment solution"
            image="3.png"
            stepWidth="w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
