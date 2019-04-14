// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async(event, context) => {
  console.log('event', event)
  console.log('context', context)
  try {
    return await db.collection('wushu-florist')
      .skip(pageNow)
      .limit(pageSize)
      .get({
        success: function(res) {
          console.log(res)
        }
      })
  } catch (e) {
    console.log(e)
  }
}