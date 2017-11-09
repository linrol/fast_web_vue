<template>
  <div id="app">
    <v-header/>
    <v-lefter/>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import lefter from './components/lefter/lefter.vue'
import footer from './components/footer/footer.vue'
export default {
  name: 'app',
  components: {
    'v-header':header,
    'v-lefter':lefter,
    'v-footer':footer
  }
}
</script>

<style>
</style>
