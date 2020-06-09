// 网易跟帖  图像  昵称

jsonpGetJSON(
  'https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/users/myInfo?_=1552908845225',
  'callback'
).then(function (t) {
  console.log(t)
  // t.avatar
  //  t.nickname
  let innerHTML = `
  <div class='item'>
    <p class='title'>网易</p>
    <p>用户名: ${t.nickname}</p>
    <p>图像: ${t.avatar}</p>
  </div>
`
  let dom = document.createElement('div')
  dom.innerHTML = innerHTML
  document.getElementById('content').appendChild(dom)
})
