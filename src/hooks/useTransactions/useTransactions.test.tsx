import { renderHook, waitFor } from "@/test/testUtils/testUtils";
import { useTransactions } from "@/hooks/useTransactions/useTransactions";

describe("useTransactions", () => {
  it("should return correct transactions object", async () => {
    const { result } = renderHook(useTransactions);

    // Testing data set should contain transactions with value included in 3 groups: under 50, above 50 - under 100 and above 100.
    // This allows testing all cases of calculating reward value.
    // It should also contain at least one case of at least 2 transactions of the same customer in the same month.
    // This allows us to correctly test useRewardsPerMonth hook logic.
    // At least 2 customers in the dataset allow testing useRewardsPerCustomer hook logic.
    await waitFor(() => {
      expect(result.current).toEqual(
        expect.objectContaining({
          data: [
            {
              id: 1,
              customer: "testCustomer1",
              value: 40,
              date: new Date("2023-02-28T23:00:00.000Z"),
            },
            {
              id: 2,
              customer: "testCustomer1",
              value: 70,
              date: new Date("2023-01-31T23:00:00.000Z"),
            },
            {
              id: 3,
              customer: "testCustomer1",
              value: 130,
              date: new Date("2023-01-14T23:00:00.000Z"),
            },
            {
              id: 4,
              customer: "testCustomer2",
              value: 160,
              date: new Date("2023-02-14T23:00:00.000Z"),
            },
            {
              id: 5,
              customer: "testCustomer1",
              value: 160,
              date: new Date("2023-02-16T23:00:00.000Z"),
            },
            {
              id: 6,
              customer: "testCustomer3",
              value: 60,
              date: new Date("2023-01-16T23:00:00.000Z"),
            },
            {
              id: 7,
              customer: "testCustomer2",
              value: 60,
              date: new Date("2023-01-19T23:00:00.000Z"),
            },
            {
              id: 8,
              customer: "testCustomer3",
              value: 520,
              date: new Date("2023-02-02T23:00:00.000Z"),
            },
          ],
        })
      );
    });
  });
});
