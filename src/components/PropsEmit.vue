<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <span class="row">{{ 'Props & Emit' }}</span>
    </div>
    <div class="row horizontal" data-space="space-vertical">
      <!-- props: dotTop, dotLeft to child -->
      <child-panel
        @handleEmitModeA="parentEmitModeA"
        @handleEmitModeB="parentEmitModeB"
        @handleEmitModeC="parentEmitModeC"
        :dotTop="dotPos[0].top"
        :dotLeft="dotPos[0].left"
      />
      <ChildPanel
        @handleEmitModeA="parentEmitModeA"
        @handleEmitModeB="parentEmitModeB"
        @handleEmitModeC="parentEmitModeC"
        :panelWidth="400"
        :panelHeight="400"
        :dotTop="dotPos[1].top"
        :dotLeft="dotPos[1].left"
      />
    </div>
    <div class="row horizontal">
      <el-button @click="resetPos">Reset</el-button>
      <el-button @click="setCenter">Center</el-button>
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
      dotPos: [
        { top: 50, left: 50 },
        { top: 10, left: 80 },
      ],
    };
  },
  methods: {
    resetPos() {
      this.dotPos.forEach((el) => {
        el.top = 0;
        el.left = 0;
      });
      console.log('(Parent-Reset) updated dot pos to child');
    },
    setCenter() {
      this.dotPos.forEach((el) => {
        el.top = 50;
        el.left = 50;
      });
      console.log('(Parent-Center) updated dot pos to child');
    },
    parentEmitModeA(top, left) { // from child: top, left
      // v-model: this.dotPos
      this.dotPos.forEach((el) => {
        el.top = top;
        el.left = left;
      });
    },
    parentEmitModeB(top, left) {
      this.dotPos.forEach((el) => {
        el.top = top;
        el.left = left;
      });
    },
    parentEmitModeC(top, left) {
      this.dotPos.forEach((el) => {
        el.top = top;
        el.left = left;
      });
    },
  },
  created() {

  },
};
</script>
