<template>
	<div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="hasChildClass">
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
		},
		hasChildClass() {
      return { 'has-children': this.child.length > 0 }
    },
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
			position: relative;
			display: table;
			&:after {
				content: "";
				position: absolute;
				right: -20px;
				top: 50%;
				transform: translateY(-50%);
				width: 0;
				height: 0;
				border-top: 6px solid transparent;
				border-bottom: 6px solid transparent;
				border-left: 10px solid #bbb;
			}
    }
  }
}
</style>