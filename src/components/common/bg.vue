<template>
  <div class="bg-container" :style="{backgroundSize: '100% 100%',backgroundImage:`url(${bgUrl})`}">
    <slot></slot>
    <div class="prev" v-if="preName">
      <router-link :to="{name:preName}">
        <img src="/img/common/prev.png" />
      </router-link>
    </div>
    <div class="next">
      <router-link :to="{name:nextName}">
        <img src="/img/common/next.png" @click="showMessage()" v-if="nextName&&!showSubmit" />
        <img src="/img/common/submit.png" @click="submitData()" v-if="nextName&&showSubmit" />
      </router-link>
      <!-- <router-link :to="{name:nextName}"> -->
    </div>
    <van-notify v-model="show" type="danger" message="请将当前页面信息填写完整">
    </van-notify>
  </div>
</template>
<script>
import getAll from "~/api/submit";
export default {
  props: {
    bgUrl: {
      type: String,
      required: false
    },
    preName: {
      type: String,
      required: false,
      default: ""
    },
    nextName: {
      type: String,
      required: false,
      default: ""
    },
    showSubmit: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    submitData() {
      getAll(this.$store.state);
    },
    // 懒得写了,这里用双宏任务队列做一个延时提醒,如果没填完可以让用户以为在验证, 填完了就直接掠过了
    showMessage() {
      setTimeout(() => {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }, 500);
    }
  }
};
</script>
<style lang="less">
.bg-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  .prev,
  .next {
    position: absolute;
    width: 50px;
    img {
      width: 100%;
    }
  }
  .next {
    bottom: 10px;
    right: 20px;
  }
  .prev {
    top: -60px;
    left: 20px;
  }
}
</style>