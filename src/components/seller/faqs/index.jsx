import Heading from "../../shared/Heading";
import FaqItem from "./FaqItem";

const Faqs = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="w-[60%] mx-auto">
          <div className="text-center">
            <span className="text-lg">FAQs</span>
            <Heading
              title={
                <span>
                  <span className="font-bold">Frequently</span> asked Questions
                </span>
              }
            />
          </div>

          <div className="mt-16 flex flex-col gap-4">
            <FaqItem />
            <FaqItem />
            <FaqItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
