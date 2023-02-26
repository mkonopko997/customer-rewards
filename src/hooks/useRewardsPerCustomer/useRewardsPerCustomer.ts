import { useTransactions } from "@/hooks/useTransactions/useTransactions";
import { getRewardValue } from "@/utils/getRewardValue";

type CustomerReward = Record<string, number>;
export const useRewardsPerCustomer = () => {
  const { data } = useTransactions();

  return data?.reduce((prev, { customer, value }) => {
    const reward = getRewardValue(value);
    return {
      ...prev,
      [customer]: prev[customer] + reward || reward,
    };
  }, {} as CustomerReward);
};
