import { render, screen } from "@testing-library/react";
import Layout from "..";
test("Layout component is rendered", () => {
  render(
    <Layout
      {...{
        className: "testing",
      }}
    >
      <div>Testing children</div>
    </Layout>
  );
  expect(screen.getByTestId("layout-container")).toHaveClass("testing");
  expect(screen.getByText("Testing children")).toBeInTheDocument();
});
