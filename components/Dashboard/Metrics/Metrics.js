import { Select, Space } from "antd";
import React from "react";
import { useState } from "react";
import Chart from "../Chart/Chart";
import MyCard from "../MyCard/MyCard";

const POSTFIX = {
  val_time: "seconds",
};

const Metrics = (props) => {
  const [selectedMetric, setSelectedMetric] = useState("");

  const data = [];
  const metrics = new Set();
  if (props.data) {
    for (let client of props.data) {
      for (let i = 0; i < client.train_info.metrics.length; ++i) {
        for (let metric of Object.keys(client.train_info.metrics[i])) {
          metrics.add(metric);
          if (selectedMetric === metric)
            data.push({
              round: i.toString(),
              value: Number.parseFloat(client.train_info.metrics[i][metric]),
              metric: `${client.instance}_${metric}`,
              key: `${client.instance}${metric}${i}`,
            });
        }
      }
    }
  }

  return (
    <MyCard title="Metrics">
      <Space direction="vertical" style={{ width: "100%" }}>
        <Select
          onChange={(e) => setSelectedMetric(e)}
          style={{ width: "200px" }}
        >
          {Array.from(metrics).map((metric) => (
            <Select.Option value={metric}>
              {metric in POSTFIX ? `${metric} - ${POSTFIX[metric]}` : metric}
            </Select.Option>
          ))}
        </Select>
        <Chart.Line
          data={data}
          config={{
            height: 300,
            xField: "round",
            yField: "value",
            seriesField: "metric",
          }}
        />
      </Space>
    </MyCard>
  );
};

export default Metrics;
