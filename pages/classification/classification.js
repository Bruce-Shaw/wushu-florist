// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_height: 0,
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
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})