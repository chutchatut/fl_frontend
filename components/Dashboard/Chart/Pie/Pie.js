import React from "react";
import { Pie as AntPie } from "@ant-design/charts";

const Pie = (props) => {
  return (
    <AntPie
      label={{
        type: "inner",
        offset: "-50%",
        style: { textAlign: "center" },
        autoRotate: false,
        content: "{value}",
      }}
      data={props.data}
      radius={1}
      innerRadius={0.64}
      colorField="label"
      angleField="value"
      statistic={{
        title: false,
        content: {
          formatter: () => "",
        },
      }}
      {...props.config}
    />
  );
};

export default Pie;
