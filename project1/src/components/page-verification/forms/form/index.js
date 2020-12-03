import s from "./form.module.css";
const Form = () => {
  console.log(s);
  return (
    <div className={s.form__s}>
      <p className={s.login_text}>вход</p>
      <input
        className={`${s.inp__style} ${s.s__login}`}
        type="text"
        placeholder="Логин *"
      />
      <input
        className={`${s.inp__style} ${s.s__reg}`}
        type="text"
        placeholder="Пароль *"
      />
      <div className={s.btn_block_flex}>
        <button className={s.btn__in}>Вход</button>
        <button className={s.btn__reg}>Регистрация</button>
      </div>
    </div>
  );
};
export default Form;
