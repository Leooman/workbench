<template>
  <workbench>
    <template slot="aside">
      <lhTabs position="right" fixWidth min>
          <lhTabPane label="操作区" class="chart_list">
            <lhDrag :transfer-data="chart" v-for="chart in $chart" :key="chart.type">
              <lhIcon :icon="chart.type" class="chart_type"></lhIcon>
            </lhDrag>
          </lhTabPane>
      </lhTabs>
    </template>
    <template slot="work">
      <lhTabs noPadding>
          <lhTabPane label="工作区">
            <lhGrid ref="lhGrid" @dragend="handleDragend"></lhGrid>
          </lhTabPane>
      </lhTabs>
    </template>
    <template slot="log">
      <lhTabs min fixHeight position="top">
          <lhTabPane label="通知区">
            <lhLog :data="logs"></lhLog>
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
import options from '@/mock'
export default {
  components:{
    workbench,
  },
  data() {
    return {
      logs:[],
    };
  },
  props: {},
  computed:{
    
  },
  mounted() {
    
  },
  methods:{
    handleDragend(data){
      const {type} = data
      this.$refs.lhGrid.add(Object.assign({},data,{
        option:options[type]
      }))
      this.logs.push({
        id:this.$utils.uuid(),
        time:this.$utils.getMoment(),
        mode:"info",
        message:`test ${type} chart`
      })
    },
  },
  watch:{
    
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
    // color: rgb(220, 223, 230);
    cursor: pointer;
    &:hover{
      background: rgba(7,71,166,0.15);
    }
  }
</style>
