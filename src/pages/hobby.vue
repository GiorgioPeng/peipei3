<template>
  <div class="sleep-container">
    <bg-comp preName="habit2" nextName="end" :showSubmit="true" bgUrl="/img/06.hobby/bg.png">
      <customer-wrap title="日常爱好">
        <customer-card v-for="(item,index) of hobbyArr" :key="index" :data="item"></customer-card>
      </customer-wrap>
    </bg-comp>
  </div>
</template>

<script>
import bgComp from "~/components/common/bg.vue";
import customerWrap from "~/components/common/customer-wrap.vue";
import customerCard from "~/components/common/customer-card.vue";
import { hobbyConfigArr } from "~/config/hobby.js";

export default {
  components: {
    bgComp,
    customerWrap,
    customerCard
  },
  created() {
    this.hobbyArr = hobbyConfigArr;
  }
};
</script>

<style>
</style>