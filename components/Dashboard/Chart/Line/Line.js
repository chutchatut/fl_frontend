import React from "react";
import { Line as AntLine } from "@ant-design/charts";

const Line = (props) => {
  return <AntLine data={props.data} {...props.config} />;
};

export default Line;
