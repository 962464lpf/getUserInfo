// 图像  用户名  个人主页
jsonpGetJSON('https://c.v.qq.com/vuserinfo?otype=json&', 'callback').then(
  function (t) {
    console.log(t)
    let data = {
      avatar: t.info.avatar,
      nick: t.info.nick,
      homePage: t.info.url,
    }

    let innerHTML = `
  <div class='item'>
    <p class='title'>腾讯视频</p>
    <p>个人主页: ${data.homePage}</p>
    <p>昵称: ${data.nick}</p>
    <p>图像: ${data.avatar}</p>
  </div>
`
    let dom = document.createElement('div')
    dom.innerHTML = innerHTML
    document.getElementById('content').appendChild(dom)

    console.log(data)
  }
)
