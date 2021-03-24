import { Card } from "antd";
import React from "react";

const MyCard = (props) => {
  return (
    <Card
      style={{
        height: props.height ? props.height : "100%",
        width: props.width ? props.width : "100%",
      }}
    >
      <p style={{color: '#888'}}>{props.title}</p>
      {props.children}
    </Card>
  );
};

export default MyCard;
