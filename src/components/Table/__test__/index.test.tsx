import { render } from "../../../testing-utils";

import Login from "../../../pages/Login";
window.scrollTo = jest.fn();
test("table component is rendered", () => {
  render(<Login />, { route: "/login" });
});
