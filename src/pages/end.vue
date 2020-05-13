<template>
  <div class="end-container">
    <bg-comp bgUrl="/img/common/background.png">
      <div class="end-main">
        <div>
          <p>感谢您的作答！</p>
          <p>北京交通大学PEIPEI团队</p>
        </div>
      </div>
    </bg-comp>
  </div>
</template>

<script>
import bgComp from "~/components/common/bg.vue";
export default {
  components: {
    bgComp
  },
  created(){
    console.log(this.$store.state)
  }
};
</script>

<style lang="less">
.end-container {
  .end-main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #999 !important;
    p {
      flex: 0 0 100%;
    }
  }
}
</style>