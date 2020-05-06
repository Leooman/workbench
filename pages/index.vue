<template>
  <section id="workbench">
    <section class="ASIDECONTAINER">操作区</section>
    <section class="MAINCONTAINER">
      <section class="WORKCONTAINER">
        工作区
      </section>
      <section class="LOGCONTAINER">通知区</section>
    </section>
    <section class="HELPCONTAINER">帮助区</section>
  </section>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
  props: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
#workbench {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  .ASIDECONTAINER {
    flex: 0 0 200px;
    height: 100%;
    background: #cccccc;
  }
  .MAINCONTAINER {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .WORKCONTAINER {
      flex: 1 1 auto;
      overflow: auto;
      background: #eeeeee;
    }
    .LOGCONTAINER {
      flex: 0 0 100px;
      background: #aaaaaa;
    }
  }
  .HELPCONTAINER {
    flex: 0 0 200px;
    height: 100%;
    background: #cccccc;
  }
}
</style>
