import Heading from "../../shared/Heading";

const CaseStudies = () => {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="container">
        <Heading
          title={
            <span>
              Seller Spotlight: <span className="font-bold">Empowering</span>{" "}
              Tales of <span className="font-bold">Success</span>
            </span>
          }
          subTitle="Discover how SaaSPay's payment solutions enabled sellers to smash their sales targets. Hear firsthand accounts of how we empowered them to achieve unprecedented SaaS growth."
        />

        <div className="relative">
          <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-20">
            <div className="flex items-center gap-3">
              <div>
                <img src="images/companies/2.png" alt="" />
              </div>
              <div className="p-3 rounded-full border border-[#4E5D7833] bg-white flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
                <span className="text-medium text-[21px] text-secondary/60">
                  Case Study
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[64px] lg:leading-[70px]">
                How AWS Marketplace closed deals worth $M using SaaSPay
              </h2>
              <p className="mt-3 text-2xl leading-[38px]">
                AWS Marketplace bid adieu to USD billings & upfront payments
                cramping up cash flow. MP simplified transactions by offering
                customers the option to make INR payments which was previously
                not possible, this helped them clear deals worth $. With an
                added layer of payment flexibility, AWS was able to earn ACV on
                Day 1 while helping customers avail better discounts and payment
                flexibility
              </p>

              <div className="mt-20 flex items-center gap-3">
                <div className="w-[100px] h-[18px] rounded-full bg-primary" />
                <div className="w-[44px] h-[18px] rounded-full bg-[#EAEAEA] cursor-pointer" />
                <div className="w-[44px] h-[18px] rounded-full bg-[#EAEAEA] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-10 left-0">
            <img src="/images/icons/case-study.png" alt="" />
          </div>

          <div className="hidden lg:block absolute bottom-10 right-0">
            <img src="/images/icons/case-study.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
