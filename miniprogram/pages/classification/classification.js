const { menuConfig } = require('../../utils/config.js');
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_height: 0,
    curMenu: '',
    menuList: menuConfig,
    dataList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData('');
  },
  changeMenu: function (e) {
    const curMenu = e.currentTarget.dataset['key'];
    this.getData(curMenu);
  },
  getData: function (key) {
    const getFunc = {
      success: res => {
        this.setData({
          curMenu: key,
          dataList: res.data,
        });
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    };
    if (key !== '') {
      db.collection('wushu-florist').where({
        type: key
      }).get(getFunc)
    } else {
      db.collection('wushu-florist').get(getFunc)
    }
  },
  jumpDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset['id'],
    })
  }
})