<template>
	<div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent">
        <i v-if="child"></i>
        {{ name }}
      </div>
    </div>
    <tree-menu
      v-if="showChildren"
      v-for="(item, i) in child"
			:key="i"
      :child="item.child"
      :name="item.name"
      :depth="depth + 1"
    />
  </div>
</template>
<script>
export default {
	name: 'treeMenu',
	props: {
		child: {
			type: Array,
			default: []
		},
		name: {
			type: String,
			default: ''
		},
		depth: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			showChildren: false
		}
	},
	computed: {
		indent() {
      return { transform: `translate(${this.depth * 50}px)` }
    }
	},
	methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren
    }
  }
}
</script>
<style lang="scss">
.tree-menu {
  .label-wrapper {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    .has-children {
			display: table;
    }
  }
}
</style>