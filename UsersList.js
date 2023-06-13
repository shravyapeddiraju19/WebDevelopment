import "./NewUser.css";
const UsersList = (props) => {
  const deleteUser = (event) => {
    console.log(event.currentTarget.Value);
    console.log(props);
  };
  return (
    <div onCLick={deleteUser} class="userslist">
      <p>{props.username}</p>
      <p>( {props.age} years old )</p>
    </div>
  );
};

export default UsersList;
