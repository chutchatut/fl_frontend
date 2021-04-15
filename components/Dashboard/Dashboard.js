import React from "react";
import { Col, message, Row } from "antd";
import Status from "./Status/Status";
import RoundTime from "./RoundTime/RoundTime";
import ActiveClient from "./ActiveClient/ActiveClient";
import Clients from "./Clients/Clients";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Metrics from "./Metrics/Metrics";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();


const Dashboard = () => {
  const [data, setData] = useState(null);
  const [tick, setTick] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    clearTimeout();
    try {
      const response = await axios.get(
        `http://${publicRuntimeConfig.BACKEND_URL
                ? publicRuntimeConfig.BACKEND_URL
                : "localhost"}:8080/`
      );
      setData(response.data);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setError(null);
      }
    } catch (e) {
      setError("Cannot connect to FL Monitoring Server");
    }
    setTimeout(() => setTick((tick) => !tick), 3000);
  }, [tick]);

  useEffect(() => {
    if (error)
      message.error({
        content: error,
        key: "error",
        duration: 0,
      });
    else {
      message.destroy("error");
    }
  }, [error]);

  return (
    <div style={{ padding: "30px", background: "#ececec", minHeight: "100vh" }}>
      <Row gutter={[16, 16]}>
        <Col flex="auto">
          <Clients data={data && data.clients} />
        </Col>
        <Col flex="370px">
          <ActiveClient data={data && data.clients} />
        </Col>
        {/* ---------------------------------------------------- */}
        <Col flex="300px">
          <Status data={data} />
        </Col>
        <Col flex="auto">
          <RoundTime data={data && data.clients} />
        </Col>
        {/* ---------------------------------------------------- */}
        <Col span={24}>
          <Metrics data={data && data.clients} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
