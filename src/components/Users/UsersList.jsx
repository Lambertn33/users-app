import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

export default function UsersList({ users }) {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user}>
            {user.username} ( {user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
}
