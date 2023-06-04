import React from "react";

import classes from "./Button.module.css";

export default function Button({ children, type, onClick }) {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
