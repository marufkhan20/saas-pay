const Process = () => {
  return (
    <section className="py-[150px] border-t border-[#323B4B1A]">
      <div className="container">
        <h2 className="text-[44px] sm:text-[70px] md:text-[90px] lg:text-[114px] text-[#EDE8F880]/50 text-center">
          Discover the Process
        </h2>

        <div className="mt-8 sm:mt-14 md:mt-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-center md:text-left lg:leading-[75px] text-black">
              Sell <span className="text-primary">Smarter</span>,{" "}
              <br className="hidden md:block" />
              Convert <span className="text-primary">Faster</span>
            </h2>
            <h4 className="mt-[18px] text-2xl leading-[38px] text-secondary/50 font-light text-center md:text-left md:w-[60%]">
              Go from Prospect to Purchase with upfront payments. Convert
              monthly subscribers to annual customers with one-click flexible
              financing.{" "}
            </h4>
          </div>

          <div className="px-[38px] bg-[#F0F1F5] pb-16 rounded-[20px] relative">
            <div className="bg-white p-[50px] rounded-bl-[20px] rounded-br-[20px] flex flex-col gap-10">
              <div className="flex gap-5">
                <div>
                  <img className="mt-2" src="/images/icons/tick.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2 text-[20px] md:text-[26px]">
                    Business Details
                  </h4>
                  <img src="/images/icons/placeholder.png" alt="" />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img className="mt-2" src="/images/icons/tick.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2 text-[20px] md:text-[26px]">
                    Registered Address
                  </h4>
                  <img src="/images/icons/placeholder.png" alt="" />
                </div>
              </div>
            </div>

            <div className="mt-9">
              <h3 className="text-2xl md:text-[32px]">Sign Up</h3>
              <h5 className="mt-4 text-[22px] font-light leading-[32px]">
                Register and complete a straightforward Know Your Business (KYB)
                process to set up your SaaSPay account and get ready to go.
              </h5>
            </div>

            {/* navigator */}
            <div className="px-10 py-3 rounded-full bg-white flex items-center gap-2 absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] process-navigator">
              <div className="w-[18px] h-[18px] rounded-full bg-primary" />
              <div className="w-[14px] h-[14px] rounded-full bg-[#F0F1F5] cursor-pointer" />
              <div className="w-[14px] h-[14px] rounded-full bg-[#F0F1F5] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
