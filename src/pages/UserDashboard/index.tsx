import { FC } from "react";
import Layout from "../../components/Layout";

import style from "./index.module.scss";

interface UserDashboardInterface {}

const UserDashboard: FC<UserDashboardInterface> = () => (
  <Layout className={style.UserDashboard}>
    <h2 className={style.UserDashboard__heading} data-testid="user-heading">
      Users
    </h2>
  </Layout>
);

export default UserDashboard;
