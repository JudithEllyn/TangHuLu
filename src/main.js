import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这部分相当于原生小程序的 app.json
  config: {
    pages: [
      'pages/index/main',
      'pages/publish/main',
      'pages/register/main',
      'pages/login/main'

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一页',
      navigationBarTextStyle: 'black'
    }
  }
}
