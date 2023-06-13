import { useState } from "react";
import UsersList from "./UsersList";
import "./NewUser.css";
const NewUser = () => {
  const [enteredUsername, setEntereduserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [usersList, setUsersList] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [invalidAge, setInvalidAge] = useState(false);
  const usernameChangeHandler = (event) => {
    setEntereduserName(event.currentTarget.value);
  };
  const hideOverlay = () => {
    setShowOverlay(false);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.currentTarget.value);
  };
  const saveDate = (event) => {
    event.preventDefault();
    if (!enteredUsername || !enteredAge) {
      setShowOverlay(true);
      return;
    }
    if (parseInt(enteredAge, 10) < 0) {
      setShowOverlay(true);
      setInvalidAge(true);
      return;
    }
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    setUsersList((prevUsersList) => {
      return [userData, ...prevUsersList];
    });

    setEntereduserName("");
    setEnteredAge("");
  };
  return (
    <div>
      <form onSubmit={saveDate}>
        <div className="user-input">
          <p className="label-alignement">Username</p>
          <input
            className="input-box"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            type="text"
          ></input>

          <p className="label-alignement">Age (Years)</p>
          <input
            onChange={ageChangeHandler}
            value={enteredAge}
            type="text"
            className="input-box"
          ></input>

          <button class="add-user-btn" type="submit">
            Add User
          </button>
        </div>
      </form>
      {showOverlay ? (
        <div>
          {invalidAge ? (
            <p>Enter a valid age</p>
          ) : (
            <p>Enter valid username and age</p>
          )}
          <button onClick={hideOverlay}>Okay</button>
        </div>
      ) : (
        ""
      )}
      {usersList &&
        usersList.map((user, index) => (
          <UsersList key={index} username={user.username} age={user.age} />
        ))}
    </div>
  );
};
export default NewUser;
