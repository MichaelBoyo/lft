import {FC} from "react";
import {
    DashboardActiveUsers,
    DashboardUsers,
    DashboardUsersWithLoans,
    DashboardUsersWithSavings
} from "../../assets";

export interface Stats {
  Icon: FC<{ className: string }>;
  heading: string;
  count: number;
}
export const stats: Required<Stats[]> = [
  {
    Icon: DashboardUsers,
    heading: "USERS",
    count: 2453,
  },
  {
    Icon: DashboardActiveUsers,
    heading: "ACTIVE USERS",
    count: 2453,
  },
  {
    Icon: DashboardUsersWithLoans,
    heading: "USERS WITH LOANS",
    count: 12453,
  },
  {
    Icon: DashboardUsersWithSavings,
    heading: "USERS WITH SAVINGS",
    count: 102453,
  },
];