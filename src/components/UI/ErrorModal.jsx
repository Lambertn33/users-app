import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

export default function ErrorModal({ title, message, onResetError }) {
  return (
    <div>
      <div className={classes.backdrop}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>
            <p>{message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={onResetError}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
