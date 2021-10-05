import * as React from "react";
import {Card, CardContent} from "@mui/material";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: '50px', width:'90%', display:'block', margin:'auto', marginTop:'50px', marginBottom:"50px" }}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
