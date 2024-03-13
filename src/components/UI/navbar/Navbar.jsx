import { Link } from "react-router-dom";
import "../../../styles/App.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">О нас</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar