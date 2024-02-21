import { cn } from "../../lib/uttils";

const Heading = ({ className = "", children }) => {
  return (
    <h2
      className={cn(
        "text-[32px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
