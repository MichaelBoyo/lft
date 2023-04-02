import { render, screen } from "../../../../testing-utils";

import SidebarLink from "..";

test("component is rendered with props", () => {
  const data = {
    to: "",
    className: "string",
  };
  render(
    <SidebarLink {...data}>
      <span>pop</span>
    </SidebarLink>,
    { route: "/dashboard/users" }
  );
  const sidebarLink = screen.getByTestId(`sidebar-link-${data.to}`);
  expect(sidebarLink).toHaveClass("string");
  expect(sidebarLink).toBeInTheDocument();
  expect(screen.getByText("pop")).toBeInTheDocument();
});
