import React, { useState, useEffect } from "react";
import { Table, Divider, Input, Select, Space, Alert } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { getList } from "@api/record";

const options = [
  {
    value: "country",
    label: "Country",
  },
  {
    value: "city",
    label: "City",
  },
];

function RecordWithSearch() {
  let [loading, setLoading] = useState(false),
    [search, setSearch] = useState({}),
    [dataSource, setDataSource] = useState([]);
  const columns = [
    { title: "Location", dataIndex: "locationName", width: 80 },
    { title: "Time", dataIndex: "timeSt", width: 100 },
    {
      title: "Operation",
      dataIndex: "operation",
      width: 70,
      align: "center",
    },
  ];
  useEffect(() => {
    // init data
    getData();
  }, []);

  // query data source
  const getData = () => {
    setLoading(true);
    const params = {
      ...search,
    };
    getList(params)
      .then((res) => {
        if (res.code === 200) {
          let d = res.data;
          setDataSource(d.records);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleSearch = (d) => {
    if (d.sendTime)
      d.sendTime = dayjs(d.sendTime).format("YYYY-MM-DD HH:mm:ss");
    if (d.createTime) {
      d.createTime = [
        dayjs(d.createTime[0]).format("YYYY-MM-DD HH:mm:ss"),
        dayjs(d.createTime[1]).format("YYYY-MM-DD HH:mm:ss"),
      ];
    }
    setSearch(d);
    getData();
  };

  return (
    <div className="record-page">
      <div className="title">Today's Weather</div>
      <Divider />
      <Space.Compact>
        <Select defaultValue="country" options={options} />
        <Input defaultValue="Singa" addonAfter={<SearchOutlined />} />
      </Space.Compact>
      <div className="my_alert">
        <Alert message="Not found" type="error" showIcon closable />
      </div>
      <div className='tb_wrapper'>
        <div className="title">Search History</div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          showHeader={false}
          pagination={false}
        ></Table>

      </div>
    </div>
  );
}

export default RecordWithSearch;
