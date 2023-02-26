import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { useRewardsPerCustomer } from "@/hooks/useRewardsPerCustomer/useRewardsPerCustomer";
import { Link } from "react-router-dom";

export const RewardsPerCustomer = () => {
  const rewards = useRewardsPerCustomer();

  if (!rewards) {
    return (
      <div className="w-full flex justify-center">
        <CircularProgress className="text-center" />
      </div>
    );
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Reward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(rewards).map((key) => (
              <TableRow key={key}>
                <TableCell>
                  <Link to={key} className="text-blue-500 hover:underline">
                    {key}
                  </Link>
                </TableCell>
                <TableCell>{rewards[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
