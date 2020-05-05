<template>
  <section id="workbench">
    <section class="ASIDECONTAINER"></section>
    <section class="MAINCONTAINER">
      <section class="WORKCONTAINER">
        <nuxt />
      </section>
      <section class="LOGCONTAINER"></section>
    </section>
    <section class="HELPCONTAINER"></section>
  </section>
</template>

<script>
export default {
  name: "Layout",
  componentName: "Layout",
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
    }
    .LOGCONTAINER {
      flex: 0 0 100px;
    }
  }
  .HELPCONTAINER {
    flex: 0 0 200px;
    height: 100%;
  }
}
</style>
