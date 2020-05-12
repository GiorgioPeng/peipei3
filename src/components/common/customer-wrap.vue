<template>
  <div class="customer-wrap">
    <h2>{{title}}</h2>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less">
.customer-wrap {
  width: 100vw;
  height: 100vh;
  padding: 13vh 0;
  box-sizing: border-box;
  & > h2 {
    font-size: 28px;
    line-height: 40px;
    color: #98a6d9;
    font-weight: 400;
  }
  & > .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-height: 720px) {
      justify-content: space-between;
      transform: scale(0.95);
    }
  }
}
</style>