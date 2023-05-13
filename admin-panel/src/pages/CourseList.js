import React from "react";
import { Table } from "antd";

function CourseList() {
  const dataSource = [
    {
      key: "1",
      title: "ChatGPT",
      category: "Tech",
      date: "12-05-2023 12:45",
    },
    {
      key: "2",
      title: "AI",
      category: "Science",
      date: "11-05-2023 18:36",
    },
    {
      key: "3",
      title: "Coding",
      category: "Tech",
      date: "11-05-2023 10:05",
    },
    {
      key: "4",
      title: "Bitcoin",
      category: "Tech",
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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div>
      <h4>Blog List</h4>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default CourseList;
