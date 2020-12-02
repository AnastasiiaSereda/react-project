import Form from "./form";
import Imgs from "./imgs";
import "./style.css";
import "./320m.css";
import "./768m.css";
const Login = () => {
  return (
    <div className="main__log">
      <div className="TopBar">
        <div className="logoNav"></div>
        <div className="in_nav_btn">
          <p className="activ__btn">Вход</p>{" "}
          <p className="none_active_btn">Регистрация</p>
        </div>
      </div>
      <Form />
      <Imgs />
    </div>
  );
};
export default Login;
