import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="relative  z-30">
        <Header />
      </div>
      <div className="">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
