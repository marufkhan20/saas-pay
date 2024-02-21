import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="bg-[#1E0146]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10  min-h-screen py-[150px]">
          <div className="w-full">
            <h2 className="text-[32px] text-center md:text-left sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[72px] text-white lg:w-[70%]">
              Bye USD Billings!👋 Hello, Smooth{" "}
              <span className="text-success">INR Transactions!</span>
            </h2>
            <div className="mt-6 text-center md:text-left">
              <Button variant="light">Join the Waitlist</Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <img src="/images/call-to-action.png" alt="call to action" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
