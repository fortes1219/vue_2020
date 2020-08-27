<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <span class="row">{{ 'Recursive Menu' }}</span>
    </div>
    <tree-menu
      :child="menuData.child"
      :depth="0"
      :name="menuData.name"
    />
  </div>
</template>

<script>
import TreeMenu from './menu/InfiniteTreeMenu.vue'

export default {
  name: 'RecursiveMenu',
  components: {
    TreeMenu,
  },
  data() {
    return {
      menuData: {
        name: 'Agent',
        route: 'root',
        child: [
          {
            name: '1st layer child_1',
            route: '1st',
            child: [
              {
                name: '2nd layer child_1',
                route: '2nd',
                child: [
                  {
                    name: '3rd layer child_1',
                    route: '3rd',
                    child: []
                  },
                  {
                    name: '3rd layer child_2',
                    route: '3rd',
                    child: []
                  },
                  {
                    name: '3rd layer child_3',
                    route: '3rd',
                    child: []
                  },
                ]
              },
              {
                name: '2nd layer child_2',
                route: '2nd',
                child: []
              }
            ]
          },
        ]
      }
    }
  },
  methods: {

  },
  created() {

  },
};
</script>
