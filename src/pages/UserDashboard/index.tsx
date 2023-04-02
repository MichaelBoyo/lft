import { FC } from "react";
import DashboardUsers from "../../assets/icons/DashboardUsers";
import DashboardActiveUsers from "../../assets/icons/DashboardActiveUsers";
import DashboardUsersWithLoans from "../../assets/icons/DashboardUsersWithLoans";
import DashboardUsersWithSavings from "../../assets/icons/DashboardUsersWithSavings";
import Layout from "../../components/Layout";
import UsersStats from "../../components/UsersStats";
import style from "./index.module.scss";
import Table from "../../components/Table";
interface UserDashboardInterface {}
interface Stats {
  Icon: FC<{ className: string }>;
  heading: string;
  count: number;
}
const stats: Required<Stats[]> = [
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
const UserDashboard: FC<UserDashboardInterface> = () => (
  <Layout className={style.UserDashboard}>
    <h2 className={style.UserDashboard__heading} data-testid="user-heading">
      Users
    </h2>
    <div className={style.UserDashboard__stats}>
      {stats.map((props: Stats) => (
        <UsersStats {...props} key={`userStats-${props.heading}`} />
      ))}
    </div>
    <Table />
  </Layout>
);

export default UserDashboard;
