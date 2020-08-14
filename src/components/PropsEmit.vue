<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <span class="row">{{ 'Props & Emit' }}</span>
      <div class="row horizontal end">
        <el-radio-group v-model="tabSelected" class="header__radio" size="large" @change="tabsChange">
          <el-radio-button :label="0">{{ 'Mode A' }}</el-radio-button>
          <el-radio-button :label="1">{{ 'Mode B' }}</el-radio-button>
          <el-radio-button :label="2">{{ 'Mode C' }}</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="row horizontal v_center">
      <ChildPanelA />
    </div>
  </div>
</template>

<script>
import ChildPanelA from './panel/ChildPanel_A'
export default {
  name: 'PropsEmit',
  components: {
    ChildPanelA
  },
  data() {
    return {
      tabSelected: 0,
    };
  },
  methods: {
    tabsChange() {
      console.log('tab active: ', this.tabSelected);
    },
  },
  created() {
    this.tabsChange();
  },
};
</script>
