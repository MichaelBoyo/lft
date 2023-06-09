import { render, screen } from "@testing-library/react";

import UserDetailSummary from "..";
import data from "../../../testing-utils/testdata";

test("UserDetailsSummary component is rendered", () => {
  render(
    <UserDetailSummary
      data={data}
      navigation={[
        {
          text: "One",
          active: true,
        },
        {
          text: "Two",
          active: false,
        },
        {
          text: "Three",
          active: false,
        },
      ]}
      setNavigation={() => {}}
    />
  );
  const userAvatar = screen.getByTestId("user-avatar");
  const userName = screen.getByTestId("user-name");
  const userAccountId = screen.getByTestId("user-account-id");
  const userBalance = screen.getByTestId("user-balance");
  const userBvn = screen.getByTestId("user-bvn");
  const buttons = screen.getAllByRole("button");

  expect(userAvatar).toBeInTheDocument();
  expect(userName).toBeInTheDocument();
  expect(userAccountId).toBeInTheDocument();
  expect(userBalance).toBeInTheDocument();
  expect(userBvn).toBeInTheDocument();
  buttons.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});
