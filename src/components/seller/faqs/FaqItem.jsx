import { useState } from "react";

const FaqItem = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div className="border border-[#E5EAF4]faq-item rounded-xl">
      <div
        className="py-9 px-6 cursor-pointer flex items-center justify-between gap-4 flex-wrap"
        onClick={() => setFaqOpen(!faqOpen)}
      >
        <h4 className={`${faqOpen && "text-primary"} transition-all text-xl`}>
          What are saas flexible payment options?
        </h4>
        <div>
          {faqOpen ? (
            <img src="/images/icons/minus.png" alt="" />
          ) : (
            <img src="/images/icons/plus.png" alt="" />
          )}
        </div>
      </div>

      {faqOpen && (
        <p className="px-6 pb-9 text-[#5A7184] text-lg leading-8">
          SaaS payment solutions refer to specialized payment services designed
          specifically for Software as a Service (SaaS) businesses. These
          solutions streamline and facilitate the payment process for SaaS
          companies, enabling them to accept and manage recurring subscription
          payments from their customers efficiently. Saas payment solutions
          often offer features (such as flexible billing options) tailored to
          the unique needs of SaaS businesses. With these solutions, SaaS
          companies can focus on delivering their software while ensuring a
          seamless and hassle-free payment experience for their customers.
        </p>
      )}
    </div>
  );
};

export default FaqItem;
