<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('setActiveScenario', 'scenario_1');
    }
  }
</script>

<style lang="scss">

  @import "@/scss/style";

</style>
