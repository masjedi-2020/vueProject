<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="#" class="text-2xl font-bold text-blue-600">MyLogo</a>
          </div>
  
          <!-- Desktop links -->
          <div class="hidden md:flex space-x-6 items-center">
            <router-link :to="{name: 'home'}" class="text-gray-700 hover:text-blue-600 transition">Home</router-link>
            <router-link :to="{name: 'about'}" class="text-gray-700 hover:text-blue-600 transition">About</router-link>
            <router-link :to="{name: 'product'}" class="text-gray-700 hover:text-blue-600 transition">Products</router-link>
            <router-link :to="{name: 'contact'}" class="text-gray-700 hover:text-blue-600 transition">Contact</router-link>
          
          </div>

  
          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button @click="isOpen = !isOpen" class="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200">
           <router-link :to="{name: 'home'}"class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</router-link>
          <router-link :to="{name: 'about'}"class="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</router-link>
        <router-link :to="{name: 'product'}"class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Products</router-link>
        <router-link :to="{name: 'contact'}"class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false) // controls mobile menu
  </script>
  
  <style>
  .router-link-active {
    color: aliceblue;
    background-color: rgb(74, 74, 215);
    border-radius: 3px;
    padding: 10px;
    box-shadow:inset;
  }
  </style>
  