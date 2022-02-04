import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
      <div className="settings">
          <div className="settings-wrapper">
              <div className="settings-title">
                  <span className="settings-update-title">Update Your Account</span>
                  <span className="settings-delete-title">Delete Account</span>
              </div>
              <form className="settings-form">
                  <label>Profile Picture</label>
                  <div className="settings-pp">
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                      alt="" 
                      className=""/>
                      <label htmlFor="fileInput">
                        <i className="settings-pp-icon far fa-user-circle"></i>
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}}/>
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder="Name"/>
                  <label>Email</label>
                  <input type="email" placeholder="email@gmail.com"/>
                  <label>Password</label>
                  <input type="password"/>
                  <button className="settings-submit">Update</button>
              </form>
          </div>
          <Sidebar/>
      </div>
  )
}
