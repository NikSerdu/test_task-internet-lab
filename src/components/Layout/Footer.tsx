import { FC } from "react";
import { MdOutlineCopyright } from "react-icons/md";
const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-center border-t border-light-grey py-7 gap-2">
      <div className="flex items-center gap-1">
        <MdOutlineCopyright />
        <div className="">{new Date().getFullYear()}</div>
      </div>
      <div className="">Лаборатория интернет</div>
    </footer>
  );
};

export default Footer;
