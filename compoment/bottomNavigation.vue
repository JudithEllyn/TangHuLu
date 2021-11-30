<template>
    <div id="bottomNavigationFullScreen">
      <div class="bottomNavigation_content">
        <div class="bottomNavigation_li_content">
            <div class="bottomNavigation_li_public_content"  @click="publicClick('/index')">
                <navigator url="/pages/index/main?id=1">
                <img :src="imagesUrl.homeIcon" alt="">
                <div :class="imagesUrl.homeIcon.indexOf('click_home') === -1 ? 'no_select' : 'select' ">集市</div>
                </navigator>
            </div>
            <div class="bottomNavigation_li_public_content" @click="publicClick('/index1')">
                <img :src="imagesUrl.rechargeIcon" alt="">
                <div :class="imagesUrl.rechargeIcon.indexOf('click_recharge') === -1 ? 'no_select' : 'select' ">待办</div>
            </div>
            <div class="bottomNavigation_li_public_content" @click="publicClick('/index2')">
                <img :src="imagesUrl.moreIcon" alt="">
                <div :class="imagesUrl.moreIcon.indexOf('click_more') === -1 ? 'no_select' : 'select' ">消息</div>
            </div>
            <div class="bottomNavigation_li_public_content" @click="publicClick('/index3')">
                <img :src="imagesUrl.myIcon" alt="">
                <div :class="imagesUrl.myIcon.indexOf('click_my') === -1 ? 'no_select' : 'select' ">收藏</div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'bottomNavigation',
        data() {
            return {
                imagesUrl: { // 排版图片使用懒加载
                    homeIcon: '/static/icons/market1.png', // 集市
                    rechargeIcon: '/static/icons/to_do1.png', // 待办
                    moreIcon: '/static/icons/message1.png', // 消息
                    myIcon: '/static/icons/collection1.png' // 收藏
                }
            };
        },
        activated() {
            if (typeof this.$route.path === 'string') {
                let val = this.$route.path;
                // let val = this.$route.path.substring(1, this.$route.path.length)
                // console.log(val)
                switch (val) {
                    case '/index':
                        this.imagesUrl.homeIcon = '/static/icons/market2.png'; // 集市
                        this.imagesUrl.rechargeIcon = '/static/icons/to_do1.png'; // 待办
                        this.imagesUrl.moreIcon = '/static/icons/message1.png'; // 消息
                        this.imagesUrl.myIcon = '/static/icons/collection1.png'; // 收藏
                        break;
                    case '/index1':
                        this.imagesUrl.homeIcon = '/static/icons/market1.png'; // 集市
                        this.imagesUrl.rechargeIcon = '/static/icons/to_do2.png'; // 待办
                        this.imagesUrl.moreIcon = '/static/icons/message1.png'; // 消息
                        this.imagesUrl.myIcon = '/static/icons/collection1.png'; // 收藏
                        break;
                    case '/index2':
                        this.imagesUrl.homeIcon = '/static/icons/market1.png'; // 集市
                        this.imagesUrl.rechargeIcon = '/static/icons/to_do1.png'; // 待办
                        this.imagesUrl.moreIcon = '/static/icons/message2.png'; // 消息
                        this.imagesUrl.myIcon = '/static/icons/collection1.png'; // 收藏
                        break;
                    case '/index3':
                        this.imagesUrl.homeIcon = '/static/icons/market1.png'; // 集市
                        this.imagesUrl.rechargeIcon = '/static/icons/to_do1.png'; // 待办
                        this.imagesUrl.moreIcon = '/static/icons/message1.png'; // 消息
                        this.imagesUrl.myIcon = '/static/icons/collection2.png'; // 收藏
                        break;
                }
            } else {
                console.log('不合法参数');
            }
        },
        methods: {
            // 点击切换函数
            clickChang(val) {
                // console.log('点击切换函数' + val)
                if (typeof val === 'string') {
                    switch (val) {
                        case '/index':
                            this.imagesUrl.homeIcon = '/static/icons/market2.png'; // 集市
                            this.imagesUrl.rechargeIcon = '/static/icons/to_do1.png'; // 待办
                            this.imagesUrl.moreIcon = '/static/icons/message1.png'; // 消息
                            this.imagesUrl.myIcon = '/static/icons/collection1.png'; // 收藏
                            this.$router.push({path:'/index',query:{setid:123456}});
                            // console.log(this.imagesUrl)
                            break;
                        case '/index1':
                            this.imagesUrl.homeIcon = '/static/icons/market1.png'; // 集市
                            this.imagesUrl.rechargeIcon = '/static/icons/to_do2.png'; // 待办
                            this.imagesUrl.moreIcon = '/static/icons/message1.png'; // 消息
                            this.imagesUrl.myIcon = '/static/icons/collection1.png'; // 收藏
                            this.$router.push({path: '/index1'});
                            // console.log(this.imagesUrl)
                            break;
                        case '/index2':
                            this.imagesUrl.homeIcon = '/static/icons/market1.png'; // 集市
                            this.imagesUrl.rechargeIcon = '/static/icons/to_do1.png'; // 待办
                            this.imagesUrl.moreIcon = '/static/icons/message2.png'; // 消息
                            this.imagesUrl.myIcon = '/static/icons/collection1.png'; // 收藏
                            this.$router.push({ path: '/index2' });
                            // console.log(this.imagesUrl)
                            break;
                        case '/index3':
                            this.imagesUrl.homeIcon = '/static/icons/market1.png'; // 集市
                            this.imagesUrl.rechargeIcon = '/static/icons/to_do1.png'; // 待办
                            this.imagesUrl.moreIcon = '/static/icons/message1.png'; // 消息
                            this.imagesUrl.myIcon = '/static/icons/collection2.png'; // 收藏
                            this.$router.push({ path: '/index3' });
                            // console.log(this.imagesUrl)
                            break;
                    }
                } else {
                    console.log('不合法的传值');
                }
            },
            // 点击导航栏事件
            publicClick(val) {
                // console.log('点击导航栏事件' + val)
                if (typeof val === 'string') {
                    switch (val) {
                        case '/index':
                            this.clickChang(val);
                            // this.$router.push({ path: '/' })
                            break;
                        case '/index1':
                            this.clickChang(val);
                            // this.$router.push({ path: '/recharge' })
                            break;
                        case '/index2':
                            this.clickChang(val);
                            // this.$router.push({ path: '/more' })
                            break;
                        case '/index3':
                            this.clickChang(val);
                            // this.$router.push({ path: '/my' })
                            break;
                    }
                } else {
                    console.log('不合法的传值');
                }
            }
        }
    };
</script>

<style>
    #bottomNavigationFullScreen {
        position: fixed;
        bottom: 0;
        z-index: 9999;
        height: 60px;
        width: 100%;
        -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        background-color: #fff;
    }
    .bottomNavigation_content {
    }
 
    .bottomNavigation_li_content {
        height: 60px;
        display: flex;
        justify-content:center;
         align-items: center;
        text-align: center;
    }
 
    .bottomNavigation_li_public_content {
        flex: 1;
        height: 45px;
        /* margin-left: 3px;
        background-color: #ccc; */
    }
    .bottomNavigation_li_public_content img {
        height: 48rpx;
        width: 48rpx;
    }
    .bottomNavigation_li_public_content div {
        position: relative;
        bottom: 3px;
    }
 
    .no_select {
        font-size: 12px;
        color: #222;
    }
 
    @keyframes select {
      0% {
        font-size: 12px;
      }
      50% {
        font-size: 13px;
      }
      100% {
        font-size: 14px;
      }
    }
    .select {
        animation: select 0.6s;
        font-size: 14px;
        color: #000102;
    }
</style>
