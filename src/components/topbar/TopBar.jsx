import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = true;
  return (
    <div className="top">
        <div className="top-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
        <i className="top-icon fab fa-pinterest-square"></i>
        </div>
        <div className="top-center">
            <ul className="top-list">
                <li className="top-list-item">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="top-list-item">
                <Link to="/" className="link">ABOUT</Link>
                </li>
                <li className="top-list-item">
                <Link to="/" className="link">CONTACT</Link>
                </li>
                <li className="top-list-item">
                <Link to="/write" className="link">WRITE</Link>
                </li>
                <li className="top-list-item">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="top-right">
            {
                user ? (
                    
                    <img
                    className="top-img"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    />
                ) : (
                    <ul className="top-list">
                        <li className="top-list-item">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="top-list-item">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul> 
                )
            }
            <i className="top-search-icon fas fa-search"></i>
        </div>
    </div>
  );
}
