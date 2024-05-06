import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();

  const AddUserSubmitHandler = (event) => {
    event.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredage = ageInputRef.current.value;
    const enteredcollege = collegeInputRef.current.value;
  

    if (
      enteredname.trim().length === 0 ||
      enteredage.trim().length === 0 ||enteredcollege.trim().length===0
     
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age and college (non-empty values).",
      });
      return;
    }

    if (+enteredage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }

    props.onAddUser(enteredname, enteredage, enteredcollege);
    console.log(enteredname, enteredage,enteredcollege);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserSubmitHandler}>
          {/* In React, htmlFor is used instead of for when creating labels for form
        inputs. This is because for is a reserved keyword in JavaScript, so
        React uses htmlFor to avoid conflicts. */}

          <label htmlFor="username">Username</label>
          <input id="username" type="text" required ref={nameInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" required ref={ageInputRef} />
          <label htmlFor="collegename">College</label>
          <input id="collegename" type="text" required ref={collegeInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
