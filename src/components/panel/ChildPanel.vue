<template>
  <div class="panel" :style="{width: panelWidth + 'px', height: panelHeight + 'px' }">
    <span class="pos_dot" :style="{top: dotTop + '%', left: dotLeft + '%',}"></span>
  </div>
</template>

<script>
export default {
  name: 'ChildPanel',
  props: {
    panelWidth: {
      type: Number,
      default: 400,
    },
    panelHeight: {
      type: Number,
      default: 400,
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

  },

};
</script>
<style lang="scss">
.panel {
  position: relative;
  border: 1px solid #999;
  background: rgba(64, 57, 68, 0.7);
  .pos_dot{
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
}
</style>
