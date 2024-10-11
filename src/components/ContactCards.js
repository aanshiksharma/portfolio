import React from "react";
import { Link } from "react-router-dom";

import "./contactCard.scss";

function ContactCard({ imgLink, platform, username, url, svg }) {
  if (svg) {
    return (
      <>
        <Link className="card flex" to={url} target="blank">
          <div className="img">
            {svg}
          </div>
          <div className="text-data">
            <h3>{platform}</h3>
            <h5>{username}</h5>
          </div>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link className="card flex" to={url} target="blank">
          <div className="img">
            <img src={imgLink} alt="" />
          </div>
          <div className="text-data">
            <h3>{platform}</h3>
            <h5>{username}</h5>
          </div>
        </Link>
      </>
    );
  }
}

export default ContactCard;
