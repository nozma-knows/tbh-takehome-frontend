import { render, screen } from "@testing-library/react";
import UserReferral from "./UserReferral";

test("renders learn react link", () => {
  render(<UserReferral />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
