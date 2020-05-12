<template>
  <div class="sleep-container">
    <bg-comp preName="habit1" nextName="hobby" bgUrl="/img/05.habit2/bg.png">
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
import { habit2ConfigArr } from "~/config/habit.js";

export default {
  components: {
    bgComp,
    customerWrap,
    customerCard
  },
  created() {
    this.habitArr = habit2ConfigArr;
  }
};
</script>

<style>
</style>