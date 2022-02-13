<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <Wrapper :cimgs="banners"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Wrapper from 'components/common/swiper/swiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultidata} from 'network/home'

export default {
  name: "Home",
  components: {
    NavBar,
    Wrapper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
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
  },
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
