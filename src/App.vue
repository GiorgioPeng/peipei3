<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function() {
         this.isRouterAlive = true
      })
    }
  },
  data() {
    return {
      transitionName: "",
      isRouterAlive: true
    };
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.radius {
  border-radius: 10px;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
/* .slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 30%, 0);
  transform-origin: bottom center;
  position: absolute;
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 20%, 0);
  transform-origin: bottom center;
  position: absolute;
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 20%, 0);
  transform-origin: bottom center;
  position: absolute;
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 20%, 0);
  transform-origin: bottom center;
  position: absolute;
} */
.slide-right-enter {
  opacity: 0;
  /* transform: translate3d(-100%, 20%, 0); */
  transform: translateY(0);
  position: absolute;
}
.slide-right-leave-active {
  opacity: 0;
  /* transform: translate3d(100%, 20%, 0); */
  transform: translateY(30%);
  position: absolute;
}
.slide-left-enter {
  opacity: 0;
  /* transform: translate3d(100%, 20%, 0); */
  transform: translateY(0);
  position: absolute;
}
.slide-left-leave-active {
  opacity: 0;
  /* transform: translate3d(-100%, 20%, 0); */
  transform: translateY(30%);
  position: absolute;
}
</style>
