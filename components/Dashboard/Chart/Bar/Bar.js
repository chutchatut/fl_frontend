import React from "react";
import { Column } from "@ant-design/charts";

const Bar = (props) => {
  return (
    <Column data={props.data} xField="label" yField="value" {...props.config} />
  );
};

export default Bar;
