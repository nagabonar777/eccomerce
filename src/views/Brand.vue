<template><br>
<h1 class="mt-2 text-5xl font-extrabold text-black text-center mt-9">ALL-BRAND</h1>
    <div class="grid grid-cols-4 gap-4">
        
        <div   v-for="brand in getBrand.data.slice(0, 8)" :key="brand.id"  class=" my-10 grid grid-flow-col gap-4">

  <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4 ">
    <div class="flex h-60 flex-col justify-between overflow-hidden ">
      <img :src="brand.logo" />
    </div>
    <div class="flex-1 overflow-hidden bg-white px-6 py-8">
      <h5 class="group-hover:text-indigo-600 mb-4 text-xl font-bold">{{ brand.slug }}</h5>
      <p class="mb-8 text-gray-600">{{ brand.name }}</p>
      <div class="flex justify-between">
        <a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
          <span>▷</span>
          <span class="underline">Watch Now</span>
        </a>
        <div class="max-w-full flex-none lg:px-4">
          <h5 class="text-lg font-bold">Video 6</h5>
        </div>
      </div>
    </div>
  </div>
 </div>

</div>
 

</template>

<script>

import { mapGetters, mapActions } from 'vuex'; 

export default{
    computed: {
        ...mapGetters('brand', ['getBrand']),
    },
    methods: {
        ...mapActions('brand', ['fetchBrand'])
    },
    created() {
        this.fetchBrand();
    },
}
</script>