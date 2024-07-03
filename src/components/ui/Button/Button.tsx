import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type TypeButton = {
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<TypeButton>> = ({
  variant = "primary",
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "rounded transition duration-200 hover:cursor-pointer py-5 px-10",
        className,
        {
          "bg-primary hover:bg-primary-hover text-white": variant === "primary",
          "bg-light-grey hover:bg-white border border-light-grey hover:border-mid-grey text-black":
            variant === "secondary",
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
