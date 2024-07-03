import { FC } from "react";
import Button from "../ui/Button/Button";

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="min-[490px]:h-[100vh] py-[313px] bg-[url('/hero-bg.png')] bg-cover relative"
    >
      <div className="bg-primary absolute top-0 right-0 left-0 bottom-0 opacity-80 z-10"></div>
      <div className="relative z-20 text-white max-w-4xl mx-auto text-center">
        <div className="">
          <h1 className="">Говорят, никогда не поздно сменить профессию</h1>
          <p className="body-18">
            Сделай круто тестовое задание и у тебя получится
          </p>
        </div>
        <div className="mt-[71px]">
          <Button variant="secondary">
            <h5>Проще простого</h5>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
