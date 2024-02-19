import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../constants";
import Button from "../ui/Button";

const Header = () => {
  const [navBg, setNavBg] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const changeNavBg = () => {
    if (window.scrollY >= 300) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <header
      className={`fixed transition-all duration-300 ${
        navBg ? "bg-white/90 border-b py-5 shadow" : "py-8"
      } top-0 left-0 right-0 w-full z-50`}
    >
      <div className="container flex items-center justify-between gap-5 flex-wrap">
        <Link to="/">
          <img src="/images/logo.png" alt="saas pay" />
        </Link>
        <nav>
          <ul className="flex gap-8 text-lg">
            {navItems?.map((item) => (
              <li
                key={item?.title}
                className="flex flex-col gap-1 items-center"
              >
                <Link
                  to={item?.to}
                  className={`transition-all ${
                    pathname === item?.to
                      ? "text-heading font-semibold"
                      : "text-heading/50 hover:text-heading"
                  }`}
                >
                  {item?.title}
                </Link>
                {pathname === item?.to && (
                  <div className="w-[10px] h-[2px] bg-primary" />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="transparent">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
