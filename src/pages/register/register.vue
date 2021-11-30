<template>
    <div class="glo">
        <div>
            <img class="logo" src="..\..\..\static\images\publish\logo.png">
        </div>

        <div>
            <input class="input" v-model=stu_id placeholder="学号">
            <input class="input" v-model=password placeholder="密码">
            <!-- 选择性别 -->
            <picker mode=selector @change="picker_gender" class="input" :value="index_gender"  :range="types_gender">
                <view>{{types_gender[index_gender]}}</view>
            </picker>
            <!-- 选择年级 -->
            <picker mode=selector @change="picker_grade" class="input" :value="index_grade"  :range="types_grade">
                <view>{{types_grade[index_grade]}}</view>
            </picker>
            <!-- 选择校区 -->
            <picker mode=selector @change="picker_campus" class="input" :value="index_campus"  :range="types_campus">
                <view>{{types_campus[index_campus]}}</view>
            </picker>
            <!-- 选择学院 -->
            <picker mode=selector @change="picker_school" class="input" :value="index_school"  :range="types_school">
                <view>{{types_school[index_school]}}</view>
            </picker>
            <input class="input" v-model=phone_num placeholder="手机号">
        </div>

        <div>
        <button class="btn" @click="upload_data"></button>
        <div class="txt">注册</div>
        </div>

    </div>

</template>>


<script>
export default {
    data(){

        return{
        index_campus: 0,
        types_campus:["选择校区","沙河","西土城","其他"],
        types1_campus:["","SH","XTC","UN"],
        
        index_school: 0,
        types_school:["选择学院","信息与通信工程学院","电子工程学院","计算机学院","网络空间安全学院","人工智能学院","软件学院","自动化学院","经济管理学院","理学院","人文学院","数字媒体与设计艺术学院","马克思主义学院","国际学院","未知"],
        types1_school:["","IC","EE","CS","NS","AI","SF","AU","EM","SC","HU","DM","MA","IN","UN"],
        
        index_gender: 0,
        types_gender:["选择性别","男","女","未知"],
        types1_gender:["","M","F","UN"],

        index_grade: 0,
        types_grade:["选择年级","大一","大二","大三","大四","硕士","博士"],
        types1_grade:["","FR","SO","JU","SE","MA","DO","UN"],
        
        info:{
                stu_id:'',
                user_name:'',
                gender:'',
                grade:'',
                campus:'',
                school:'',
                phone_num:''
            }
        }
},
    methods: {
        picker_campus(e){
            this.index_campus = e.mp.detail.value;
            this.info.campus = this.types1_campus[this.index_campus];
            console.log('radio发生change事件，携带value值为：',this.types1_campus[this.index_campus])
        },
        picker_school(e){
            console.log('radio发生change事件，携带value值为：',e.mp.detail.value);
            this.index_school = e.mp.detail.value;
            this.info.school = this.types1_school[this.index_school];
            console.log('radio发生change事件，携带value值为：',this.types1_school[this.index_school]);
        },

        picker_gender(e){
            this.index_gender = e.mp.detail.value;
            this.info.gender = this.types1_gender[this.index_gender];
            console.log('radio发生change事件，携带value值为：',this.types1_gender[this.index_gender]);
        },

        picker_grade(e){
        this.index_grade = e.mp.detail.value;
        this.info.grade = this.types1_grade[this.index_grade];
        console.log('radio发生change事件，携带value值为：',this.types1_grade[this.index_grade]);
    },

        
        upload_data(e){
            console.log("传数据啦");
            wx.uploadFile({
                url: 'https://String',
                filePath:this.info[0],
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

.input{
    text-align:center;
    background-color:lightpink;
    border-radius:30px;
    width:200px;
    height:40px;
    margin-left:100px;
    margin-top:20px;
    line-height:40px;
    font-size:15px;
}

.btn{
    width:50px;
    height:50px;
    color:white;
    border-radius: 25px;
    background-color: tomato;
    text-align: center;
    margin-top:60px;
    line-height:50px;
    font-size:12px;
}

.txt{
    text-align: center;
    font-size: 15px;
}

</style>


