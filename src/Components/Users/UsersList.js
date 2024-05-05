// UsersList.js
import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UsersList = (props) => {
  // Check if users exist before mapping
  return (
    <Card className={classes.users}>
      <ul>
        {props.users && props.users.length > 0 ? (
          props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old) {user.college}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
