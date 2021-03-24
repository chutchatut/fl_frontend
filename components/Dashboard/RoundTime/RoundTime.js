import React from "react";
import Chart from "../Chart/Chart";
import MyCard from "../MyCard/MyCard";

const RoundTime = (props) => {
  const data = [];
  if (props.data) {
    for (let client of props.data) {
      for (let i = 0; i < client.train_info.round_time.length; ++i) {
        data.push({
          round: i.toString(),
          value: Number.parseFloat(client.train_info.round_time[i]),
          instance: client.instance,
          key: `${client.instance}${i}`,
        });
      }
    }
  }
  return (
    <MyCard title="Round Time - seconds" width="calc( 100vw - 370px )">
      <Chart.Line
        data={data}
        config={{
          height: 300,
          xField: "round",
          yField: "value",
          seriesField: "instance",
        }}
      />
    </MyCard>
  );
};

export default RoundTime;
