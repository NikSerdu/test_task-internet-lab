import cn from "clsx";
import { FC, InputHTMLAttributes, forwardRef } from "react";
type TypeInput = {} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<TypeInput> = forwardRef<HTMLInputElement, TypeInput>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "rounded bg-extra-light-grey placeholder:text-dark-grey p-4 outline-none",
          className
        )}
        {...rest}
      ></input>
    );
  }
);

export default Input;
