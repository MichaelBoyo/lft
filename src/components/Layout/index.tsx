import { FC, ReactNode, useState } from "react";
import style from "./index.module.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
interface LayoutInterface {
  children: ReactNode;
  className: string;
}
const Layout: FC<LayoutInterface> = ({ children, className, ...props }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <section className={style.Layout}>
      <Navbar
        className={style.Layout__nav}
        {...{ showSideBar, setShowSideBar }}
      />
      <Sidebar
        className={`${style.Layout__sidebar} ${
          showSideBar && style.Layout__sidebar__active
        }`}
      />
      <section
        {...props}
        className={`${className} ${style.Layout__body}`}
        data-testid="layout-container"
      >
        {children}
      </section>
    </section>
  );
};

export default Layout;
