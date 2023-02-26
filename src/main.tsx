import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RewardsPerCustomer } from "@/components/RewardsPerCustomer/RewardsPerCustomer";
import { worker } from "@/test/mocks/browser";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RewardsPerMonth } from "@/components/RewardsPerMonth/RewardsPerMonth";

worker.start();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="m-5">
        <BrowserRouter>
          <Routes>
            <Route index element={<RewardsPerCustomer />} />
            <Route path=":customer" element={<RewardsPerMonth />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
