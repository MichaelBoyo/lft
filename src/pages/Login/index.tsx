import style from "./index.module.scss";
import loginPageImage from "../../assets/login-page-image.png";

const Login = () => {
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
        </form>
      </div>
    </section>
  );
};

export default Login;
