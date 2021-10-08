import React from "react";
import Card from "../../UI/Card";
import UserForm from "../../UserForm";

const AddUser = (props) => {

  console.log('Props in the adduser components:');
  console.log(props);
  // console.log(props.onAddUser);



  return (
    <Card>
      <UserForm users={props.users} onSubmit={props.onAddUser} buttonName='Add user'/>
    </Card>
  );
};
export default AddUser;
