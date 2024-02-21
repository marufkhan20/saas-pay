import { Link } from "react-router-dom";
import { cn } from "../../lib/uttils";

const Button = ({
  to,
  type = "button",
  variant = "primary",
  className = "",
  children,
  onClick,
  ...rest
}) => {
  const styles = `text-sm py-4 border transition-all border-transparent px-[30px] rounded-full inline-block ${
    variant === "primary" &&
    "text-white bg-primary hover:bg-transparent hover:border-primary hover:text-primary"
  } ${
    variant === "transparent" &&
    "bg-transparent text-heading hover:border-heading"
  } ${
    variant === "success" &&
    "text-white bg-success hover:bg-transparent hover:border-success hover:text-success"
  } ${
    variant === "light" &&
    "text-primary bg-white hover:bg-transparent hover:border-white hover:text-white"
  } ${
    variant === "light-transparent" &&
    "text-white hover:text-primary hover:bg-white bg-transparent border-white"
  }`;

  return to ? (
    <Link to={to} {...rest} className={cn(styles, className)}>
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      type={type}
      {...rest}
      className={cn(styles, className)}
    >
      {children}
    </button>
  );
};

export default Button;
