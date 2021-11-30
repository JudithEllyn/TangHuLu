<template>
    <div class="total">
        <div>
            <img class="logo" src="..\..\..\static\images\publish\logo.png">
        </div>

        <!-- 活动类别 -->
        <div class="row">
            <img class="icon" src="..\..\..\static\images\publish\biaoqian.png">
            <picker mode=selector @change="picker" class="input" :value="index"  :range="types">
                <view>{{types[index]}}</view>
            </picker>
        </div>

        <!-- 活动标题 -->
        <div class="row">
            <img class="icon" src="..\..\..\static\images\publish\biaoti.png">
            <input class="input" v-model=upload.name placeholder="请输入活动标题"/>
        </div>

        <!-- 活动时间 -->
        <div class=row>
            <!-- <input class="input" v-model=upload.start_time placeholder="2019年10月12日"> -->
            <img class="icon" src="..\..\..\static\images\publish\shijian.png">
            <div class="timein">
                <div class="begin">
                    <input class="time3" v-model=year1>
                    <p class="time">年</p>
                    <input class="time3" v-model=month1>
                    <p class="time">月</p>
                    <input class="time3" v-model=day1>
                    <p class="time">日</p>
                    <input class="time3" v-model=hour1>
                    <p class="time">:</p>
                    <input class="time3" v-model=minute1>
                </div>
                <p class="begin">至</p>
                <div class="begin">
                    <input class="time3" v-model=year2>
                    <p class="time">年</p>
                    <input class="time3" v-model=month2>
                    <p class="time">月</p>
                    <input class="time3" v-model=day2>
                    <p class="time">日</p>
                    <input class="time3" v-model=hour2>
                    <p class="time">:</p>
                    <input class="time3" v-model=minute2>
                </div>

            </div>

        <!-- <input class="input" v-model=end_time placeholder="2019年10月14日"> -->
            <!-- <img class="icon" src="..\..\..\static\images\publish\shijian.png"> -->
        </div>

        <div class="row">
        <!-- 活动地点 -->
            <img class="icon" src="..\..\..\static\images\publish\didian.png">
            <input class="input" v-model=upload.address placeholder="请输入活动地点"/>

        </div>

        <!-- 参与人数 -->
        <div class="row">
            <img class="icon" src="..\..\..\static\images\publish\quntitezheng.png">
            <input class="input2" v-model=upload.female_wanted placeholder="女生人数"/>
            <input class="input2" v-model=upload.male_wanted placeholder="男生人数"/>
        </div>

        <!-- 联系方式 -->
        <div class="row">
            <img class="icon" src="..\..\..\static\images\publish\weixin.png">
            <input class="input" v-model=upload.publisher placeholder="请输入你的联系方式"/>
        </div>

        <!-- 活动详情 -->
        <div class="row">
            <img class="camera" @click="choose_image" src="..\..\..\static\images\publish\camera.png">
            <td><img class="icon" src="..\..\..\static\images\publish\xiangqing.png"></td>
            <td><textarea class="input1" v-model=upload.description placeholder="请输入活动详情"/></td>
        </div>
        <button class="button_pub" @click="_publish" >确认上传</button>
    </div>
</template>


<script>
export default{
    data(){
            return {
            index: 0,
            types:["选择活动类别","运动","志愿","学习","项目","娱乐","未知"],
            types1:["","SP","VO","ST","PO","EN","UN"],
            imgs:['jjj','kkk'],
            year1:'',
            month1:'',
            day1:'',
            hour1:'',
            minute1:'',

            year2:'',
            month2:'',
            day2:'',
            hour2:'',
            minute2:'',
            

            upload:{
                name: '',
                category:'',
                start_time: '',
                end_time:'',
                address: '',
                male_wanted: '',
                female_wanted:'',
                publisher: '',
                description: '',
            }
        }
        },
    methods: {
        picker(e){
            console.log('radio发生change事件，携带value值为：',e.mp.detail.value)
            this.index = e.mp.detail.value
            this.upload.category = this.types1[this.index]
            console.log('radio发生change事件，携带value值为：',this.types1[this.index])
        },
        choose_image(e){
            console.log("上传图片");
            let i = 0;					// 多图上传时使用到的index
            let upLength;						//图片数组长度
            let imgFilePaths;				//图片的本地临时文件路径列表
            wx.chooseImage({
                count: 3,           //一次最多可以选择的图片张数
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var tempFilePaths = res.tempFilePaths;
                    console.log(tempFilePaths);
                    this.imgs = tempFilePaths;
                    // console.log(this.imgs);
                },
                fail: function () {
                    console.log('fail');
                },
                complete: function () {
                    console.log('complete');
                }
            })
        },
        _publish(e){
            console.log(this.upload.act_numop);
            this.upload.start_time = this.year1 + '-' + this.month1 + '-' + this.day1 + ' ' + this.hour1 + ':' +this.minute1;
            this.upload.end_time = this.year2 + '-' + this.month2 + '-' + this.day2 + ' ' + this.hour2 + ':' +this.minute2;
            wx.uploadFile({
                url: 'https://String',
                filePath:this.upload[0],
                name:'data',
                // header: {}, // 设置请求的 header
                // formData: {}, // HTTP 请求中其他额外的 form data
                success: function(res){
                console.log("success!!")
                },
                fail: function() {
                    console.log("failed");
                },
                complete: function() {
                    console.log("completed")
                }
            }),
            wx.uploadFile({
                        url: 'https://String',
                        filePath:this.imgs[0],
                        name:'image',
                        success: function(res){
                        console.log("img success!!")
                        },
                        fail: function() {
                            console.log("failed");
                        },
                        complete: function() {
                            console.log("completed")
                        }
            })

        },
    },
}
</script>

<style>


.logo{
    margin-top:10px;
    margin-bottom:20px;
    margin-left:160px;
    height:65px;
    width:65px;
}
.row{
    /* height:10px;
    width:10px; */
    display:flex;
    flex-direction: row;
    margin-bottom:20px;

}

.time{
    line-height: 25px;
    font-size: 15px;
    height:25px;
    width:25px;
    text-align: center;
}

.time3{
    border-style:solid;
    border-width:thin;
    border-color: silver;
    border-radius: 5px;;
    font-size: 15px;
    height:25px;
    width:25px;
    text-align: center;
    line-height: 25px;
}


.timein{
    display:flex;
    flex-direction: column;
}

.begin{
    display:flex;
    flex-direction: row;
    margin-bottom:5px;
}

.icon{
    height:60rpx;
    width:60rpx;
    margin-left:100rpx;
    margin-right:20px;
}
.input{
    text-align: center;
    line-height:30px;
    display:flex;
    flex-direction:row;
    border-color:gray;
    border-style:solid;
    border-width:thin;
    float:right;
    font-size:15px;
    margin-right:80rpx;
    width:245px;
    height:30px;
    border-radius:5px;
}

.input1{
    width:245px;
    height:130px;
    border-color:gray;
    border-style:solid;
    border-width:thin;
    float:right;
    font-size:15px;
    margin-right:80rpx;
    margin-bottom:100rpx;
    border-radius:5px;
}


.input2{
    display:flex;
    flex-direction:row;
    border-color:gray;
    border-style:solid;
    border-width:thin;
    float:right;
    font-size:15px;
    margin-right:80rpx;
    width:100px;
    height:30px;
    border-radius:5px;
}


.button_pub{
    color:white;
    text-align: center;
    font-size:13px;
    background-color:red;
    width:200px;
    height:30px;
    margin-left:100px;
}
.camera{
    height:30px;
    width:30px;
    position:absolute;
    z-index:99;
    margin-left:300px;
    margin-top:70px;
}
</style>