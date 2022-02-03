import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="header-titles">
            <span className="header-title-small"> 
                React and Node
            </span>
            <span className="header-title-large">
                Blog
            </span>
        </div>
        <img
            className="header-img"
            src="https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
        />
    </div>
  ) 
}
