import { useTransactions } from "@/hooks/useTransactions/useTransactions";
import { getRewardValue } from "@/utils/getRewardValue";

type RewardValuePerMonth = Record<string, number>;

export const useRewardsPerMonth = (customer: string | undefined) => {
  const { data } = useTransactions();

  if (!customer) {
    return {};
  }

  return data
    ?.filter((transaction) => customer === transaction.customer)
    .map(({ value, date }) => ({
      value,
      month: `${date.getMonth() + 1}-${date.getFullYear()}`,
    }))
    .reduce((prev, { month, value }) => {
      const reward = getRewardValue(value);
      return {
        ...prev,
        [month]: prev[month] + reward || reward,
      };
    }, {} as RewardValuePerMonth);
};
