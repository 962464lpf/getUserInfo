// 生日  姓名  电话   昵称  照片

jsonpGetJSON('http://passport.game.renren.com/user/info', 'callback').then(
  function (t) {
    console.log(t)
    let data = {
      birthday: t.birthday,
      realname: t.realname,
      phone: t.uname,
      nick: t.nick,
      photo: t.headurl,
    }

    let innerHTML = `
    <div class='item'>
      <p class='title'>人人网</p>
      <p>姓名: ${data.realname}</p>
      <p>电话: ${data.phone}</p>
      <p>生日: ${data.birthday}</p>
      <p>昵称: ${data.nick}</p>
      <p>照片: ${data.photo}</p>
    </div>
  `
    let dom = document.createElement('div')
    dom.innerHTML = innerHTML
    document.getElementById('content').appendChild(dom)

    console.log(data)
  }
)
