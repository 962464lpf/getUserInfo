// 必须手动登录  jd  wangyi
let index = 0
let scriptSrc = [
  'suningyigou',
  '51CTO',
  'chinaunix',
  'cnblogs',
  'cndns', // wu
  'csdn',
  'hupu',
  'itpub',
  'jd', // wu
  'sohu',
  'sougou',
  'tengxuntiyu',
  'tianya',
  'wangyi', // wu
  'youku',
  'zhiboba',
  'zhongguancun',
  'weibo',
  'tengxunshipin',
  'renren',
  'xiaomi',
]
function createScript(type = true) {
  let body = document.documentElement
  let s = document.createElement('script')
  if (type) {
    s.src = `./code/${scriptSrc[index]}.js`
  } else {
    s.src = `./code/${asyncScript[asyncIndex]}.js`
  }
  body.appendChild(s)
}

let interval
interval = setInterval(() => {
  if (index <= scriptSrc.length) {
    createScript()
    index++
  } else {
    clearInterval(interval)
  }
}, 0)
