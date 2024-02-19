import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="bg-[#1E0146] py-24">
      <div className="container">
        <div className="flex items-center gap-10">
          <div className="w-full">
            <h2 className="text-[56px] leading-[72px] text-white w-[70%]">
              Bye USD Billings!👋 Hello, Smooth{" "}
              <span className="text-success">INR Transactions!</span>
            </h2>
            <div className="mt-6">
              <Button variant="light">Join the Waitlist</Button>
            </div>
          </div>
          <div className="w-full">
            <img src="/images/call-to-action.png" alt="call to action" />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-2xl text-[#F8F4FF]">For Customers For You</h4>
          <div className="grid grid-cols-3 gap-[30px] mt-6">
            <div className="p-6 rounded-2xl bg-[#2F0E5B]">
              <div className="w-10 h-10 bg-[#43256B] rounded-lg flex items-center justify-center">
                <img src="/images/icons/user.png" alt="user" />
              </div>
              <p className="mt-4 text-[#F8F4FF] font-semibold">
                No more Complex ACH Transfers. Collect in INR from your
                customers
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#2F0E5B]">
              <div className="w-10 h-10 bg-[#43256B] rounded-lg flex items-center justify-center">
                <img src="/images/icons/statistics.png" alt="statistics" />
              </div>
              <p className="mt-4 text-[#F8F4FF] font-semibold">
                Eliminate Withholding taxes of 20%- Realise contract value in
                USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
