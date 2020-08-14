<template>
  <div class="panel" :style="{width: panelWidth, height: panelHeigh }">
		<span class="pos_dot"></span>
	</div>
</template>

<script>
export default {
	name: 'ChildPanelA',
	props: {
		panelWidth: {
			type: Number,
			default: 400
		},
		panelHeight: {
			type: Number,
			default: 400
		}
	},
  data() {
    return {

    };
  },
  methods: {

  },

};
</script>
<style lang="scss" scoped>
.panel {
	position: relative;
	border: 1px solid #999;
	.pos_dot{
		position: absolute;
		transform: translateX(50%) translateY(-50%);
		top: 50%;
		left: 50%;
		width: 30px;
		height: 30px;
		border: 1px solid #fff;
		border-radius: 50%;
	}
}
</style>