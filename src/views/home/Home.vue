<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll
      :probeType='3'
      :pullUpLoad='true'
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore">
      <Wrapper :cimgs="banners" />
      <RecommendView :recommends="recommends" />
      <TabControl @tabClick="tabClick" :titles="titles" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import RecommendView from "./childComps/RecommendView";

import NavBar from "components/common/navbar/NavBar";
import Wrapper from "components/common/swiper/swiper";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import { debounce } from 'common/utils'

export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    Wrapper,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0
    };
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3、监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,200)

    this.$bus.$on('loadImg', () => {
      // console.log('................')
      refresh()
    })
  },
  methods: {
    backClick() {
      /**
       * 1、this.$refs.scroll 获取scroll组件对象，
       * 2、this.$refs.scroll.newScrollTo 获取scroll组件对象的方法newScrollTo
       */
      this.$refs.scroll.newScrollTo(0, 0,500)
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000 ? true : false
    },
    loadMore(){
      // console.log ('ddd')
      this.getHomeGoods(this.currentType)
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then(result => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
          // console.log(this.banners)
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(result => {
          const resList = result.data.list;
          // console.log(resList);
          this.goods[type].list.push(...resList);
          this.goods[type].page += 1;

          // 结束加载更多，便于下次再加载
          this.$refs.scroll.finishPullUp()
        })
        .catch(err => {
          console.log(err);
        });
    },

    /**
     * 事件监听相关的方法
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    },
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.content {
  height: calc(100% - 49px);
  overflow: hidden;
  /* margin-top: 44px; */
}

</style>
