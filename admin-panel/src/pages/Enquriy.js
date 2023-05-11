import React from 'react'
import {Table} from 'antd'

function Enquriy() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          email: 'Mike123@gmail.com',
          message: 'Working Good..',
        },
        {
          key: '2',
          name: 'John',
          email: 'Johnc@gmail.com',
          message: 'Working Goood',
        },
        {
            key: '3',
            name: 'Amal',
            email: 'Amaljohn@gmail.com',
            message: 'Server error',
          },
          {
            key: '4',
            name: 'Khan',
            email: 'Khan@gmail.com',
            message: 'Maintain Properly',
          },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email Addres',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Message',
          dataIndex: 'message',
          key: 'message',
        },
      ];
      
      
  return (
    <div>
        <h4>Enquiries</h4><Table dataSource={dataSource} columns={columns} />;</div>
  )
}

export default Enquriy