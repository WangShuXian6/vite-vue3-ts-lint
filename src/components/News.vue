<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
console.log('count:', count)
</script>

<template>
  <h1>'news'</h1>
</template>

<style scoped>
a {
  color: #42b983;
  font-weight: 400;
}

label {
  margin: 0 0.5em;
  font-weight: 400;
}

code {
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
  border-radius: 4px;
}
</style>
