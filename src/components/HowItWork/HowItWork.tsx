import { FC } from "react";

const data = [
  {
    id: 1,
    icon: "waiting.png",
    title: "Прочитай задание внимательно",
    description: "Думаю у тебя не займет это больше двух-трех минут",
    alt: "",
  },
  {
    id: 2,
    icon: "delivery-truck.png",
    title: "Изучи весь макет внимательно",
    description:
      "Подумай как это будет работать на разных разрешениях и при скролле",
    alt: "",
  },
  {
    id: 3,
    icon: "secure.png",
    title: "Сделай хорошо",
    description: "Чтобы мы могли тебе доверить подобные задачи в будущем",
    alt: "",
  },
  {
    id: 4,
    icon: "money-bags.png",
    title: "Получи предложение",
    description:
      "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
    alt: "",
  },
];

const HowItWork: FC = () => {
  return (
    <section id="how-it-work" className="container max-w-[1216px] mx-auto">
      <h2 className="text-center">Как это работает</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16">
        {data.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <img src={item.icon} alt={item.alt} />
            <h6 className="mt-4">{item.title}</h6>
            <p className="body-14">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
