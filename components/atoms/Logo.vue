<template>
  <div class="logo">
    <img src="@/assets/img/logo.svg" alt="iBook" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AtomLogo',
})
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
