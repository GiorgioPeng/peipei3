<template>
  <div class="sleep-container">
    <bg-comp preName="sleep" nextName="habit2" bgUrl="img/04.habit1/bg.png">
      <customer-wrap title="生活习惯">
        <customer-card v-for="(item,index) of habitArr" :key="index" :data="item"></customer-card>
      </customer-wrap>
    </bg-comp>
  </div>
</template>

<script>
import bgComp from "~/components/common/bg.vue";
import customerWrap from "~/components/common/customer-wrap.vue";
import customerCard from "~/components/common/customer-card.vue";
import { habit1ConfigArr } from "~/config/habit.js";

export default {
  components: {
    bgComp,
    customerWrap,
    customerCard
  },
  created() {
    this.habitArr = habit1ConfigArr;
  }
};
</script>

<style>
</style>