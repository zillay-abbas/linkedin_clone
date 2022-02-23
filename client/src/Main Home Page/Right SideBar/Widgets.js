// import { Subtitles } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newArticle = (heading, subtitles) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <i className="fas fa-circle"></i>
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitles}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="widgets">
        <div className="widgets__header">
          <h2>News</h2>
          <i className="far fa-file-alt"></i>
        </div>
        {newArticle("Google updates", "Top news - 9899 readers")}
        {newArticle("Cororna Virus updates", "Top news - 886")}
        {newArticle("Tesla hits new highs", " Cars & auto - 300")}
        {newArticle("Bitcoin breaks $22k", "Crypto - 8080 readers")}
        {newArticle("Is Redux too good?", "Code - 123 readers")}
      </div>
    </>
  );
};

export default Widgets;
