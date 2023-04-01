import style from "./index.module.scss";
import loginPageImage from "../../assets/login-page-image.png"
const Login = () => {
  return (
    <section>
      <div>
        <img
          src={loginPageImage}
          alt="Login Main image"
          role="presentation"
        />
      </div>
    </section>
  );
};

export default Login;
