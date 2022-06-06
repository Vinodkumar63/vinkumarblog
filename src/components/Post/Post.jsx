import "./Post.css";
import React from "react";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCates">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago </span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        deleniti autem veniam dignissimos magnam. Repudiandae eveniet
        praesentium debitis iste, minus quam assumenda cum nulla explicabo unde,
        modi alias, totam in!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        deleniti autem veniam dignissimos magnam. Repudiandae eveniet
        praesentium debitis iste, minus quam assumenda cum nulla explicabo unde,
        modi alias, totam in!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        deleniti autem veniam dignissimos magnam. Repudiandae eveniet
        praesentium debitis iste, minus quam assumenda cum nulla explicabo unde,
        modi alias, totam in!
      </p>
    </div>
  );
}
