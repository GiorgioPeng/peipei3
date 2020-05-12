<template>
  <div class="start-container">
    <!-- /background.png -->
    <bg-comp bgUrl="/img/01.start/background.png">
      <router-link :to="{name:'info'}">
        <div class="button">
          <img src="/img/01.start/start.png" />
        </div>
      </router-link>
    </bg-comp>
  </div>
</template>

<script>
import bgComp from "~/components/common/bg.vue";
export default {
  components: {
    bgComp
  }
};
</script>

<style lang="less">
.start-container {
  // position: relative;
  // width: 100vw;
  // height: 100vh;
  // background-image: url("../assets/img/01.start/background.png");
  // background-size: 100% 100%;
  .button {
    position: absolute;
    width: 2.5rem;
    height: 1.7;
    bottom: 18vh;
    left: 50%;
    transform: translateX(-1.16rem);
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>