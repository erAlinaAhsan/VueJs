<template>
  <div>
    <QuizHeader />
    <QuizFooter :quiz="quiz" />
  </div>
</template>

<script setup>
import QuizHeader from '@/components/Quiz/QuizHeader.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'
import { provide } from 'vue'

let props = defineProps({ quiz: Object })
provide('quiz', quiz)
</script>
