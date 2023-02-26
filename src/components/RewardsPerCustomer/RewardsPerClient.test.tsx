import { render, waitFor } from "@/test/testUtils/testUtils";
import { screen } from "@testing-library/react";
import { RewardsPerCustomer } from "@/components/RewardsPerCustomer/RewardsPerCustomer";
import customers from "@/test/mocks/customers.json";

describe("RewardsPerCustomer", () => {
  it("should display table of customers and rewards", async () => {
    const { container } = render(<RewardsPerCustomer />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it("should display links to rewards per month page", async () => {
    render(<RewardsPerCustomer />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    screen.getAllByRole("link").forEach((link, index) => {
      expect(link.getAttribute("href")).toEqual(`/${customers[index]}`);
    });
  });
});
