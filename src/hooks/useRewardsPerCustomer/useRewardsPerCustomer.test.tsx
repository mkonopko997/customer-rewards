import { renderHook, waitFor } from "@/test/testUtils/testUtils";
import { useRewardsPerCustomer } from "@/hooks/useRewardsPerCustomer/useRewardsPerCustomer";

describe("useRewardsPerCustomer", () => {
  it("should group transactions per customer and sum", async () => {
    const { result } = renderHook(useRewardsPerCustomer);

    await waitFor(() => {
      expect(result.current).toEqual({
        testCustomer1: 400,
        testCustomer2: 230,
        testCustomer3: 950,
      });
    });
  });
});
