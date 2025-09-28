<script setup>
import { ref } from 'vue';

const msg = ref('Welcome component');
</script>

<template>

<div class="container">
  <h1>{{ msg }}</h1>
</div>

</template>