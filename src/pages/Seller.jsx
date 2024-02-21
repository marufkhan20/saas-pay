import Benefits from "../components/seller/Benefits";
import CallToAction from "../components/seller/CallToAction";
import Companies from "../components/seller/Companies";
import Hero from "../components/seller/Hero";
import CaseStudies from "../components/seller/caseStudies";
import HowItWorks from "../components/seller/howItWorks";
import Offers from "../components/seller/offers";
import Process from "../components/seller/process";
import Faqs from "../components/shared/faqs";

const Seller = () => {
  return (
    <main>
      <Hero />
      <Companies />
      <Offers />
      <HowItWorks />
      <CallToAction />
      <Benefits />
      <Process />
      <CaseStudies />
      <Faqs />
    </main>
  );
};

export default Seller;
