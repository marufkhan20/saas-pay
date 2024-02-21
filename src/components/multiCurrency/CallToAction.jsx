import Button from "../ui/Button";
import Heading from "./Heading";

const CallToAction = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="flex items-center justify-between gap-10 flex-wrap bg-[#2BB87D] rounded-[16px] p-16">
          <Heading className="text-white">
            {`Don't`} let Multi-Currency <br />
            complexities hold you back
          </Heading>
          <Button variant="light" className="text-lg text-[#29B97D] font-bold">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
