<template>
  <div class="container">
    <img class="toc_icon" :src="toc_icon">
    <div class="tt">{{title}}</div>
    <div class="slg">{{slogan}}</div>
    <div>
        <button class="login">注册</button>
        <button class="login">登录</button>
    </div>
  </div>
    
  
</template>

<script>
export default {
  data (){
      return {
      userInfo: {},
      title: '糖葫芦',
      slogan: '差你一个就成串儿',
      toc_icon: '/static/images/toc.png'
    }
  },
  methods: {
    authSetUser (e){
        this.userInfo=e.mp.detail.userInfo;
        console.log(this.userInfo);
      }
      }
}

</script>

<style>
.container {
  background-color: #FFF;
}


.toc_icon{
  height: 200rpx; 
  width: 250rpx; 
  margin-top:300rpx; 
  margin-left:250rpx; 
  margin-bottom:40rpx;
}


.tt{
  font-size:60rpx;
  text-align:center;
  margin-bottom:40rpx;
  font-family: STKaiti;
}


.slg{
  font-size:35rpx;
  text-align:center;
  font-family: STXinwei;
}

.login{
  
}

</style>