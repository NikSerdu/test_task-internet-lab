import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Testimonial from "./Testimonial/Testimonial";

const data = [
  {
    id: 1,
    fullName: "Константинов Михаил Павлович",
    photo: "avatar_1.png",
    city: "Санкт-Петербург",
    text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
  },

  {
    id: 2,
    fullName: "Иван Иванов",
    photo: "avatar_2.png",
    city: "Санкт-Петербург",
    text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
  },

  {
    id: 2,
    fullName: "Иван Иванов",
    photo: "avatar_2.png",
    city: "Самара",
    text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
  },
];

const Testimonials: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section id="testimonials" className="bg-extra-light-grey py-14">
      <h2 className="text-center">Отзывы</h2>
      <div className="container mx-auto mt-8 w-[90%] ">
        <Slider {...settings}>
          {data.map((item) => {
            return <Testimonial item={item} key={item.id + item.fullName} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
