<template>
  <div class="recommend">
    <div v-for="(item, i) in recommends" :key="i" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 0 0 15px;
    border-bottom: 5px solid #eee;;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
  }
</style>
