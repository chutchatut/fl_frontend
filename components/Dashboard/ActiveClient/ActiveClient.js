import React from "react";
import Chart from "../Chart/Chart";
import MyCard from "../MyCard/MyCard";

const ActiveClient = (props) => {
  let data = {};
  if (props.data)
    for (let client of props.data) {
      if (client.status in data) data[client.status] += 1;
      else {
        data[client.status] = 1;
      }
    }

  data = Object.keys(data).map((status, i) => ({
    label: status,
    value: data[status],
    key: i,
  }));

  return (
    <MyCard title="Clients Status">
      <Chart.Pie data={data} config={{ height: 300 }} />
    </MyCard>
  );
};

export default React.memo(ActiveClient, (prevProps, nextProps) => {
  if (!prevProps.data || !nextProps.data) return false;
  if (prevProps.data.lenght !== nextProps.data.lenght) return false;
  for (let i = 0; i < prevProps.data.lenght; ++i) {
    if (prevProps[i].data.token != nextProps[i].data.token) return false;
    if (prevProps[i].data.status != nextProps[i].data.status) return false;
  }
  return true;
});
