import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import React from "react";

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
