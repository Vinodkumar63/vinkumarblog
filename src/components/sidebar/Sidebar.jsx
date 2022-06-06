import "./Sidebar.css";
import React from "react";


export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
         <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-gift-guide.jpg" alt="" /> 
        <p>Hello, I am vinod kumar student of CSE  in CSJMU Kanpur.I  am fronted Web Developer</p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
        <li className="sidebarListItem"> Life </li>
        <li className="sidebarListItem"> Music </li>
        <li className="sidebarListItem"> Style </li>
        <li className="sidebarListItem"> Sport </li>
        <li className="sidebarListItem"> Tech </li>
        <li className="sidebarListItem"> Cinema </li>
    </ul>

    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
        <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
        <i className=" sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
    </div>

    </div>
    </div>
  )
}
