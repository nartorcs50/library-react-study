import React from "react";

const Highlight = ({icon, title, para}) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <div className="highlight__subtitle">{title}</div>
      <div className="highlight__para">
        {para}
      </div>
    </div>
  );
};

export default Highlight;
