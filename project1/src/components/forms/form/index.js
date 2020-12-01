import "./form.css";
const Form = () => {
  return (
    <div>
      <p className="login_text">вход</p>
      <input
        className="inp__style s__login"
        type="text"
        placeholder="Логин *"
      />
      <input className="inp__style s__reg" type="text" placeholder="Пароль *" />
      <button className="btn__in">Вход</button>
      <button className="btn__reg">Регистрация</button>
    </div>
  );
};
export default Form;
