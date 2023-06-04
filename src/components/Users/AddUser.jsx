import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser({ onAddUser }) {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();

  const handleChangeUsername = (e) => {
    setUser((prevState) => {
        return {...prevState, username: e.target.value}
    });
  }
  const handleChangeAge = (e) => {
    setUser((prevState) => {
        return {...prevState, age: e.target.value}
    });
  }
  const addUserHandler = (e) => {
    e.preventDefault();
    if (!user.username.trim().length || !+user.age.trim().length) {
      setError({
        title: 'Error!!!',
        message: 'Please fill all the fields'
      })
      return;
    }
    if (user.age < 0) {
      setError({
        title: 'Error!!!',
        message: 'age must be greater than 0'
      })
      return;
    }
    onAddUser(user);
    setUser({
        username: "",
        age: ""
    })
  };

  const resetError = () => {
    setError();
  }
  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onResetError = {resetError}/> }
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" value={user.username} onChange={handleChangeUsername}/>
        <label htmlFor="age">age</label>
        <input type="number" id="age" value={user.age} onChange={handleChangeAge}/>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </>
  );
}
