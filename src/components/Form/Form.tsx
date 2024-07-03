import cn from "clsx";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../ui/Button/Button";
import Checkbox from "../ui/Checkbox/Checkbox";
import Input from "../ui/Input/Input";
const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      checkbox: false,
      name: "",
      phone: "",
    },
    mode: "all",
  });
  const notify = () =>
    toast("Форма успешно отправлена!", {
      type: "success",
    });
  const onSubmit = (data: any) => {
    if (data.name.length && data.phone && data.checkbox) {
      notify();
      reset();
    }
  };
  const isChecked = watch("checkbox");

  return (
    <section id="form" className="container mx-auto pb-20">
      <h2 className="text-center">Отправь форму</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
        className="grid gap-8 grid-cols-2 max-md:grid-cols-1 max-w-[800px] mx-auto mt-11"
      >
        <Input
          placeholder="Имя"
          type="text"
          className={cn("", {
            "border border-dangerous": errors.name,
          })}
          {...register("name", { required: true })}
        />

        <Input
          placeholder="Телефон"
          type="tel"
          className={cn("", {
            "border border-dangerous": errors.name,
          })}
          {...register("phone", {
            required: true,
            pattern: /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/,
          })}
        />

        <Checkbox
          label="Согласен, отказываюсь"
          {...register("checkbox", { required: true })}
          checked={isChecked}
          onChange={() => setValue("checkbox", !isChecked)}
          className={cn("", {
            "border border-dangerous": errors.checkbox,
          })}
        />
        <Button className="" type="submit">
          Отправить
        </Button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Form;
