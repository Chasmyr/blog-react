import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img
            className="sidebar-img"
            src="https://images.pexels.com/photos/3492100/pexels-photo-3492100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro autem repellat aut officiis, impedit culpa voluptatum numquam explicabo illo rerum! 
                Fugiat ipsam ipsa explicabo ea libero, voluptate porro eum id.
            </p>
        </div>
        <div className="sidebar-item">
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">Life</li>
                <li className="sidebar-list-item">Music</li>
                <li className="sidebar-list-item">Style</li>
                <li className="sidebar-list-item">Sport</li>
                <li className="sidebar-list-item">Cinema</li>
                <li className="sidebar-list-item">Tech</li>
            </ul>
        </div>
        <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
            <i className="sidebar-icon fab fa-facebook-square"></i>
            <i className="sidebar-icon fab fa-twitter-square"></i>
            <i className="sidebar-icon fab fa-instagram-square"></i>
            <i className="sidebar-icon fab fa-pinterest-square"></i>
        </div>
        </div>
    </div>
  )
}
