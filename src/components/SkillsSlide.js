import React from "react";

import "./skillsSlide.scss";

import Card from "./SkillCard";

function SkillsSlide() {
  return (
    <>
      <div className="container">
        <div className="wrapper-1">
          <div className="slide">
            <Card imgURL="img/html.svg" displayText={"HTML"} />
            <Card imgURL="img/css.svg" displayText={"CSS"} />
            <Card imgURL="img/javascript.svg" displayText={"JavaScript"} />
            <Card imgURL="img/react.png" displayText={"React.js"} />
            <Card imgURL="img/node.svg" displayText={"Node.js"} />
            <Card displayText="Express.js" />
            <Card imgURL="img/sass.svg" displayText={"Sass/SCSS"} />
            <Card imgURL="img/mongodb.svg" displayText={"MongoDB"} />
            <Card imgURL="img/java.svg" displayText={"Java"} />
            <Card displayText={"C"} />
            <Card imgURL="img/python.svg" displayText={"Python"} />
          </div>
          {/* The Cards Repeat from here */}
          <div className="slide">
            <Card imgURL="img/html.svg" displayText={"HTML"} />
            <Card imgURL="img/css.svg" displayText={"CSS"} />
            <Card imgURL="img/javascript.svg" displayText={"JavaScript"} />
            <Card imgURL="img/react.png" displayText={"React.js"} />
            <Card imgURL="img/node.svg" displayText={"Node.js"} />
            <Card displayText="Express.js" />
            <Card imgURL="img/sass.svg" displayText={"Sass/SCSS"} />
            <Card imgURL="img/mongodb.svg" displayText={"MongoDB"} />
            <Card imgURL="img/java.svg" displayText={"Java"} />
            <Card displayText={"C"} />
            <Card imgURL="img/python.svg" displayText={"Python"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSlide;
