import "./Single.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
    <SinglePost/>
   <Sidebar/>
    </div>
  )
}
