import "./form.css";
const Form = () => {
  return (
    <div className="form__s">
      <p className="login_text">вход</p>
      <input
        className="inp__style s__login"
        type="text"
        placeholder="Логин *"
      />
      <input className="inp__style s__reg" type="text" placeholder="Пароль *" />
      <div className="btn_block_flex">
        <button className="btn__in">Вход</button>
        <button className="btn__reg">Регистрация</button>
      </div>
    </div>
  );
};
export default Form;
