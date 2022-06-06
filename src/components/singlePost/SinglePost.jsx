import "./SinglePost.css";
import React from "react";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet .
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Vinod Kumar </b>
          </span>
          <span className="singlePostDate">
            Author: <b>1 hour ago </b>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatum sit veritatis iste voluptas? Nemo, harum ea illo aspernatur
          repellat voluptatibus suscipit, reiciendis alias assumenda,
          perferendis beatae corrupti saepe ratione.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatum sit veritatis iste voluptas? Nemo, harum ea illo aspernatur
          repellat voluptatibus suscipit, reiciendis alias assumenda,
          perferendis beatae corrupti saepe ratione.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatum sit veritatis iste voluptas? Nemo, harum ea illo aspernatur
          repellat voluptatibus suscipit, reiciendis alias assumenda,
          perferendis beatae corrupti saepe ratione.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatum sit veritatis iste voluptas? Nemo, harum ea illo aspernatur
          repellat voluptatibus suscipit, reiciendis alias assumenda,
          perferendis beatae corrupti saepe ratione.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatum sit veritatis iste voluptas? Nemo, harum ea illo aspernatur
          repellat voluptatibus suscipit, reiciendis alias assumenda,
          perferendis beatae corrupti saepe ratione.
        </p>
      </div>
    </div>
  );
}
