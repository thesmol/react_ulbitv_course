import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

function Login() {
    const { setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className="App">
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder="логин" />
                <MyInput type='pasMyInput' placeholder="пароль" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login