import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="py-[50px] min-h-[85vh] relative">
      <div className="container flex items-center justify-center h-full z-40">
        <div className="w-1/2">
          <h2 className="text-[72px] leading-[80px]">
            <span className="font-normal">Realize</span> Annual Contract Value
            <span className="font-normal">on</span> <br />
            Day 1
          </h2>
          <p className="mt-6 text-2xl leading-[36px]">
            Offer Monthly Payment Flexibility on annual deals & Eliminate USD
            Billings with BNPL for SaaS & cloud.
          </p>
          <div className="mt-[30px]">
            <Button>Book a Demo</Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src="/images/seller-hero-banner.png" alt="hero banner" />
        </div>
      </div>

      {/* gradient shadow */}
      <div className="absolute -top-[30%] -left-[5%] w-[600px] h-[600px] seller-hero-shadow rounded-full -z-10"></div>
    </section>
  );
};

export default Hero;
