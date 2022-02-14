<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <Wrapper :cimgs="banners"/>
    <RecommendView :recommends="recommends"/>
    <TabControl :titles="titles" class="tab-control"/>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>
    <h2>多个ul元素 快速增加</h2>

  </div>
</template>

<script>
import RecommendView from './childComps/RecommendView'

import NavBar from 'components/common/navbar/NavBar'
import Wrapper from 'components/common/swiper/swiper'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home'

export default {
  name: "Home",
  components: {
    RecommendView,
    NavBar,
    Wrapper,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      goods: {
        'pop': {page: 0, list:[]},
        'news': {page: 0, list:[]},
        'sell': {page: 0, list:[]}
      }

    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then((result) => {
      this.banners = result.data.banner.list
      this.recommends = result.data.recommend.list
      // console.log(this.banners)
    }).catch((err) => {
      console.log(err)
    });

    // 2. 请求商品数据
    getHomeGoods('pop',1).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  },
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
