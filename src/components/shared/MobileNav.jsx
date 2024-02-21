import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../constants";
import Button from "../ui/Button";

const MobileNav = ({ openNav, setOpenNav }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setOpenNav(false);
  }, [pathname, setOpenNav]);
  return (
    <div
      className={`transition-all duration-300 fixed ${
        openNav ? "inset-0 lg:-top-[200%]" : "-top-[200%]"
      } w-full h-full bg-white`}
    >
      <div className="p-5 pt-10 flex justify-end">
        <img
          className="w-4 h-4 cursor-pointer"
          src="/images/icons/close.png"
          alt="close"
          onClick={() => setOpenNav(false)}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 px-5">
        <nav>
          <ul className="flex flex-col gap-8 text-lg">
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
        <div className="flex flex-col items-center gap-1">
          <Button variant="transparent">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
