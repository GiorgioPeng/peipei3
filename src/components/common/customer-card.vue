<template>
  <div class="customer-card-comtainer">
    <h1>{{data.title}}</h1>
    <!-- 时间选择 -->
    <div v-if="data.type === 'time'" class="time-contaienr" :style="itemObj">
      <div
        class="selected-time"
        @click="showPicker = true,isNight=data.model;"
      >{{!$store.state[data.model] ? '请选择时间' : $store.state[data.model] }}</div>
    </div>
    <!-- radio选择 -->
    <div v-if="data.type === 'radio'" class="radio-contaienr" :style="itemObj">
      <div
        style="position:relative;z-index:999;"
        :class="['radio-item', index === $store.state[data.model] ? 'active':'']"
        v-for="(item,index) of data.choiceArr"
        :key="index"
        @click="handleClickRadio(index)"
      >{{item}}</div>
    </div>
    <!-- 滑块选择 -->
    <div v-if="data.type === 'slide'" class="slide-container" :style="itemObj">
      <div class="slide-item" v-for="(item,index) of data['choiceArr']" :key="index">
        <p>{{item[0]}}</p>
        <!-- <van-slider
          bar-height="4px"
          active-color="#a2d8e6"
          :max="50"
          v-model="$store.state[data.model][index]"
        >
          <template #button>
            <div class="van-slider-slot" style="width:12px;height:12px;"></div>
          </template>
        </van-slider> -->
        <!-- 口味 -->
        <div :class="$store.state[data.model][index]>=1?'click':'unclick'" @click="tasteClick(index,1)"></div>
        <div :class="$store.state[data.model][index]>=2?'click':'unclick'" @click="tasteClick(index,2)"></div>
        <div :class="$store.state[data.model][index]>=3?'click':'unclick'" @click="tasteClick(index,3)"></div>
        <div :class="$store.state[data.model][index]>=4?'click':'unclick'" @click="tasteClick(index,4)"></div>
        <div :class="$store.state[data.model][index]>=5?'click':'unclick'" @click="tasteClick(index,5)"></div>
        <p>{{item[1]}}</p>
      </div>
    </div>
    <!-- 一左一右两个actionsheet -->
    <div class="two-action-sheet-container" v-if="data.type === 'twoTime'" :style="itemObj">
      <div
        @click="
          showNumberPicker = true;
          activeIndex = 0;
          numberArr=Array.from({length: 28}, (v, i) => i>=17?i:undefined).filter(i=>i!==undefined);"
      >{{!$store.state[data.model][0] ? '请选择' : $store.state[data.model][0] }}</div>
      <div
        @click="
          showNumberPicker = true;
          activeIndex = 1;
          numberArr=Array.from({length: 31}, (v, i) => i>=23?i:undefined).filter(i=>i!==undefined);"
      >{{!$store.state[data.model][1] ? '请选择' : $store.state[data.model][1] }}</div>
    </div>
    <!-- 爱好选择 -->
    <div class="hobby-container" v-if="data.type === 'hobby'" :style="itemObj">
      <router-link :to="{name:'hobbyDetail',query:{type:data.model}}" tag="div">
        <!-- <div> -->
        <div class="icon">
          <van-icon name="smile-o" v-show="$store.state[data.model].length>=1" />
        </div>
        <img :src="data.yesImg" />
        <!-- </div> -->
      </router-link>
      <div @click="handleClickRadio(1,1)">
        <div class="icon">
          <van-icon name="smile-o" v-show="$store.state[data.model].length==0" />
        </div>
        <img src="/img/06.hobby/no.png" />
      </div>
    </div>
    <!-- timepicker -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="isNight==='wake_time'?times1:times2"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <!-- Numberpicker -->
    <van-popup v-model="showNumberPicker" position="bottom">
      <van-picker
        :columns="numberArr"
        show-toolbar
        @confirm="handleNumberPickerChange"
        @cancel="showNumberPicker = false"
      />
    </van-popup>
    <!-- 衡量权重 -->
    <div class="weight-container">
      <!-- <van-slider
        bar-height="4px"
        active-color="#a2d8e6"
        :min="1"
        :max="5"
        v-model="$store.state[data.weight]"
      >
        <template #button>
          <div class="van-slider-slot">{{ $store.state[data.weight] }}</div>
        </template>
      </van-slider> -->
      <div style="display:flex;justify-content:space-around;align-items:flex-end">
        <img style="max-height:20px;width:10px" @click="clickWeight(1)" :src="$store.state[data.weight]==1?'/img/common/weightSideClick.png':'/img/common/weightSideUnclick.png'"/>
        <img style="max-height:15px;width:10px" @click="clickWeight(2)" :src="$store.state[data.weight]==2?'/img/common/weightMiddleClick.png':'/img/common/weightMiddleUnclick.png'"/>
        <img style="max-height:10px;width:10px" @click="clickWeight(3)" :src="$store.state[data.weight]==3?'/img/common/weightCenterClick.png':'/img/common/weightCenterUnclick.png'"/>
        <img style="max-height:15px;width:10px" @click="clickWeight(4)" :src="$store.state[data.weight]==4?'/img/common/weightMiddleClick.png':'/img/common/weightMiddleUnclick.png'"/>
        <img style="max-height:20px;width:10px" @click="clickWeight(5)" :src="$store.state[data.weight]==5?'/img/common/weightSideClick.png':'/img/common/weightSideUnclick.png'"/>
      </div>
      <p style="margin-top:5px;color:#555">衡量权重</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showPicker: false,
    showNumberPicker: false,
    numberArr: [],
    activeIndex: 0,
    itemObj: {},
    isNight: "",
    times1: [
      "6:30之前",
      "6:30-7:00",
      "7:00-8:00",
      "8:00-9:00",
      "9:00-10:00",
      "10:00之后"
    ],
    times2: [
      "21:00之前",
      "21:00-22:00",
      "22:00-23:00",
      "23:00-24:00",
      "24:00之后"
    ]
  }),
  created() {
    // for (let i = 16; i <= 28; i++) {
    //   this.numberArr.push(i);
    // }
    let position = {};
    // let path = window.location.pathname;
    // if (path === "/hobby") {
    //   position = {
    //     backgroundSize: "3rem 1.70rem",
    //     backgroundPosition: "-0.18rem -0.17rem"
    //   };
    // } else if (path === "/habit2") {
    //   position = {
    //     backgroundSize: "2.5rem 1.3rem",
    //     backgroundPosition: "0px 0px"
    //   };
    // } else if (path === "/habit1") {
    //   position = {
    //     backgroundSize: "2.5rem 1.3rem",
    //     backgroundPosition: "1px 0px"
    //   };
    // } else if (path === "/sleep") {
    //   position = {
    //     backgroundSize: "2.5rem 1.4rem",
    //     backgroundPosition: "1px 0px"
    //   };
    // }
    position = {
      backgroundSize: "2.52rem 1.32rem",
      backgroundPosition: "0px 0px"
    };
    this.itemObj = {
      backgroundImage: `url(${this.data.bgUrl})`,
      borderRadius: "20px",
      position: "relative",
      ...position
    };
  },
  methods: {
    onConfirm(time) {
      this.$store.state[this.data.model] = time;
      this.showPicker = false;
    },
    clickWeight(value){
      this.$store.state[this.data.weight] = value;
      // this.reload();
    },
    tasteClick(index,value){
      // console.log(this.$store.state[this.data.model][index])
      this.$store.state[this.data.model][index] = value;
      this.reload();
    },
    handleClickRadio(index, type) {
      if (type) {
        this.$store.state[this.data.model] = [];
      } else {
        this.$store.state[this.data.model] = index;
      }
    },
    handleNumberPickerChange(value) {
      // console.log(value);
      this.$store.state[this.data.model][this.activeIndex] = value;
      this.showNumberPicker = false;
    }
  }
};
</script>

<style lang="less">
.customer-card-comtainer {
  position: relative;
  width: 2.5rem;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  // overflow: hidden;
  & > h1 {
    position: absolute;
    top: -24px;
    left: 12px;
  }
  .weight-container {
    height:45px;
    width: 80%;
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translate(-50%, -22%);

    & > p {
      font-size: 12px;
    }
  }
  .time-contaienr,
  .radio-contaienr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    // background-color: #dbe6d8;
    border-radius: 20px;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.3)
  }
  .radio-item {
    width: 80%;
    line-height: 30px;
  }
  .selected-time,
  .active {
    width: 80%;
    height: 30px;
    background-image: url("/img/common/active.png");
    background-size: 100% 100%;
    font-size: 16px;
    line-height: 30px;
    color: #999;
  }
  .active {
    font-size: 20px;
  }
  .van-slider-slot {
    width: 20px;
    height: 15px;
    font-size: 16px;
    line-height: 16px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
  .slide-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.3);
    .slide-item {
      display: flex;
      width: 80%;
      justify-content: center;
      align-items: center;
      &:first-child {
        margin-bottom: 20px;
      }
      p {
        flex: 0 0 50px;
      }
    }
  }
  .two-action-sheet-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.3);
    div {
      flex: 0 0 50%;
      height: 30px;
      background-image: url("/img/common/active.png");
      background-size: 100% 100%;
      font-size: 16px;
      line-height: 30px;
      color: #999;
    }
  }
  .hobby-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.3);
    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 40px;
      font-size: 20px;
      text-align: left;
      padding-left: 5px;
      line-height: 40px;
      img {
        margin-left: 5px;
        width: 90px;
      }
      .icon {
        width: 20px;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.click{
  background-image: url("/img/common/tasteClick.png");
  background-size:100% 100%;
  background-repeat: no-repeat;
  width: 35px;
  height:10px;
  margin-left:2px;
}
.unclick{
  background-image: url("/img/common/tasteUnclick.png");
  background-size:100% 100%;
  background-repeat: no-repeat;
  width: 35px;
  height:10px;
  margin-left:2px;
}
</style>