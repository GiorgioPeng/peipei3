<template>
  <div class="hobby-detail-container">
    <bg-comp bgUrl="/img/06.hobby/bg.png" preName="hobby">
      <customer-wrap :title="title">
        <div class="choice-wrap">
          <ul class="hobby-detail-main">
            <li
              class="choice-item"
              v-for="(item,index) of choiceArr"
              :key="index"
              @click="choiceItem(index)"
            >
              <img :src="item.url" />
              <p v-if="type != 'read'">{{item.name}}</p>
              <div :class="[$store.state[type][index] ? 'mask' :'']"></div>
            </li>
          </ul>
        </div>
      </customer-wrap>
    </bg-comp>
  </div>
</template>

<script>
import { hobitTitleMap, hobitDetailConfig } from "~/config/hobby.js";
import bgComp from "~/components/common/bg.vue";
import customerWrap from "~/components/common/customer-wrap.vue";
export default {
  components: {
    bgComp,
    customerWrap
  },
  data: () => ({
    title: "",
    choiceArr: [],
    type: "",
    checkedArr: []
  }),
  created() {
    this.init();
  },
  methods: {
    choiceItem(index) {
      event.currentTarget.getElementsByTagName("div")[0].classList;
    //   console.log(classList[0])
    if(!event.currentTarget.getElementsByTagName("div")[0].classList.contains('mask')){
        event.currentTarget.getElementsByTagName("div")[0].classList.add('mask')
    }else{
        event.currentTarget.getElementsByTagName("div")[0].classList.remove("mask")
    }
      let b = !!this.$store.state[this.type][index];
      this.$store.state[this.type][index] = !b;
    },
    init() {
      let type = this.$route.query.type;
      this.type = type;
      this.title = hobitTitleMap[type];
      this.choiceArr = hobitDetailConfig[type];
      this.checkedArr = this.$store.state[this.type];
      console.log(this.$store.state[this.type]);
    }
  },
  updated() {
    this.init();
  }
  //   computed: {
  //     checkedArr() {
  //       return this.$store.state[this.type];
  //     }
  //   }
};
</script>

<style lang="less">
.hobby-detail-container {
  .choice-wrap {
    padding-top: 10px;
    width: 100%;
    height: 100%;
    .hobby-detail-main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 60px;
      box-sizing: border-box;
      margin-top: -10px;
      width:100%;
      li {
        position: relative;
        flex: 0 0 45%;
        width: 50%;
        margin-bottom: 10px;
        padding-top: 5px;
        box-sizing: border-box;
        border: 1px solid #f5f7fa;
        border-radius: 10px;
        box-shadow: 2px 2px 20px 2px #d2d2de;
        img {
          width: 60%;
        }
        .mask{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.2);
            border-radius: 10px;
        }
      }
    }
  }
  div.choice-item {
    flex: 0 0 40%;
    width: 50%;
  }
}
</style>