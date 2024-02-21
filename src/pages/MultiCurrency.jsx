import CallToAction from "../components/multiCurrency/CallToAction";
import Companies from "../components/multiCurrency/Companies";
import Hero from "../components/multiCurrency/Hero";
import PaymentProcess from "../components/multiCurrency/PaymentProcess";
import Showcase from "../components/multiCurrency/Showcase";
import PaymentSteps from "../components/multiCurrency/paymentSteps";
import Faqs from "../components/shared/faqs";

const MultiCurrency = () => {
  return (
    <main className="p-0">
      <Hero />
      <Companies />
      <PaymentProcess />
      <Showcase />
      <PaymentSteps />
      <CallToAction />
      <Faqs />
    </main>
  );
};

export default MultiCurrency;
