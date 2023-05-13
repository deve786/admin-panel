import React from "react";
import { Table } from "antd";

function ServiceList() {
  const dataSource = [
    {
      key: "1",
      title: "AI",

      date: "12-05-2023 12:45",
    },
    {
      key: "2",
      title: "Metaverse",

      date: "11-05-2023 18:36",
    },
    {
      key: "3",
      title: "Programming",

      date: "11-05-2023 10:05",
    },
    {
      key: "4",
      title: "Marketing",

      date: "10-05-2023 08:25",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div>
      <h4>Service List</h4>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default ServiceList;
