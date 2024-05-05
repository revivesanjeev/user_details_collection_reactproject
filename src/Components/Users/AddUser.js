import { React, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState();

  const UsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length === 0){
        setError({
            title:'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        });
        return ;
    }

    if(+enteredAge<1){
            setError({
              title: "Invalid age",
              message: "Please enter a valid age(>0).",
            });
        return ;
     } 

   props.onAddUser(enteredUsername, enteredAge);
   console.log(enteredUsername,enteredAge);
     setEnteredUsername('');
     setEnteredAge('');
  };


   const errorHandler=()=>{
        setError(null);
   };



  return (
    <div>
        {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={AddUserSubmitHandler}>
          {/* In React, htmlFor is used instead of for when creating labels for form
        inputs. This is because for is a reserved keyword in JavaScript, so
        React uses htmlFor to avoid conflicts. */}

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={UsernameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
