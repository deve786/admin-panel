import { React, useState } from "react";
import { Input } from "antd";
import ReactQuill from "react-quill";
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons'
const { Dragger } = Upload;


function Service() {
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
      <h4>Add Service</h4>
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
      <Input placeholder="Add Service Title" className='mt-3'/>
      
      
      
      <ReactQuill className='mt-3' theme="snow" value={value} onChange={setValue} />
      
      <input className="btn btn-primary mt-3" type="submit" value="Submit" />
    </div>
  );
}

export default Service;
