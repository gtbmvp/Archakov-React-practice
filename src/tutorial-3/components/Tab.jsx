import React from "react";
import "../App.css";

function Tab(props) {
  return (
    <div className={props.active}>
      <input id={props.id} type="checkbox" name="tabs" />
      <label onClick={() => props.handleClick(props.id)} htmlFor={props.id}>
        {props.title}
      </label>
      <div className="tab-content">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Tab;
