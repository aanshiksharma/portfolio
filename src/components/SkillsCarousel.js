import React from "react";

import "./skillsCarousel.scss";

import Card from "./SkillCard";

function SkillsCarousel() {
  return (
    <>
      <div className="container">
        <div className="wrapper-1">
          <div className="carousel flex">
            <Card imgURL="img/html.svg" displayText={"HTML"} />
            <Card imgURL="img/css.svg" displayText={"CSS"} />
            <Card imgURL="img/javascript.svg" displayText={"JavaScript"} />
            <Card imgURL={"img/react.png"} displayText={"React.js"} />
            <Card imgURL={"img/node.svg"} displayText={"Node.js"} />
            <Card displayText={"Express.js"} />
            <Card imgURL="img/sass.svg" displayText={"Sass/SCSS"} />
            <Card imgURL={"img/mongodb.svg"} displayText={"MongoDB"} />
            <Card imgURL={"img/java.svg"} displayText={"Java"} />
            {/* <Card displayText={"C"} /> */}
            <Card imgURL="img/python.svg" displayText={"Python"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsCarousel;
