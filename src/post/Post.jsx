import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img
        className="post-img"
        src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        />
        <div className="post-info">
            <div className="post-cats">
                <span className="post-cat">Music</span>
                <span className="post-cat">Life</span>
            </div>
            <span className="post-title">
                Lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className="post-date">1 hour ago</span>
        </div>
        <p className="post-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit unde! Reiciendis eum in pariatur vel odit quae blanditiis, quod fuga commodi adipisci, nulla autem veritatis similique. In, perspiciatis quibusdam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit unde! Reiciendis eum in pariatur vel odit quae blanditiis, quod fuga commodi adipisci, nulla autem veritatis similique. In, perspiciatis quibusdam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit unde! Reiciendis eum in pariatur vel odit quae blanditiis, quod fuga commodi adipisci, nulla autem veritatis similique. In, perspiciatis quibusdam.
        </p>
    </div>
  )
}
