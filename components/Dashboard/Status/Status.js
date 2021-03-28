import { Descriptions } from "antd";
import React from "react";
import MyCard from "../MyCard/MyCard";

const Uptime = (props) => {
  return (
    <MyCard title="Status">
      <Descriptions style={{ height: "150px" }}>
        <Descriptions.Item label="Server status" span={24}>
          {props.data && props.data.server && props.data.server.status}
        </Descriptions.Item>
        <Descriptions.Item label="Registered clients" span={24}>
          {props.data &&
            props.data.server &&
            props.data.server["Registered clients"]}
        </Descriptions.Item>
        {props.data &&
          props.data.server &&
          props.data.server.status !== "training not started" && (
            <>
              <Descriptions.Item label="Current round" span={24}>
                {props.data.server["current round"]}/
                {props.data.server["max round"]}
              </Descriptions.Item>
              <Descriptions.Item label="Clients submitted models" span={24}>
                {props.data.server["Total number of clients submitted models"]}/
                {props.data.server["Registered clients"]}
              </Descriptions.Item>
            </>
          )}
      </Descriptions>
    </MyCard>
  );
};

export default Uptime;
