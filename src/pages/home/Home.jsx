import "./home.css";
import Posts from "../../post/Posts";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}
