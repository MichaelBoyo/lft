import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useGetUserQuery } from "../../utils";
import {navItems, Navigation} from "./navItems";
import style from "./index.module.scss";
import { LeftArrow } from "../../assets";
import { Loader, Layout, UserDetailSummary, UserInfo } from "../../components";

interface UserDetailsInterface {}
const UserDetails: FC<UserDetailsInterface> = () => {
  const { id } = useParams();
  const { data: userData, isSuccess } = useGetUserQuery(id);
  const [data, setData] = useState<any>(
    JSON.parse(localStorage.getItem(`user-${id}`) ?? "{}")
  );
  const [loading, setLoading] = useState<boolean>(
    !!localStorage.getItem(`user-${id}`)
  );
  const [navigation, setNavigation] = useState<Navigation[]>(navItems);
  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem(`user-${id}`);
      localStorage.setItem(`user-${id}`, JSON.stringify(userData));
      setData(userData);
      setLoading(true);
    }
  }, [id, isSuccess, userData]);

  return (
    <Layout className={style.UserDetails}>
      <Link to="/dashboard/users">
        <div className={style.UserDetails__back}>
          <LeftArrow className={style.UserDetails__back__icon} />
          <span
            className={style.UserDetails__back__text}
            data-testid="back-to-users"
          >
            Back to Users
          </span>
        </div>
      </Link>
      <div className={style.UserDetails__container}>
        <h2 className={style.UserDetails__container__heading}>User Details</h2>
        <div className={style.UserDetails__container__buttons}>
          <button
            type="button"
            className={`${style.UserDetails__container__buttons__button} ${style.UserDetails__container__buttons__button__blacklist}`}
          >
            BLACKLIST USER
          </button>
          <button
            type="button"
            className={`${style.UserDetails__container__buttons__button} ${style.UserDetails__container__buttons__button__activate}`}
          >
            ACTIVATE USER
          </button>
        </div>
      </div>

      {loading ? (
        <>
          <UserDetailSummary data={data} {...{ navigation, setNavigation }} />
          {navigation[0].active ? (
            <UserInfo data={data} />
          ) : (
            <div className={style.UserDetails__unavailable}>
              <p className={style.UserDetails__unavailable__text}>
                Currently unavailable
              </p>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default UserDetails;
