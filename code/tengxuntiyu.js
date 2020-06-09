// qq登录  获取到昵称
try {
  jsonpGetJSON(
    // t腾讯体育   有nick
    'https://matchweb.sports.qq.com/vip/status2?upgrade=1&_=1591242722108',
    'callback'
  ).then(function (t) {
    console.log(t)
    let data = {}
    if (Array.isArray(t)) {
      for (let i = 0; i < t.length; i++) {
        try {
          if (t[i].nick) data.nick = t[i].nick
        } catch (error) {}
      }
    } else {
      data.nick = t.nick
    }
    console.log(data)
    let innerHTML = `
    <div class='item'>
      <p class='title'>腾讯体育</p>
      <p>昵称: ${data.nick}</p>
    </div>
  `
    let dom = document.createElement('div')
    dom.innerHTML = innerHTML
    document.getElementById('content').appendChild(dom)
  })
} catch (error) {}

// 微信登录  可以获取道 微信图像  昵称
try {
  jsonpGetJSON(
    // 微信  微信图像地址 昵称 使用decodeURI()进行转码
    'https://video.qq.com/fcgi-bin/check_login',
    'callback'
  ).then(function (t) {
    let data = {}
    data.head = t.head
    data.nick = decodeURI(t.nick)
    let innerHTML = `
    <div class='item'>
      <p class='title'>腾讯体育</p>
      <p>昵称: ${data.nick}</p>
      <p>图像: ${data.head}</p>
    </div>
  `
    let dom = document.createElement('div')
    dom.innerHTML = innerHTML
    document.getElementById('content').appendChild(dom)

    console.log(t)
  })
} catch (error) {}
