import React from "react";
import Card from "../../UI/Card";
import UsersTable from "../../UsersTable";
import CircularIndeterminate from "../../common/customCircularIndeterminate/CustomCircularIndeterminate";
import SimplePopper from '../../common/customSimplePopper/CustomSimplePopper';

const Home = (props) => {
  // const deleteHandler=(data)=>{
  //   console.log(data);
  // };


  return (
    <Card>
      {!props.isLoading && !props.error&& <UsersTable users={props.users} />}
      {props.isLoading && !props.error&&<CircularIndeterminate />}
      {props.error&&<p>Error!</p>}
      <SimplePopper/>
    </Card>
  );
};
export default Home;
