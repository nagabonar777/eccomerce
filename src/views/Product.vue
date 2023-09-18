<template>
  <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Produk</h1>
        <div class="grid grid-cols-4 gap-4">
            <div class=" flex flex-container text-center" v-for="product in getProduct.data">
              <article class="mx-auto my-4 flex w-full flex-col overflow-hidden border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                <img src="https://i0.wp.com/thidiweb.com/wp-content/uploads/2017/08/tipe-produk.png?ssl=1" class="h-56 w-full object-cover" alt="" />
                <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{{ product.name }}</h3>
                <router-link :to="{name: 'SingleProduct', params: {slug: product.slug }}">
                  <a href="/">
                  <h5 class="text-xl tracking-tight text-slate-900">{{ product.slug }}</h5>
                  </a>
                </router-link>
                <h3 class="mt-4 mb-3 text-l font-semibold xl:text-2xl">Rp {{ product.base_price }}</h3>
              </article>
            </div>
        </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
  computed: {
  ...mapGetters('product', ['getProduct']),
  },
  methods: {
  ...mapActions('product', ['fetchProduct']),
  },
  created() {
  this.fetchProduct();
   },
  }
</script>