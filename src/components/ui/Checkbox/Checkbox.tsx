import cn from "clsx";
import { FC, InputHTMLAttributes, forwardRef } from "react";
import { FaCheck } from "react-icons/fa6";
type TypeCheckbox = { label: string } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

const Checkbox: FC<TypeCheckbox> = forwardRef<HTMLInputElement, TypeCheckbox>(
  ({ className, checked, label, onChange, ...rest }, ref) => {
    return (
      <label htmlFor="agree_checkbox" className={cn("flex gap-4 items-center")}>
        <input
          id="agree_checkbox"
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          className="hidden"
          {...rest}
        />
        <div
          className={cn(
            "w-6 h-6 rounded border-2 border-mid-grey flex justify-center items-center",
            className
          )}
        >
          {checked && <FaCheck />}
        </div>
        <span>{label}</span>
      </label>
    );
  }
);

export default Checkbox;
