import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../UI/Card";
import UserForm from "../../UserForm";
import {fetchUser, editUser} from '../../../api/api';

const EditUser = (props) => {
  const [editedUser, setEditedUser] = useState("");

  const params = useParams();
  const { userId } = params;
    console.log("props in edit user");
  // console.log(props.users);  usunąć z props users

useEffect(()=>{if(userId){
  fetchUser(userId).then(response=>{
    setEditedUser(response.data);
//     const {user}=response;
//     console.log(user)
// ;    const setEditedUser(user);
  }).catch(error=>{console.error(error);});
};},[userId]);



  // useEffect(() => {
  //   const filteredUser = props.users.filter((user) => user.id.toString() === userId);
  //   console.log(filteredUser);
  //   setEditedUser(filteredUser);
  // }, [props.users, userId]);

  console.log("edited user");
  console.log(editedUser);

  return (
    <Card>
      <UserForm editedUser={editedUser} buttonName="Update user" onEdit={props.onEditUser} />
    </Card>
  );
};
export default EditUser;
