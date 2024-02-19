import { Link } from "react-router-dom";
import Button from "../ui/Button";
import ComingSoonBtn from "../ui/ComingSoonBtn";

const Footer = () => {
  return (
    <footer
      className="bg-cover"
      style={{ backgroundImage: "url(/images/footer-banner.png)" }}
    >
      <div className="container">
        <div className="pt-20 pb-4 flex items-center justify-between gap-5 flex-wrap border-b border-[#EFEFEF38]">
          <h2 className="text-white text-[38px] font-light w-[70%]">
            Browse our exclusive{" "}
            <span className="font-bold">SaaS seller partner offerings,</span>{" "}
            and <span className="font-bold">unlock growth</span> with SaaSPay.
          </h2>
          <Button variant="success">Check now</Button>
        </div>

        <div className="py-16">
          <div className="grid grid-cols-4 gap-12">
            <div className="flex items-center gap-[14px]">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                <img src="/images/icons/location.png" alt="location" />
              </div>
              <p className="text-white">
                GR Icon, Koromanagala, <br />
                Bangalore{" "}
              </p>
            </div>
            <div className="flex items-center gap-[14px]">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                <img src="/images/icons/email.png" alt="email" />
              </div>
              <p className="text-white">hello@saaspay.co</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-12 mt-20 text-white">
            <div>
              <h3 className="text-lg text-white">SaaSPay</h3>
              <ul className="mt-8 text-sm flex flex-col gap-5">
                <li>
                  <Link to="#">Talk to our team</Link>
                </li>
                <li>
                  <Link to="#">For our Buyers</Link>
                </li>
                <li>
                  <Link to="#">For our Sellers</Link>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="text-white/50">Buying on AWS</span>
                  <ComingSoonBtn />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white">Product</h3>
              <ul className="mt-8 text-sm flex flex-col gap-5">
                <li className="flex items-center gap-[10px]">
                  <span className="text-white/50">Enterprise</span>
                  <ComingSoonBtn />
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="text-white/50">Checkout</span>
                  <ComingSoonBtn />
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="text-white/50">Product</span>
                  <ComingSoonBtn />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white">Resources</h3>
              <ul className="mt-8 text-sm flex flex-col gap-5">
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Case Studies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-[#EFEFEF38] flex items-center justify-between gap-5 flex-wrap">
          <div>
            <img src="/images/logo-light.svg" alt="logo" />
            <h4 className="text-white text-xs mt-[6px]">
              Powering Payments and Possibilities
            </h4>
          </div>

          <nav>
            <ul className="flex items-center gap-10 text-white text-sm">
              <li>
                <Link to="#">Terms</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Cookies</Link>
              </li>
            </ul>
          </nav>

          <div>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  to="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10"
                >
                  <img src="/images/icons/linkedin.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10"
                >
                  <img src="/images/icons/facebook.png" alt="facebook" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10"
                >
                  <img src="/images/icons/twitter.png" alt="twitter" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10"
                >
                  <img src="/images/icons/instagram.png" alt="instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
