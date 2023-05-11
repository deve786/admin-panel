import {React, useState } from 'react';
import { Select, Space, Input,Button } from 'antd';
import ReactQuill from 'react-quill';

function Blog() {
    const [value, setValue] = useState('');
  return (
    
    <div>
        <h4>Add Blog</h4>
        <Input placeholder="Add Blog Title" />
        <br/><br/>
        <Space >
    
    
    
    <Select
      defaultValue=""
      style={{
        width: 120,
      }}
      allowClear
      options={[
        {
          value: 'tech',
          label: 'Tech',
        },
        {
            value: 'science',
            label: 'Science',
          },
          {
            value: 'industry',
            label: 'Industry',
          },
      ]}
    />
  </Space>
 <br/><br/>
  <ReactQuill theme="snow" value={value} onChange={setValue} />
  <br/>
  <input class="btn btn-primary" type="submit" value="Submit"/>
    </div>
  )
}

export default Blog