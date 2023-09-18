<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <h1 class="mt-2 text-5xl font-extrabold text-black text-center mt-9">ALL-CATEGORI</h1>
    <div class="grid grid-cols-2 gap-2 m-5">
        <div v-for="categori in getCategori.data.splice(0,8)" >
      <div>
        <div class="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
  <div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
    <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
      <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">{{ categori.slug }}</h2>
      
      <a href="#" class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
        <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Shop now </span>
        <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>

    <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img class="h-full w-full object-cover" :src="categori.banner" loading="lazy" />
    </div>
  </div>
</div>

    </div>
      </div>
    </div>
    
    
    </template>
    <script>
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
    
        computed: {
            ...mapGetters('categori', ['getCategori']),
        },
        methods: {
            ...mapActions('categori', ['fetchCategori']),
        },
        created() {
            this.fetchCategori();
        }
    }
    </script>
    <style>
      * { 
      font-family: 'Source Sans Pro';
      }
    </style>