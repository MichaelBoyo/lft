import { render, screen } from "@testing-library/react";

import Navbar from "..";
window.scrollTo = jest.fn();
test("Navbar component is rendered", () => {
  const data = {
    className: "testing",
    showSideBar: false,
    setShowSideBar: jest.fn(),
  };
  render(<Navbar {...data} />);
  expect(screen.getByTestId("navbar-container")).toHaveClass("testing");
  const docsLink = screen.getByTestId("docs-link");
  const userImage = screen.getByTestId("user-image");
  expect(docsLink).toBeInTheDocument();
  expect(userImage).toBeInTheDocument();
});
