jsonpGetJSON(
  'https://v2.sohu.com/user/info/web?',
  // 'https://pacaio.match.qq.com/qq/userInfo?_=' + d,
  'callback'
).then(function (t) {
  let data = {
    photo: t.avatar,
    userName: t.userName,
  }

  let innerHTML = `
  <div class='item'>
    <p class='title'>搜狐网</p>
    <p>用户名: ${data.userName}</p>
    <p>图像: ${data.avatar}</p>
  </div>
`
  if (data.userName) {
    getInifoData({ type: 'sohu', data: data, html: innerHTML })
  }
})
