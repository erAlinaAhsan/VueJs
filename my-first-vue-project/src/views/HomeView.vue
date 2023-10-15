<script setup>
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'tacos')
let age = useStorage('age', 10)

let obj = useStorage('obj', { one: 'one' })
</script>

<template>
  <main>
    <p>What is your favourite food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="text" v-model="age" /></p>
  </main>
</template>
