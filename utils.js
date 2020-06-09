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

function u(r, e) {
  r = r || 32
  e = e || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'
  for (var n = '', t = 0; t < r; t++) n += e.charAt(Math.random() * e.length)
  return n
}

function a() {
  return new Date().toISOString().slice(0, 10)
}
function c(r, e) {
  var n = a()
  if (window[n]) window[n][e] = r
  else {
    var t = {}
    ;(t[e] = r), (window[n] = t)
  }
}
