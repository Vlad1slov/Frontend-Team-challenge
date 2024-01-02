import { LuShoppingBasket } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import logo from "../images/Homewell.logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="footer">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="icons">
                    {/* Иконки / кнопки */}
                    <FaRegUser />
                    <LuShoppingBasket />
                </div>

                {/* Поисковая панель */}
                <div className="search-panel">
                    <input type="text" placeholder="Search..." />
                    <button className="search-button">search</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
