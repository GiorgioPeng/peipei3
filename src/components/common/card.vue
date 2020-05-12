<template>
  <div class="card-container">
    <div class="card-main">
      <slot></slot>
    </div>
    <div class="left-top" v-if="leftTop">
      <img style="width:150px" src="/img/02.info/2.png" />
    </div>
    <div class="left-bottom" v-if="leftBottom">
      <img style="width:150px" src="/img/02.info/3.png" />
    </div>
    <div class="right-bottom" v-if="rightBottom">
      <img style="width:150px" src="/img/02.info/1.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rightBottom: {
      type: Boolean,
      default: false
    },
    leftBottom: {
      type: Boolean,
      default: false
    },
    leftTop: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less">
.card-container {
  // width: 80%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 260px;
  width: 260px;
  min-height: 240px;
  padding: 30px 15px;
  border: 1px solid #dad1e2;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 2px #dad1e2;
  .card-main {
    width: 100%;
    text-align: center;
  }
  .left-top {
    position: absolute;
    top: -72px;
    left: -10px;
  }
  .right-bottom {
    position: absolute;
    bottom: -12px;
    right: -10px;
  }
  .left-bottom {
    position: absolute;
    bottom: -90px;
    left: -30px;
  }
}
</style>