<template>
  <section id="workbench">
    <section class="ASIDECONTAINER">
      <slot name="aside"></slot>
    </section>
    <section class="MAINCONTAINER">
      <section class="WORKCONTAINER">
        <slot name="work"></slot>
      </section>
      <section class="LOGCONTAINER">
        <slot name="log"></slot>
      </section>
    </section>
    <section class="HELPCONTAINER">
      <slot name="help"></slot>
    </section>
  </section>
</template>

<style lang="scss" scoped>
#workbench {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  .ASIDECONTAINER {
    flex: 0 0 100px;
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
    flex: 0 0 100px;
    height: 100%;
    background: #cccccc;
  }
}
</style>
