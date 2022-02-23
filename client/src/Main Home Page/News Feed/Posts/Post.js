import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOpt from "../InputOption/InputOpt";
import "./Post.css";

const Post = forwardRef(({ name, description, message, phototUrl }, ref) => {
  return (
    <>
      <div ref={ref} className="post">
        <div className="Post__header">
          <Avatar />
          <div className="post__info">
            <h2> {name} </h2>
            <p> {description} </p>
          </div>
        </div>
        <div className="post__body">
          <p> {message} </p>
          {phototUrl && <img src={phototUrl} alt="post"/> }
        </div>
        {/* We are getting that dynamic data passed in the feed component here */}
        <div className="post__buttons">
          <InputOpt Icon="far fa-thumbs-up" title="Like" />
          <InputOpt Icon="far fa-comment" title="Comment" />
          <InputOpt Icon="fas fa-share-alt" title="Share" />
          <InputOpt Icon="far fa-paper-plane" title="Send" />
        </div>
        {/* We are using InputOpt component for the second time here and we are dynamically adding like comment section in feed section. */}
      </div>
    </>
  );
});

export default Post;
