import React from "react";
import Card from "../../UI/Card";
import UsersTable from "../../UsersTable";
import CircularIndeterminate from "../../common/customCircularIndeterminate/CustomCircularIndeterminate";

const Home = (props) => {
  const deleteHandler = (user) => {
    const userId = user.id;
    props.onDelete(userId);
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
