// 微信登录  可以获取道 微信图像  昵称
jsonpGetJSON(
  // 微信  微信图像地址 昵称 使用decodeURI()进行转码
  'https://video.qq.com/fcgi-bin/check_login',
  'callback'
).then(function (t) {
  if (t.head) {
    let data = {}
    data.photo = t.head
    data.nickname = decodeURI(t.nick)
    let innerHTML = `
    <div class='item'>
      <p class='title'>腾讯体育</p>
      <p>昵称: ${data.nickname}</p>
      <p>图像: ${data.photo}</p>
    </div>
  `
    if (data.nickname) {
      getInifoData({ type: 'tengxuntiyu', data: data, html: innerHTML })
    }
  } else {
    // qq登录  获取到昵称
    jsonpGetJSON(
      // t腾讯体育   有nick
      'https://matchweb.sports.qq.com/vip/status2?upgrade=1&_=1591242722108',
      'callback'
    ).then(function (t) {
      let data = {}
      if (Array.isArray(t)) {
        for (let i = 0; i < t.length; i++) {
          try {
            if (t[i].nick) data.nickname = t[i].nick
          } catch (error) {}
        }
      } else {
        data.nickname = t.nick
      }
      let innerHTML = `
  <div class='item'>
    <p class='title'>腾讯体育</p>
    <p>昵称: ${data.nickName}</p>
  </div>
`
      if (data.nickname) {
        getInifoData({ type: 'tengxuntiyu', data: data, html: innerHTML })
      }
    })
  }
})
