<template>
<div>
    <div class="total">
        <div class="one">
            <img class="head" :src="head_p[0]"/>
            <div class="inf">
                <p>Judith</p>
                <p>*****</p>
                <p>5.0</p>
            </div>
        </div>

    </div>


</div>
</template>

<style>
.total{
    background-color: darkgray;

}
.one{
    background-color: white;
    padding-top:10px;
    padding-bottom:10px;
    margin-left:40px;
    margin-top:30px;
}
.head{
    float:left;
    height:50px;
    width:50px;
}
.inf{
    margin-left:70px;
    height:50px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    font-size:15px;
}
</style>

<script>
export default {
    data(){
        return{
            head_p:["/static/images/head1.jpg","/static/images/head1.jpg"]
        }
    }
    
}
</script>>