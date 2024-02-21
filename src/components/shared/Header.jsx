import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../constants";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

const Header = () => {
  const [navBg, setNavBg] = useState(false);
  const [openNav, setOpenNav] = useState(false);
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
        navBg
          ? `${
              pathname === "/multi-currency" ? "bg-[#1E0146]/90" : "bg-white/90"
            } border-b py-5 shadow`
          : "py-8"
      } top-0 left-0 right-0 w-full z-50`}
    >
      <div className="container flex items-center justify-between gap-5 flex-wrap">
        <Link to="/">
          {pathname === "/multi-currency" ? (
            <img src="/images/logo-light.svg" alt="saas pay" />
          ) : (
            <img src="/images/logo.png" alt="saas pay" />
          )}
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-lg">
            {navItems?.map((item) => (
              <li
                key={item?.title}
                className="flex flex-col gap-1 items-center"
              >
                <Link
                  to={item?.to}
                  className={`transition-all ${
                    pathname === "/multi-currency"
                      ? "text-white"
                      : pathname === item?.to
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
        <div className="hidden lg:flex items-center gap-1">
          <Button
            variant={
              pathname === "/multi-currency"
                ? "light-transparent"
                : "transparent"
            }
          >
            Login
          </Button>
          <Button
            variant={pathname === "/multi-currency" ? "light" : "primary"}
          >
            Sign Up
          </Button>
        </div>
        {pathname === "/multi-currency" ? (
          <img
            className="cursor-pointer block lg:hidden w-5"
            src="/images/icons/menu-light.png"
            onClick={() => setOpenNav(true)}
            alt="menu"
          />
        ) : (
          <img
            className="cursor-pointer block lg:hidden w-5"
            src="/images/icons/menu.png"
            onClick={() => setOpenNav(true)}
            alt="menu"
          />
        )}
      </div>

      {/* mobile nav */}
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
    </header>
  );
};

export default Header;
