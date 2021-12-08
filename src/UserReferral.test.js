import { render, screen } from "@testing-library/react";
import UserReferall from "./UserReferralForm";

test("renders learn react link", () => {
  render(<UserReferall />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
