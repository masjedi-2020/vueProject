<script setup>
import { ref } from 'vue';

import Navbar from './components/navbar.vue'
import Product from './components/Product.vue';



</script>

<template>
<header>
  <Navbar/>
</header>
<div class="flex">
  <Product/>
  <Product/>
  <Product/>
  <Product/>
</div>
   
</template>