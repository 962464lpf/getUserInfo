// 用户名  电话

jsonpGetJSON(
  'https://wap.sogou.com/passport?op=get_userinfo&_=1545658098069',
  'callback'
).then(function (t) {
  let data = {
    name: t.nick,
    phone: t.tel,
  }

  let innerHTML = `
  <div class='item'>
    <p class='title'>搜狗网</p>
    <p>用户名: ${data.name}</p>
    <p>电话: ${data.phone}</p>
  </div>
`
  let dom = document.createElement('div')
  dom.innerHTML = innerHTML
  document.getElementById('content').appendChild(dom)

  console.log(data)
})
