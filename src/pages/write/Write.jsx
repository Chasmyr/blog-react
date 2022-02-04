import "./write.css";

export default function Write() {
  return (
      <div className="write">
          <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="write-img"/>
          <form className="write-form">
              <div className="write-form-group">
                  <label htmlFor="fileInput">
                    <i className="write-icon fas fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
                  <input type="text" placeholder="Title" id="formTitle" className="write-input" autoFocus={true}/>
              </div>
              <div className="write-form-group">
                  <textarea placeholder="Tell your story..." 
                  type="text"
                  className="write-input write-text"></textarea>
              </div>
              <button className="write-submit">Publish</button>
          </form>
      </div>
  )
}
