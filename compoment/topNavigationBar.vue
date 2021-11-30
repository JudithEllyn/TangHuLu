<template>
    <div class="topNavigationBar">
       <div class="sortMenu clearfix">
        <ul class="sortMenu-ul" >
          <li class="cell" v-for="item in sortMenu" v-bind:key="item.id">
            <a href="">{{item.sortname}}</a>
          </li>
        </ul>
        <div class="all" v-on:click="subitemsExpanded=!subitemsExpanded">
          <img src="../../static/icons/jiahao.png" alt="">
        </div>
        <div v-show="subitemsExpanded" class="pull-down">
          <ul class="pull-down-sort">
            <li class="" v-for="pulldow in sortName" v-bind:key="pulldow.id">
              <a href="">{{pulldow.sortname}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script> 
export default {
    name: 'topNavigationBar',
    data () {
        return {
            sortMenu: [
                { sortname: '自习' },
                { sortname: '项目' },
                { sortname: '运动' },
                { sortname: '活动' },
                { sortname: '志愿' },
                { sortname: '吃饭' },
                { sortname: '电影' },
                { sortname: '1' },
                { sortname: '2' },
                { sortname: '3' }
            ],
            sortName: [
                { sortname: '4' },
                { sortname: '5' },
                { sortname: '6' },
                { sortname: '7' },
                { sortname: '8' },
                { sortname: '9' },
                { sortname: '10' },
                { sortname: '11' },
                { sortname: '12' },
                { sortname: '13' },
                { sortname: '14' },
                { sortname: '15' },
                { sortname: '16' }
            ],
            subitemsExpanded: false
        };
    }
};
</script>  

<style>
/* 分类菜单*/
.sortMenu{
  width: 100%; 
  background-color:#fff; 
  overflow-x: scroll; 
  -webkit-overflow-x: scroll;
}
.sortMenu::-webkit-scrollbar{ 
  width: 0; 
  height: 0;   
  background-color: #fff;  
}
.sortMenu-ul { 
  min-width:500px; 
  display: flex;
  justify-content: flex-start;
}
.sortMenu .cell{ 
  display: inline-block; 
  font-size: 14px;
  margin: 0px 1em;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
      text-overflow: ellipsis;
    word-break: keep-all;
}
.sortMenu .cell.special a{
  color: #ff474c;
}
.sortMenu .cell.special:before {
  content: '';
  height: 2px;
  width: 100%;
  background: #ff474c;
  position: absolute;
  bottom: 0px;
}
.sortMenu .all{
  right: 0;
  top: 77px;
  height: 20px;
  width: 20px;
  position: absolute;
  background: #fff;
  z-index: 10;
  display: flex;
  justify-content:center;
  align-items:center;
}
.sortMenu .all:before{
  content: '';
  height: 20px;
  width: 20px;
  position: absolute;
  left: 0px;
}
.sortMenu .all img{
  right: 0;
  display: block;
  height: 20px;
  width: 20px;
}
.sortMenu .pull-down{
  position: absolute;
  top: 100px;
  left: 9px;
  height:auto;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-top: 1px solid #f2f2f2;
}
.pull-down-sort{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row
}
.pull-down-sort li{
  float: left;
  padding: .1rem
}
.pull-down-sort li a:hover{
  color: #ff474c;
}
</style>
