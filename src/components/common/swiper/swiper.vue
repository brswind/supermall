<template>
    <div class="wrap">
      <div class="wrap-item" v-for="(item, i) in cimgs" :key="i" :class="[index === i ? 'active': '']" >
        <img :src="item.image" alt="">
      </div>
      <button @click="goPre" class="btn" id="leftBtn" ></button>
      <button @click="goNext" class="btn" id="rightBtn" ></button>
    </div>
</template>

<script>
export default {
  name: 'Wrapper',
  data() {
    return {
      index: 0,
      timer: ''
    }
  },
  //  通过props向子组件传递数据
  props: ['cimgs'],
  created() {
    this.goAuto()
  },
  methods: {
    goPre() {
      this.clear()
      // console.log(this.index)
      if (this.index >= 1) {
        this.index--
      } else {
        this.index = 3
      }
      this.goAuto()
    },
    goNext() {
      this.clear()
      // console.log(this.index)
      if (this.index < 3) {
        this.index++
      } else {
        this.index = 0
      }
      this.goAuto()
    },
    // 自动跑
    goAuto() {
      this.timer = setInterval(this.goNext, 3000)
    },
    //  关闭自动跑
    clear() {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
  }
.wrap {
  position: relative;
  height: 230px;
  width: 100%;
  margin-bottom: 10px;
  >.active {
    z-index: 10;
  }
  >.btn{
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    z-index: 15;
    opacity: 0;
  }
  >#leftBtn{
    left: 0;
  }
  >#rightBtn{
    right: 0;
  }
 >.wrap-item {
    width: 100%;
    height: 100%;
    position: absolute;
   >img {
     width: 100%;
     height: 100%;
     z-index: 7;
     position: absolute;
   }
 }
}
</style>
