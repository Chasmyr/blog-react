import "./topbar.css";

export default function TopBar() {
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
                <li className="top-list-item">HOME</li>
                <li className="top-list-item">ABOUT</li>
                <li className="top-list-item">CONTACT</li>
                <li className="top-list-item">WRITE</li>
                <li className="top-list-item">LOGOUT</li>
            </ul>
        </div>
        <div className="top-right">
            <img
                className="top-img"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
            />
            <i className="top-search-icon fas fa-search"></i>
        </div>
    </div>
  );
}
