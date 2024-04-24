import React from 'react';
import RecordWithSearch from "@views/RecordWithSearch";
import bg from "@assets/bg-light.png";
import './BasicLayout.less'


const BasicLayout = () => {
  return (<div className='basicLayout'>
    <img src={bg} className="my_bg" />
    <div className='content'>
      <RecordWithSearch />
    </div>
  </div>);
}
export default BasicLayout
