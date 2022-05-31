<template>
  <div class="countering">
    <div class="counter">
    <h1>Counter</h1>
    <p>
      <button @click="decrement">-</button>
      <span>{{ $count }}</span>
      <button @click="increment">+</button>
    </p>
  </div>
  </div>
</template>



<script lang="ts">
import Vue from 'vue'
import { counter } from '@/store'

export default Vue.extend({
    name: "CounterOrganism",
    layout: "ibook",
    computed: {
        $count() {
            return counter.$count
        }
    },
    methods: {
        decrement() {
          counter.diminuir()
        },
        increment() {
          counter.aumentar()
        }
    }
})
</script>

<style lang="scss" scoped>
.countering {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
