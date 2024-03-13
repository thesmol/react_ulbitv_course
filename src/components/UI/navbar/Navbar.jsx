import { Link } from "react-router-dom";
import "../../../styles/App.css";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

function Navbar() {
    const { setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">

            <div className="navbar__links">
                <Link to="/about">О нас</Link>
                <Link to="/posts">Посты</Link>
            </div>
            <MyButton
                style={{position: 'fixed', right: '35px'}}
                onClick={logout}
            >
                Выйти
            </MyButton>
        </div>
    )
}

export default Navbar