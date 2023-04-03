import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { Logo, loginPageImage } from "../../assets";
import useInput from "../../utils/hooks/useInput";
import isPassword from "../../utils/helperfunctions/isPassword";
import isEmail from "../../utils/helperfunctions/isEmail";
import { Input, PassWordInput } from "../../components";

const Login: FC = () => {
  const [email, setEmail, clearEmail] = useInput("");
  const [password, setPassword, clearPassword] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail(String(email)) || !isPassword(String(password))) {
      if (!isEmail(String(email))) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 3000);
      }
      if (!isPassword(String(password))) {
        setPassWordError(true);
        setTimeout(() => {
          setPassWordError(false);
        }, 3000);
      }
      return;
    }
    navigate("/dashboard/users");
  };
  return (
    <section className={style.LogIn}>
      <div className={style.LogIn__left}>
        <Logo className={style.LogIn__left__logo} />
        <img
          src={loginPageImage}
          className={style.LogIn__left__illustration}
          alt="SignIn illustration"
          role="presentation"
        />
      </div>
      <div className={style.LogIn__right}>
        <h2 className={style.LogIn__right__heading}>Welcome!</h2>
        <p className={style.LogIn__right__details}>Enter details to login.</p>
        <form onSubmit={handleSubmit} className={style.LogIn__right__form}>
          <Input
            {...{
              value: String(email),
              setValue: setEmail,
              clearValue: clearEmail,
              placeholder: "Email",
              type: "text",
              error: emailError,
              errorMessage: "Please enter a valid email",
            }}
          />
          <PassWordInput
            {...{
              value: String(password),
              setValue: setPassword,
              clearValue: clearPassword,
              placeholder: "Password",
              type: "password",
              error: passWordError,
              errorMessage:
                "Please enter a password with an Uppercase, Lowercase, Number and a special character",
            }}
          />
          <span className={style.LogIn__right__form__forgot}>
            FORGOT PASSWORD?
          </span>
          <button className={style.LogIn__right__form__button} type="submit">
            LOG IN
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
