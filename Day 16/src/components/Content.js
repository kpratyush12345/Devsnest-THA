import React from "react";

const Content = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <img className="img" src={props.image} alt="MemeImage" />
        <h1 className="head">Hear about the new restaurant called Karma?</h1>
        <p className="para">
          &nbsp;&nbsp;There’s no menu: You get what you deserve.
        </p>
      </div>
    </div>
  );
};

export default Content;
