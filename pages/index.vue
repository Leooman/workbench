<template>
  <workbench>
    <template slot="aside">
      <lhTabs position="right" fixWidth min>
          <lhTabPane label="操作区" class="chart_list">
            <lhIcon v-for="icon in $charts" :key="icon" :icon="icon" class="chart_type"></lhIcon>
          </lhTabPane>
      </lhTabs>
    </template>
    <template slot="work">
      <lhTabs>
          <lhTabPane label="工作区">
            <lhChart ref="lhchart" :option="option"></lhChart>
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
    return {
      option:{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      }
    };
  },
  props: {},
  mounted() {
    this.resize()
  },
  methods:{
    resize(){
      this.$nextTick(this.$refs.lhchart.update)
    }
  }
};
</script>

<style lang="scss" scoped>
  .chart_list{
    display: grid;
    justify-content: space-between;
    align-content: start;
    grid-template-columns: repeat(auto-fill, 30px);
    grid-gap: 5px;
  }
  .chart_type{
    width: 30px;
    height: 30px;
    border: 1px solid rgb(220, 223, 230);
    padding: 5px;
    color: rgb(220, 223, 230);
    cursor: pointer;
    &:hover{
      background: rgba(155, 155, 155, 0.05);
    }
  }
</style>
