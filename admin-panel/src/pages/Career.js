import React, { useState } from 'react'
import { Select, Space, Input } from "antd";
import ReactQuill from "react-quill";

function Career() {
    const [value, setValue] = useState("");
  return (
    <div>
        <h4>Add Career</h4>                                                     
        <Input placeholder="Add Job Title" />
        <Space className='mt-3' >
        <Select 
          defaultValue="Category"
          label=""
          style={{
            width: 120,
          }}
          allowClear
          options={[
            {
              value: "cat1",
              label: "Category1",
            },
            {
              value: "cat1",
              label: "Category2",
            },
            {
              value: "cat1",
              label: "Category3",
            },
          ]}
        />
      </Space><br/>
      <Space className='mt-3'>
        <Select
          defaultValue="Location"
          label=""
          style={{
            width: 120,
          }}
          allowClear
          options={[
            {
              value: "india",
              label: "India",
            },
            {
              value: "usa",
              label: "USA",
            },
            {
              value: "uk",
              label: "UK",
            },
          ]}
        />
      </Space>
      <ReactQuill className='mt-3' theme="snow" value={value} onChange={setValue} />
      
      <input className="btn btn-primary mt-3" type="submit" value="Submit" />
    </div>
  )
}

export default Career