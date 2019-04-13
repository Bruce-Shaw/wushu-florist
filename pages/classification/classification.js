const getRandomData = () => {
  const data = [];
  for (let i = 0; i < Math.floor((Math.random(5, 10) + .1) * 10); i++) {
    data.push({
      'id': i,
      'name': '测试数据',
      'price': Math.floor(Math.random(3, 10) * 1000),
    });
  };
  return data;
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_height: 0,
    curMenu: 'all',
    menuList: [{
        'name': '全部',
        'key': 'all'
      },
      {
        'name': '热销',
        'key': 'hot'
      },
      {
        'name': '折扣',
        'key': 'sale'
      },
    ],
    dataList: [{
        'id': 0,
        'name': '99朵玫瑰',
        'price': 700,
      },
      {
        'id': 1,
        'name': '19支红玫瑰礼盒',
        'price': 238,
      },
      {
        'id': 3,
        'name': '33朵红玫瑰黑纱包装',
        'price': 328,
      },
      {
        'id': 4,
        'name': '33朵love礼盒',
        'price': 338,
      },
      {
        'id': 5,
        'name': '99朵白玫瑰',
        'price': 658,
      }, {
        'id': 6,
        'name': '19支红玫瑰礼盒2',
        'price': 238,
      },
      {
        'id': 7,
        'name': '33朵红玫瑰黑纱包装2',
        'price': 328,
      },
      {
        'id': 8,
        'name': '33朵love礼盒2',
        'price': 338,
      },
      {
        'id': 9,
        'name': '99朵白玫瑰2',
        'price': 658,
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changeMenu: function(e) {
    this.setData({
      curMenu: e.currentTarget.dataset['key'],
      dataList: getRandomData(),
    });
  },
})