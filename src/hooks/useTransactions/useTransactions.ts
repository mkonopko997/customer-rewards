import { useQuery, UseQueryResult } from "react-query";

type TransactionsResponse = {
  id: number;
  customer: string;
  value: number;
  timestamp: number;
}[];

export type Transactions = {
  id: TransactionsResponse[number]["id"];
  customer: TransactionsResponse[number]["customer"];
  value: TransactionsResponse[number]["value"];
  date: Date;
}[];

export const RESPONSE_DELAY = 1000;

export const useTransactions = (): UseQueryResult<Transactions> => {
  return useQuery(["transactions"], async () => {
    const delayedResponse = await new Promise<Response>((resolve) => {
      setTimeout(async () => {
        resolve(await fetch(`/transactions`));
      }, RESPONSE_DELAY);
    });

    return ((await delayedResponse.json()) as TransactionsResponse).map(
      ({ timestamp, ...rest }) => ({ ...rest, date: new Date(timestamp) })
    );
  });
};
