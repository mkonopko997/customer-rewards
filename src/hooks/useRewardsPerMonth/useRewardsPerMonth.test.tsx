import { renderHook, waitFor } from "@/test/testUtils/testUtils";
import { useRewardsPerMonth } from "@/hooks/useRewardsPerMonth/useRewardsPerMonth";
import customers from "@/test/mocks/customers.json";

const values: Record<string, unknown> = {
  testCustomer1: {
    "3-2023": 0,
    "2-2023": 240,
    "1-2023": 160,
  },
  testCustomer2: {
    "1-2023": 10,
    "2-2023": 220,
  },
  testCustomer3: {
    "1-2023": 10,
    "2-2023": 940,
  },
};
describe("useRewardsPerMonth", () => {
  it.each(
    customers.map((customer) => ({ customer, expected: values[customer] }))
  )(
    "should group client transactions per month and sum the value",
    async ({ customer, expected }) => {
      const { result } = renderHook(() => useRewardsPerMonth(customer));

      await waitFor(() => {
        expect(result.current).toEqual(expected);
      });
    }
  );
});
