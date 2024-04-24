import React, { useEffect } from 'react'
import { Divider, Input, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const options = [
    {
        value: 'Country',
        label: 'country',
    },
    {
        value: 'City',
        label: 'city',
    },
];
const BasicLayout = () => {

    return (
        <>
            <div className='title'>Today's Weather</div>
            <Divider />
            <Space.Compact>
                <Select defaultValue="country" options={options} />
                <Input defaultValue="Singa" addonAfter={<SearchOutlined />}/>
            </Space.Compact>
        </>);
}
export default BasicLayout
