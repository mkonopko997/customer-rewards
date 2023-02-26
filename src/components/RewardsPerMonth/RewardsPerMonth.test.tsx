import { render, waitFor } from "@/test/testUtils/testUtils";
import { screen } from "@testing-library/react";
import { RewardsPerMonth } from "@/components/RewardsPerMonth/RewardsPerMonth";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ customer: "testCustomer1" }),
}));

describe("RewardsPerMonth", () => {
  it("should display table of months and rewards", async () => {
    const { container } = render(<RewardsPerMonth />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it("should display back link with correct href", async () => {
    render(<RewardsPerMonth />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(screen.getByRole("link", { name: "Back" })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("should display current customer label", async () => {
    render(<RewardsPerMonth />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(
      screen.getByText("Showing rewards per month for testCustomer1")
    ).toBeInTheDocument();
  });
});
