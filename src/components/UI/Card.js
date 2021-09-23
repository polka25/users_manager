import * as React from "react";
import {Card, CardContent} from "@mui/material";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
