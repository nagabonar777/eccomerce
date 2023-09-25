<template>
      <div  id="nav">
    <router-link to="/"></router-link>
  <div id="nav">
    <nav class="border-blue-600 bg-blue-50 dark:bg-blue-900 dark:border-blue-800">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="/" class="flex items-center">
        <img src="https://cdn.pixabay.com/photo/2020/09/26/08/36/logo-5603463_1280.png" class="h-8 mr-3" alt="Flowbite Logo" />
         <span class="text-2xl font-bold">Chanz<span class="text-red-600">Store</span></span>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-bold mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 font-bold rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
         <li>
          <a href="/product" class="block py-2 pl-3 pr-4 text-gray-900 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent font-bold md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Produk</a>
        </li>
         <li class="font-bold">
          <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-900 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
         <!-- <li>
          <a href="/brand" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brand</a>
        </li> -->
        
        <CartPage/>
        <router-link to="/profile">
      <svg class="w-8 h-8 text-gray-800 dark:text-white mr-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    </svg>
    </router-link>
        <li v-if="isAuthenticated">
          <button @click="logout" class="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">Log out</button>
        </li>
        <li v-else>
          <a href="/login" class="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">Login</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

  </div>
  </div>
  <router-view /><br><br>
 <Footer></Footer>
</template>

<script>

import Footer from './components/Footer.vue';
import CartPage from './components/CartPage.vue';

import { mapActions, mapGetters} from 'vuex';


export default {
  components: {
    Footer,
   CartPage
  },
  computed: {
    ...mapGetters('auth' ,['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>