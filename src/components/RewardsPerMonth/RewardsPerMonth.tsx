import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useRewardsPerMonth } from "@/hooks/useRewardsPerMonth/useRewardsPerMonth";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const RewardsPerMonth: FC = () => {
  const { customer } = useParams<{ customer: string }>();
  const rewardPerMonth = useRewardsPerMonth(customer);

  const getTable = () => {
    if (!rewardPerMonth) {
      return (
        <div className="w-full flex justify-center">
          <CircularProgress />
        </div>
      );
    }
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Reward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(rewardPerMonth).map((key) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{rewardPerMonth[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div>
      <div className="flex justify-between mb-3">
        <Link to="../" className="text-blue-500 hover:underline">
          Back
        </Link>
        <div>Showing rewards per month for {customer}</div>
      </div>
      {getTable()}
    </div>
  );
};
