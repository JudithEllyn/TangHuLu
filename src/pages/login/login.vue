<template>
    <div class="glo">
        <div>
            <img class="logo" src="..\..\..\static\images\publish\logo.png">
        </div>

        <div>
            <input class="input" v-model=stu_id placeholder="学号">
            <input class="input" v-model=password placeholder="密码">
        </div>

        <div>
        <button class="btn" @click="upload_data"></button>
        <div class="txt">登录</div>
        </div>

    </div>


</template>


<script>

export default {
    data(){
        return{
            info:{
                stu_id:'',
                password:''
            }
        }
    },
    methods: {
        upload_data(e){
            console.log("上传数据登录");
            console.log(this.upload.act_numop);
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
    margin-top:40px;
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