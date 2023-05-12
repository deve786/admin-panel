import { React, useState } from "react";
import { Select, Space, Input } from "antd";
import ReactQuill from "react-quill";
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons'
const { Dragger } = Upload;


function Blog() {
  const [value, setValue] = useState("");
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <div>
      <h4>Add Blog</h4>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      <Input placeholder="Add Blog Title" className='mt-3'/>
      
      <Space className='mt-3'>
        <Select
          defaultValue="Category"
          label=""
          style={{
            width: 120,
          }}
          allowClear
          options={[
            {
              value: "tech",
              label: "Tech",
            },
            {
              value: "science",
              label: "Science",
            },
            {
              value: "industry",
              label: "Industry",
            },
          ]}
        />
      </Space>
      
      <ReactQuill className='mt-3' theme="snow" value={value} onChange={setValue} />
      
      <input className="btn btn-primary mt-3" type="submit" value="Submit" />
    </div>
  );
}

export default Blog;
