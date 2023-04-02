import { render, screen } from "@testing-library/react";

import Sidebar from "..";
window.scrollTo = jest.fn();
test("Sidebar component is rendered", () => {
  render(<Sidebar className="testing" />);
  expect(screen.getByTestId("sidebar-container")).toHaveClass("testing");
  const dashboard = screen.getByTestId("dashboard");
  expect(dashboard).toBeInTheDocument();
  ["CUSTOMERS", "BUSINESSES", "SETTINGS"].forEach(async (text) => {
    expect(screen.getByTestId(`sidebar-elements-${text}`)).toBeInTheDocument();
  });
});
