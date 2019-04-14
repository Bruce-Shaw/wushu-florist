const { classificationConfig } = require('../../utils/config.js');

const filterData = (curMenu, dataList) => {
  const result = dataList.filter(item => {
    return item.key.some(it => it === curMenu);
  });
  return result;
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_height: 0,
    curMenu: 'all',
    menuList: classificationConfig.menuList,
    dataList: classificationConfig.dataList,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changeMenu: function(e) {
    const curMenu = e.currentTarget.dataset['key'];
    this.setData({
      curMenu,
      dataList: filterData(curMenu, classificationConfig.dataList),
    });
  },
})