import React from "react";
import "./../statics/css/responsive2.scss";

const Responsive2 = () => {
  return (
    <div class="wrapper">
      <div class="item1">Start column line 1, span 3 column tracks.</div>
      <div class="item2">
        Start column line 6, span 4 column tracks. 2 row tracks.
      </div>
      <div class="item3">Start row 2 column line 2, span 2 column tracks.</div>
      <div class="item4">
        Start at column line 3, span to the end of the grid (-1).
      </div>
    </div>
  );
};

export default Responsive2;
