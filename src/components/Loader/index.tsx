import { FC } from "react";
import { Loading } from "../../assets";
import style from "./index.module.scss";

interface ILoader {}
const Loader: FC<ILoader> = () => (
  <Loading className={style.Loader} data-testid="loader" />
);

export default Loader;
