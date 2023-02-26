import {
  render as originalRender,
  renderHook as originalRenderHook,
  waitFor as originalWaitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RESPONSE_DELAY } from "@/hooks/useTransactions/useTransactions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const render = (element: React.ReactElement) => {
  return originalRender(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{element}</BrowserRouter>
    </QueryClientProvider>
  );
};

export const renderHook: typeof originalRenderHook = (render) => {
  return originalRenderHook(render, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    ),
  });
};

const ADDITIONAL_TIMEOUT = 500; // I would investigate why it needs to be so big but RESPONSE_DELAY is artificial so there is no sense in doing it.
export const waitFor: typeof originalWaitFor = async (func) => {
  return originalWaitFor(func, {
    timeout: RESPONSE_DELAY + ADDITIONAL_TIMEOUT,
  });
};
