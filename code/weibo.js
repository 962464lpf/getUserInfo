jsonpGetJSON(
  'http://api.weibo.com/2/users/show_brief.json?source=2835469272',
  'callback'
).then(function (t) {
  let data = {
    weiboHomePage: 'https://weibo.com/u/' + t.data.id,
    userName: t.data.screen_name,
    photo: t.data.profile_image_url,
  }
  console.log(data)

  let innerHTML = `
  <div class='item'>
    <p class='title'>新浪微博</p>
    <p>个人主页: ${data.weiboHomePage}</p>
    <p>图像: ${data.photo}</p>
    <p>用户名: ${data.userName}</p>
  </div>
`
  let dom = document.createElement('div')
  dom.innerHTML = innerHTML
  document.getElementById('content').appendChild(dom)
})
