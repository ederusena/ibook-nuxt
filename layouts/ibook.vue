<template>
  <div class="ibook-layout">
    <Header />
    <BosonContainer>
      <Nuxt />
    </BosonContainer>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BookLayout',
})
</script>

<style lang="scss" scoped>
.ibook-layout {
  margin-top: 0.5rem;
  display: grid;
  grid-gap: 1rem;
  .container {
    padding-bottom: 6.75rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
