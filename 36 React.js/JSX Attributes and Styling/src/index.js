import React from "react";
import ReactDOM from "react-dom";

var img = "https://picsum.photos/200/300/";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={img + "?grayscale"} alt="tower" />
      <img className="random-img" src="https://picsum.photos/id/237/200/300" />
      <img
        className="random-img"
        src="https://picsum.photos/seed/picsum/200/300"
      />
      <img
        className="random-img"
        src="https://picsum.photos/200/300?grayscale"
      />
    </div>
  </div>,
  document.getElementById("root")
);
