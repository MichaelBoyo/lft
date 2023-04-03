import { FC } from "react";

import { SidebarElements } from "../index";
import SideBarLink from "../SideBarLink";

import style from "./index.module.scss";

interface ISidebarSection {}
const SidebarSection: FC<ISidebarSection & SidebarElements> = ({
  heading,
  children,
}) => (
  <div
    className={style.SidebarSection}
    data-testid={`sidebar-elements-${heading}`}
  >
    <div
      className={style.SidebarSection__heading}
      data-testid={`sidebar-elements-heading-${heading}`}
    >
      {heading !== "" ? heading : <hr className={style.solidhr} />}
    </div>
    {children.map(({ Icon, name, to }) => (
      <SideBarLink to={`/dashboard${to}`} key={`sidebarSelection-${to}`}>
        <Icon className={style.SidebarSection__icon} />
        <span data-testid={`sidebar-children-text-${name}`}>{name}</span>
      </SideBarLink>
    ))}
  </div>
);

export default SidebarSection;
