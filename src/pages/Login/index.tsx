import { FC, FormEvent, useState } from "react";
import style from "./index.module.scss";
import loginPageImage from "../../assets/login-page-image.png";
import useInput from "../../utils/hooks/useInput";
import { useNavigate } from "react-router-dom";
import isPassword from "../../utils/helperfunctions/isPassword";
import isEmail from "../../utils/helperfunctions/isEmail";
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
    <section>
      <div>
        <img src={loginPageImage} alt="Login Main image" role="presentation" />
      </div>
      <div>
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <form>
          <input placeholder="password" type="email" />
          <input placeholder="password" type="password" />
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
