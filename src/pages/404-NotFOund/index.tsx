/* eslint-disable */
import { FC } from "react";
import { Link } from "react-router-dom";
import { NotFound } from "../../assets";
import style from "./index.module.scss";
interface INotFound {}
const NotFound404: FC<INotFound> = () => {
  return (
    <div className={style.NotFound}>
      <NotFound className={style.NotFound__illustration} />
      <p className={style.NotFound__details} data-testid="page-not-found">
        Nothing Here!!
      </p>
      <Link to="/dashboard/users" className={style.NotFound__button}>
        Back To Dashboard
      </Link>
    </div>
  );
};

export default NotFound404;
