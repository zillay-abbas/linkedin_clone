import React, { useState } from "react";
import InputOpt from "./InputOption/InputOpt";
import "./Feed.css";
import Post from "./Posts/Post";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  // In which we are storing the input data of post bar in the top in feed portion(middle portion).
  const [posts, setPosts] = useState([]);
  // Array in which all the posts would be stored.
  const sendPost = (e) => {
    e.preventDefault();
    setInput("");
  };
  // To prevent refresh on submit(hitting enter).
  return (
    <>
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            {/* <i className="fas fa-pen"></i> */}
            <form>
              <input type="text" onChange={(e) => setInput(e.target.value)} />
              {/* Input in which we will write what we are supposed to post and will also have photo video options below */}
              <button
                onClick={sendPost}
                type="submit"
                title="after inputing press enter"
              >
                {/* On submitting the button(hitting enter) our post will be live and all of our friends can see our post */}
                Send
              </button>
              {/* If the type is submit then on pressing enter it will submit the form so that is why we have displayed none to the button and user will input what he want's to and will press enter  */}
            </form>
          </div>
          <div className="feed__inputOptions">
            <InputOpt title="Photo" Icon="fas fa-image" color="#7085F9" />
            <InputOpt title="Video" Icon="fas fa-video" color="#E7A33E" />
            <InputOpt title="Event" Icon="far fa-calendar" color="#C0CBCD" />
            <InputOpt
              title="Write Article"
              Icon="fas fa-newspaper"
              color="#7FC15E"
            />
            {/* we are dynamically adding icons and data in the bar below the search bar in the feed section */}
          </div>
        </div>
        {/* Posts */}
        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, phtotUrl } }) => {
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                phtotUrl={phtotUrl}
              />;
            }
          )}
        </FlipMove>
        {/* This map method is to display the posts stored in the post array with a unique id and data which will be then stored on database */}

        {/* key is important because there will be thousand of posts in the post array but react will only render that very post which is newly added with the help of that unique key and without this key react will have to render out whole array with thousand of posts.*/}
        <Post
          name="Get Me"
          description="Hello"
          message="Helloo World"
          phtotUrl="img/logo.jpg"
        />
        <Post
          name="Get Me"
          description="Hello"
          message="Helloo World"
          phtotUrl="img/logo.jpg"
        />
        <Post
          name="Get Me"
          description="Hello"
          message="Helloo World"
          phtotUrl="img/logo.jpg"
        />
        <Post
          name="Get Me"
          description="Hello"
          message="Helloo World"
          phtotUrl="img/logo.jpg"
        />
      </div>
    </>
  );
}

export default Feed;

// The purpose of redux in this app is that when ever you have nested components and you want to access the user in many different places rather than passing as a prop in the individual components we have to do prop drilling which is a problem because it makes app hard to maintain and hard to build on so we use redux to manage the flow of data inside of an app.
