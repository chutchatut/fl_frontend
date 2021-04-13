import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";
import MyCard from "../MyCard/MyCard";

const STATUS2COLOR = {
  "training not started": "red",
  "training started": "green",
};

const Clients = (props) => {
  const dataSource = props.data
    ? props.data.map((d) => {
        d.key = d.token;
        return d;
      })
    : [];

  const columns = [
    {
      title: "Client name",
      dataIndex: "client name",
      key: "client_name",
    },
    {
      title: "Instance",
      dataIndex: "instance",
      key: "instance",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (e) =>
        e in STATUS2COLOR ? (
          <>
            <span style={{ color: STATUS2COLOR[e] }}>● </span>
            {e}
          </>
        ) : (
          e
        ),
    },
    {
      title: "Return Model",
      dataIndex: "submitted model",
      key: "return_model",
      render: (e) => (e ? <CheckOutlined /> : <CloseOutlined />),
    },
  ];

  return (
    <MyCard title="Clients" width="calc( 100vw - 450px )">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ y: 230 }}
      />
    </MyCard>
  );
};

export default Clients;
