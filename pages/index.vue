<template>
  <workbench>
    <template slot="aside">
      <lhTabs position="right" fixWidth min>
          <lhTabPane label="操作区">
          </lhTabPane>
      </lhTabs>
    </template>
    <template slot="work">
      <lhTabs>
          <lhTabPane label="工作区">
          </lhTabPane>
      </lhTabs>
    </template>
    <template slot="log">
      <lhTabs min fixHeight position="top">
          <lhTabPane label="通知区">
          </lhTabPane>
      </lhTabs>
    </template>
    <template slot="help">
      <lhTabs position="left" fixWidth min>
          <lhTabPane label="辅助区">
          </lhTabPane>
      </lhTabs>
    </template>
  </workbench>
</template>

<script>
import workbench from "@/components/workbench"
export default {
  components:{
    workbench,
  },
  data() {
    return {};
  },
  props: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>
