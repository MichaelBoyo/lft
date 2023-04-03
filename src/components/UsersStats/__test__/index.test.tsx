import { render, screen } from "@testing-library/react";
import { Users } from "../../../assets";
import UserStats from "..";

test("USerzStats component is rendered", () => {
  render(
    <UserStats
      {...{
        Icon: Users,
        heading: "string",
        count: 4,
      }}
    />
  );
  const icon = screen.getByTestId("icon");
  const heading = screen.getByTestId("heading");
  const count = screen.getByTestId("count");
  expect(icon).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(count).toBeInTheDocument();
});
