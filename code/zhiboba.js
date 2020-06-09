jsonpGetJSON(
  'https://bbs.zhibo8.cc/user/userinfo?device=pc&_=1584613345023',
  'callback'
).then(function (t) {
  console.log(t)
  let data = {
    username: t.bbs_user_info.username,
    photo: t.bbs_user_info.avatar_big,
    homePage: 'https://home.zhibo8.cc/user.html?platform=pc&uid='.concat(
      t.bbs_user_info.uid
    ),
  }

  let innerHTML = `
  <div class='item'>
    <p class='title'>直播吧</p>
    <p>图像: ${data.photo}</p>
    <p>用户名: ${data.userName}</p>
    <p>个人主页: ${data.homePage}</p>
  </div>
`
  let dom = document.createElement('div')
  dom.innerHTML = innerHTML
  document.getElementById('content').appendChild(dom)
  console.log(data)
})
