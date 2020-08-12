<template>
  <div class="page">
    <div class="row column" data-inset="1rem">
      {{ msg + ' ' + numTotal }}
      <div class="row horizontal" data-space="space-bottom">
        <el-button type="primary" :disabled="getDisabled">Disabled Test</el-button>
        <el-button :disabled="getDisabled">disabled test</el-button>
      </div>
      <p data-space="space-bottom">{{ 'Hobbits: ' + checkList.length}}</p>
      <el-checkbox-group v-model="checkList">
        <el-checkbox
          v-for="(item, i) in checkItem"
          :key="i"
          :label="item.label"
        >{{ item.name }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataEvent',
  data() {
    return {
      msg: '2020/8/1',
      num_1: 10,
      num_2: 20,
      disabled: false,
      checkItem: [
        { label: 0, name: 'Game' },
        { label: 1, name: 'Movie' },
        { label: 2, name: 'Pets' },
      ],
      checkList: [],
    };
  },

  computed: {
    numTotal() {
      return this.num_1 + this.num_2;
    },
    getDisabled() {
      let result = true;
      if (this.checkList.length > 1) {
        result = false;
      }
      return result;
    },
  },

  methods: {
  },
};
</script>
