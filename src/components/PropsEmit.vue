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
      <child-panel :width="400" :height="400" :dotTop="50" :dotLeft="50" />
      <child-panel :width="400" :height="400" :dotTop="10" :dotLeft="80" />
    </div>
  </div>
</template>

<script>
import ChildPanel from './panel/ChildPanel.vue';

export default {
  name: 'PropsEmit',
  components: {
    ChildPanel,
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
