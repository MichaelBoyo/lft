import { FC } from "react";
import style from "./index.module.scss";
import { Table, UsersStats, Layout } from "../../components";
import {stats, Stats} from "./stats";
interface UserDashboardInterface {}
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
