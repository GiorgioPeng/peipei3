<template>
  <div class="info-container">
    <bg-comp bgUrl="/img/02.info/bg.png" nextName="sleep">
      <div class="info-main">
        <!-- <h1>个人信息</h1> -->
        <div class="cart-item">
          <card :rightBottom="true">
            <van-field
              v-model="$store.state.school"
              label="学校"
              :label-width="40"
              placeholder="请选择学校"
              right-icon="arrow-down"
              class="form-item"
              @click="handleSelectItem('school')"
            />
            <van-field
              label="身份证"
              :label-width="45"
              class="form-item"
              v-model="$store.state.id"
              placeholder="请输入身份证号码"
            />
            <van-field
              label="姓名"
              :label-width="40"
              class="form-item"
              style="width:80%;"
              v-model="$store.state.name"
            />
            <van-field
              name="radio"
              class="form-item"
              style="width:80%;position:ralative;z-index:999;"
              label="性别"
              :label-width="40"
            >
              <template #input>
                <van-radio-group v-model="$store.state.gender" direction="horizontal">
                  <van-radio name="boy">男</van-radio>
                  <van-radio name="girl">女</van-radio>
                </van-radio-group>
              </template>
            </van-field>
          </card>
        </div>
        <!-- 专业 职业规划 -->
        <div class="cart-item">
          <card :leftBottom="true" :leftTop="true">
            <div style="width:70%;margin:0 auto;">
              <van-field
                v-model="$store.state.major"
                :label-width="60"
                placeholder="专业"
                right-icon="arrow-down"
                class="form-item width80"
                style="position:relative;z-index:999;"
                @click="handleSelectItem('major')"
              />
              <van-field
                v-model="$store.state.plan"
                placeholder="职业规划"
                right-icon="arrow-down"
                class="form-item width80"
                @click="handleSelectItem('plan')"
              />
              <van-slider
                bar-height="4px"
                active-color="#a2d8e6"
                class="form-item width80"
                style="margin-top:30px;position:relative;z-index:999;"
                v-model="$store.state['plan_weight']"
                :min="1"
                :max="5"
              >
                <template #button>
                  <div class="custom-button">{{ $store.state['plan_weight'] }}</div>
                </template>
              </van-slider>
              <p style="font-size:12px;">请选择该项所占的权重</p>
            </div>
          </card>
        </div>
      </div>
      <div>
        <van-action-sheet
          v-model="actionSheet"
          style="height:200px;"
          :actions="actions"
          @select="onSelect"
        ></van-action-sheet>
      </div>
    </bg-comp>
  </div>
</template>

<script>
import bgComp from "~/components/common/bg.vue";
import card from "~/components/common/card.vue";
import { actionSheetOptions } from "~/config/info.js";
// import { Toast } from "vant";
export default {
  components: {
    bgComp,
    card
  },
  data: () => ({
    school: "",
    actionSheet: false,
    actions: [],
    activeType: "school"
  }),
  methods: {
    onSelect(item) {
      this.actionSheet = false;
      this.$store.state[this.activeType] = item.name;
    },
    handleSelectItem(type) {
      this.actionSheet = true;
      this.activeType = type;
      this.actions = actionSheetOptions[type];
    }
  }
};
</script>

<style lang="less">
.info-container {
  height: 100vh;
  width: 100vw;
  .info-main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .cart-item {
      position: relative;
      box-sizing: border-box;
      text-align: center;
      &:first-child {
        margin-bottom: 45px;
      }
      .form-item {
        width: 90%;
        border-radius: 20px;
        line-height: 16px;
        margin-bottom: 10px;
        &.van-cell.van-field {
          border: 1px solid #639ee6;
        }
      }
      .width80 {
        width: 100%;
      }
      .van-radio--horizontal {
        margin-right: 5px !important;
      }
    }
    .custom-button {
      width: 18px;
      color: #ffffff;
      font-size: 10px;
      line-height: 18px;
      text-align: center;
      background-color: #5a76f9;
      border-radius: 100px;
    }
  }
}
</style>