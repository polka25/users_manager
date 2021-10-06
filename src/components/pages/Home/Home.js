import React from "react";
import Card from "../../UI/Card";
import UsersTable from "../../UsersTable";
import CircularIndeterminate from "../../common/customCircularIndeterminate/CustomCircularIndeterminate";

const Home = (props) => {
  const deleteHandler = (userName) => {
    console.log("delete Handler from Home");
    console.log(userName);
    props.onDelete(userName);
  };

  return (
    <Card>
      {!props.isLoading && !props.error && (
        <UsersTable users={props.users} onDelete={deleteHandler} />
      )}
      {props.isLoading && !props.error && <CircularIndeterminate />}
      {props.error && <p>Error!</p>}
    </Card>
  );
};
export default Home;
