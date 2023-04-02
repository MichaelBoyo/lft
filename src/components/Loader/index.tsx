import { FC } from "react";

import Loading from "../../assets/icons/Loading";
import style from "./index.module.scss";

interface ILoader {}
const Loader: FC<ILoader> = () => (
  <Loading className={style.Loader} data-testid="loader" />
);

export default Loader;
