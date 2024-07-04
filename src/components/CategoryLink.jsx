import React from "react";

const CategoryLink = (props) => {
  return (
    <a href="/" className={props.class}>
      <img className={props.imgClass} src={props.src} alt={props.alt} />
      <p>{props.text}</p>
    </a>
  );
};

export default CategoryLink;
