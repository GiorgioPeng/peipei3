<template>
  <div class="sleep-container">
    <bg-comp preName="info" nextName="habit1" bgUrl="/img/03.sleep/bg.png">
      <customer-wrap title="作息习惯">
        <customer-card v-for="(item,index) of sleepArr" :key="index" :data="item"></customer-card>
      </customer-wrap>
    </bg-comp>
  </div>
</template>

<script>
import bgComp from "~/components/common/bg.vue";
import customerWrap from "~/components/common/customer-wrap.vue";
import customerCard from "~/components/common/customer-card.vue";
import { sleepPageConfigArr } from "~/config/sleep.js";

export default {
  components: {
    bgComp,
    customerWrap,
    customerCard
  },
  created() {
    this.sleepArr = sleepPageConfigArr;
  }
};
</script>

<style>
</style>