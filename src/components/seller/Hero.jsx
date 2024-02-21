import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="py-[50px] min-h-[85vh] relative">
      <div className="container flex flex-col md:flex-row items-center justify-center h-full z-40">
        <div className="md:w-1/2">
          <h2 className="text-[36px] leading-[40px] sm:text-[48px] sm:leading-[56px] md:text-[66px] md:leading-[70px] lg:text-[72px] lg:leading-[80px] text-center md:text-left">
            <span className="font-normal">Realize</span> Annual Contract Value
            <span className="font-normal">on</span> <br />
            Day 1
          </h2>
          <p className="text-center md:text-left mt-6 text-2xl leading-[36px]">
            Offer Monthly Payment Flexibility on annual deals & Eliminate USD
            Billings with BNPL for SaaS & cloud.
          </p>
          <div className="mt-[30px] text-center md:text-left">
            <Button>Book a Demo</Button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:w-1/2 flex justify-end">
          <img src="/images/seller-hero-banner.png" alt="hero banner" />
        </div>
      </div>

      {/* gradient shadow */}
      <div className="absolute -top-[30%] -left-[5%] w-full h-full sm:w-[600px] sm:h-[600px] seller-hero-shadow rounded-full -z-10"></div>
    </section>
  );
};

export default Hero;
