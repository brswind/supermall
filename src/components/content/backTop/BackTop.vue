<template>
  <div class="back-top">
    <img src="~assets/img/common/back-top.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 50px;
  }

  .back-top img {
    width: 35px;
    height: 35px;
    border-radius:50%;
    border: 2px solid red;
  }
</style>
