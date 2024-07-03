import { FC } from "react";

const Statistics: FC = () => {
  return (
    <section
      id="statistics"
      className="container flex gap-8 mx-auto lg:items-center max-md:flex-col-reverse"
    >
      <div className="lg:w-1/2 flex flex-col gap-[18px] max-md:text-center">
        <h3>Круто, ты дошел до третьего блока</h3>
        <p className="body-16 max-md:max-w-[600px]">
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽.
        </p>
        <p className="body-16 max-md:max-w-[600px]">
          Доступ к заработанным деньгам помогает отказаться от кредитов и
          экономить деньги на процентах и штрафах.
        </p>
      </div>
      <div className="lg:w-1/2 max-md:mx-auto">
        <img src="app.png" alt="" className="md:w-[592px] max-md:w-[592px]" />
      </div>
    </section>
  );
};

export default Statistics;
