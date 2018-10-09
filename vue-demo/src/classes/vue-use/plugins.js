const Plugin1 = {
  install (Vue, b, c) {
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log('我叫李秋雨')
    }

    console.log('Plugin1 第一个参数:', Vue)
    console.log('Plugin1 第二个参数:', b)
    console.log('Plugin1 第三个参数:', c)
  }
}

function Plugin2 (Vue, b, c) {
  console.log('Plugin2 第一个参数:', Vue)
  console.log('Plugin2 第二个参数:', b)
  console.log('Plugin2 第三个参数:', c)
}

export { Plugin1, Plugin2 }
