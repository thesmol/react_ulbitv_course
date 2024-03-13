import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

function Login() {
  return (
    <div>
        <h1>Страница для логина</h1>
        <form>
            <MyInput type = 'text' placeholder="логин" />
            <MyInput type = 'pasMyInput' placeholder="пароль" />
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}

export default Login