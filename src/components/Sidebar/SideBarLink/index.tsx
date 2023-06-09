import { FC, ReactNode } from "react";

import { NavLink } from "react-router-dom";

import style from "./index.module.scss";

interface SideBarLinkInterface {
  children: ReactNode;
  to: string;
  className?: string;
  end?: boolean;
}
const SideBarLink: FC<SideBarLinkInterface> = ({ children, className, ...props }) => (
  <NavLink
    className={({ isActive }) =>
      `${style.SideBarLink} ${className} ${
        isActive ? style.SideBarLink__active : ""
      }`
    }
    {...props}
    data-testid={`sidebar-link-${props.to}`}
  >
    {children}
  </NavLink>
);
SideBarLink.defaultProps = {
  className: "",
  end: false,
};
export default SideBarLink;
