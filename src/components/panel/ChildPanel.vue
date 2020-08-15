<template>
  <div class="row">
    <div class="row horizontal v_center">
      <el-button @click="emitModeA(10, 50)">Mode A</el-button>
      <el-button @click="emitModeB(20, 100)">Mode B</el-button>
      <el-button @click="emitModeC(100, 100)">Mode C</el-button>
    </div>
    <div class="panel" :style="{width: panelWidth + 'px', height: panelHeight + 'px' }">
      <span class="pos_dot" :style="{top: dotTop + '%', left: dotLeft + '%',}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildPanel',
  props: {
    panelWidth: {
      type: Number,
      default: 100,
    },
    panelHeight: {
      type: Number,
      default: 100,
    },
    dotTop: {
      type: Number,
      defalut: 0,
    },
    dotLeft: {
      type: Number,
      defalut: 0,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    emitModeA(top, left) {
      this.$emit('handleEmitModeA', top, left);
    },
    emitModeB(top, left) {
      this.$emit('handleEmitModeB', top, left);
    },
    emitModeC(top, left) {
      this.$emit('handleEmitModeC', top, left);
    },
  },
};
</script>
<style lang="scss">
.panel {
  position: relative;
  border: 1px solid #999;
  background: rgba(64, 57, 68, 0.7);
  transition: all 0.3s ease-in-out;
  .pos_dot{
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
}
</style>
