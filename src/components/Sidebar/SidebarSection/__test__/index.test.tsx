import { render, screen } from "../../../../testing-utils";

import SidebarSection from "..";
import Users from "../../../../assets/icons/Users";
test("SideBarSection component is rendered with props", () => {
  const data = {
    heading: "Element",
    children: [
      {
        Icon: Users,
        name: "string",
        to: "string",
        key: "str-ng",
      },
      {
        Icon: Users,
        name: "e",
        to: "stuff",
        key: "str-ang",
      },
    ],
  };
  render(<SidebarSection {...data} />, { route: "/dashboard/users" });
  const sidebarSectionHeading = screen.getByTestId(
    `sidebar-elements-${data.heading}`
  );
  const sidebarChildrenTextFirst = screen.getByTestId(
    `sidebar-children-text-${data.children[0].name}`
  );
  const sidebarChildrenTextSecond = screen.getByTestId(
    `sidebar-children-text-${data.children[1].name}`
  );
  expect(sidebarSectionHeading).toBeInTheDocument();
  expect(sidebarChildrenTextFirst).toBeInTheDocument();
  expect(sidebarChildrenTextSecond).toBeInTheDocument();
});
