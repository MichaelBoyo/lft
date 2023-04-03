import { FC } from "react";

import { Layout } from "../../components";

import style from "./index.module.scss";

interface ComingSoonInterface {}
const Unavailable: FC<ComingSoonInterface> = () => (
  <Layout className={style.Unavailable}>
    <div className={style.Unavailable__container}>
      <h1
        className={style.Unavailable__container__heading}
        data-testid="page-unavailable"
      >
        Sorry We are still working on this page
      </h1>
      <p className={style.Unavailable__container__text}>
        would be available soon!!
      </p>
    </div>
  </Layout>
);

export default Unavailable;
