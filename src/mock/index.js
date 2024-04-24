import Mock from 'mockjs';
import RECORD from './record';

Mock.setup({
  timeout: 700
});

// 获取报表列表
Mock.mock('/api/record/list', 'post', d => {
  let body = JSON.parse(d.body), list = [...RECORD.list];
  if(body.locationNo) {
    list = list.filter(item => item.locationNo === body.locationNo)
  }

  return {
    code: 200,
    msg: 'success',
    data: {
      records: list,
      current: body.current,
      size: body.size,
      total: list.length
    }
  }
})

// 报表保存
Mock.mock('/api/record/save', 'post', d => {
  return {
    code: 200,
    msg: 'success',
  }
})
