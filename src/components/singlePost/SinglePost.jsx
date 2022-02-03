import "./singlePost.css";

export default function SinglePost() {
  return (
      <div className="single-post">
          <div className="single-post-wrapper">
              <img
              src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="single-post-img"/>
              <h1 className="single-post-title">
                  Lorem ipsum dolor sit amet consectetur
                    <div className="single-post-edit">
                      <i className="single-post-icon far fa-edit"></i>
                      <i className="single-post-icon far fa-trash-alt"></i>
                    </div>
              </h1>
              <div className="single-post-info">
                  <span className="single-post-author">Author : <b>Name</b></span>
                  <span className="single-post-date">1 hour ago</span>
              </div>
              <p className="single-post-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore odio, odit cumque qui adipisci et modi minima minus voluptas, sit iure numquam facilis veniam recusandae ratione beatae, magni omnis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore odio, odit cumque qui adipisci et modi minima minus voluptas, sit iure numquam facilis veniam recusandae ratione beatae, magni omnis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore odio, odit cumque qui adipisci et modi minima minus voluptas, sit iure numquam facilis veniam recusandae ratione beatae, magni omnis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore odio, odit cumque qui adipisci et modi minima minus voluptas, sit iure numquam facilis veniam recusandae ratione beatae, magni omnis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore odio, odit cumque qui adipisci et modi minima minus voluptas, sit iure numquam facilis veniam recusandae ratione beatae, magni omnis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore odio, odit cumque qui adipisci et modi minima minus voluptas, sit iure numquam facilis veniam recusandae ratione beatae, magni omnis?
              </p>
          </div>
      </div>
  )
}
