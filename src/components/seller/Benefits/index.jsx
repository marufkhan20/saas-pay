import BenefitItem from "./BenefitItem";

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container grid grid-cols-2 gap-[26px]">
        <div className="py-10">
          <h4 className="text-[30px] font-light">Maximise</h4>
          <h2 className="mt-3 text-[48px] leading-[62px]">
            Conversions, Productivity & Cashflow
          </h2>
          <p className="mt-4 text-xl leading-[28px]">
            SaaSPay acts as a B2B SaaS sales accelerator for teams driving
            high-velocity sales
          </p>
        </div>

        <BenefitItem
          title="Sales Team"
          bgColor="bg-[#9DE2FD]/15"
          lists={[
            "No more Complex ACH Transfers - Collect in INR from your customers",
            "Convert price-sensitive leads",
            "Improve customer retention",
          ]}
        />
        <BenefitItem
          title="CSM Team"
          bgColor="bg-[#F4F1FE]"
          lists={[
            "Convert monthly to annual on renewal cycles",
            "No recollections & payment chasing",
            "Eliminate payment-related churn",
          ]}
        />
        <BenefitItem
          title="Finance Team"
          bgColor="bg-[#FEFAF0]"
          lists={[
            "Realise forecasted revenue of monthly customers",
            "Receive monthly billables as one-time payments",
            " Increased cash flow on Day 1.",
          ]}
        />
      </div>
    </section>
  );
};

export default Benefits;
