<template>
<div class="star" :class="'star-'+size">
   	<span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
</div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
    props: {
       score: Number,
       size: Number
    },
    computed:{
        starClasses(){
            const {score} = this
            const starArr = []
            // 向starArr中添加n个CLASS_ON
            const scoreInteger = Math.floor(score)
            for (let i = 0; i < scoreInteger; i++) {
            starArr.push(CLASS_ON)
            }
            // 向starArr中添加0/1个CLASS_HALF
            if(score*10-scoreInteger*10>=5) {
                starArr.push(CLASS_HALF)
            }
            // 向starArr中添加n个CLASS_OFF
            while(starArr.length<5) {
                starArr.push(CLASS_OFF)
            }
            return starArr
        }
    }
}
</script>

<style>
.star {
  float: left;
  font-size: 0;
}
.star .star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
.star.star-48 .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
}
.star.star-48 .star-item:last-child {
  margin-right: 0;
}
.star.star-36 .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.star.star-36 .star-item:last-child {
  margin-right: 0;
}
.star.star-24 .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
.star.star-24 .star-item:last-child {
  margin-right: 0;
}

</style>