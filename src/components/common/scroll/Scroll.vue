<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scroll: null,
      message: "scroll组件信息"
    };
  },
  mounted() {
    // 1、创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    // 2、监听滚动位置
    if(this.probeType === 2 || this.probeType === 3)
    {
      this.scroll.on("scroll", position => {
        // console.log(position)
        this.$emit("scroll", position);
      });
    }

    // 3、监听下拉底部
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        // console.log('上拉监听')
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    newScrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh()
      // console.log('................')
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
};
</script>

<style scoped>
</style>
