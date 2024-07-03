import { FC } from "react";

type TypeProps = {
  item: {
    id: number;
    fullName: string;
    photo: string;
    city: string;
    text: string;
  };
};

const Testimonial: FC<TypeProps> = ({ item }) => {
  return (
    <div className=" bg-white rounded shadow-md p-[22px] min-h-[316px] ">
      <div className="flex gap-3">
        <div className="">
          <img src={item.photo} alt="" />
        </div>
        <div className="">
          <h6>{item.fullName}</h6>
          <p className="body-12">{item.city}</p>
        </div>
      </div>
      <div className="body-14 mt-5">{item.text}</div>
    </div>
  );
};

export default Testimonial;
