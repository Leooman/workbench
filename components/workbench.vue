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
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  .ASIDECONTAINER {
    flex-grow: 0;
    flex-shrink: 0;
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
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
  .HELPCONTAINER {
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
  }
}
</style>
