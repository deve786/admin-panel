import React from 'react'
import { Table } from "antd";
function CareerList() {
    const dataSource = [
        {
          key: "1",
          jobtitle: "Fullstack Developer",
          category: "Category1",
          location: "India",
        },
        {
            key: "2",
            jobtitle: "Data Analyst",
            category: "Category3",
            location: "UK",
          },
          {
            key: "3",
            jobtitle: "Java Developer",
            category: "Category1",
            location: "India",
          },
          {
            key: "4",
            jobtitle: "Cloud Analayst",
            category: "Category2",
            location: "USA",
          },
        
      ];
    
      const columns = [
        {
          title: "Job Title",
          dataIndex: "jobtitle",
          key: "jobtitle",
        },
        {
          title: "Category",
          dataIndex: "category",
          key: "category",
        },
        {
          title: "Location",
          dataIndex: "location",
          key: "location",
        },
      ];
  return (
    <div>
        <h4>Career List</h4>
      <Table dataSource={dataSource} columns={columns} />;
    
    </div>
  )
}

export default CareerList