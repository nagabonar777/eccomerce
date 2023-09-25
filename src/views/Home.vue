<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap" rel="stylesheet" />

<div class="flex min-h-screen w-screen">
  <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
    <!-- Left Column -->
    <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
      <div class="mb-16 lg:my-auto lg:max-w-lg">
        <div class="mb-6 max-w-xl">
          <div>
            <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">25% For Sale</p>
          </div>
          <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
             Selamat Datang <br />
             Di Website 
            <span class="my-2 rounded-md abg-gradient-to-r inline-block bg-red-600 from-lime-400 to-red-600 px-2 font-bold text-white ">ChanzStore</span>
          </h2> 
          <p class="text-base text-gray-700 md:text-lg">Mencari gadget dengan teknologi terkini yang terpecaya dan aman? Pastinya ada di sini</p>
        </div>
        
        <div class="flex items-center">
          <a href="product" class="bg-red-600 mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-red-600 px-8 font-medium tracking-wide text-white shadow-lg shadow-red-300 outline-none transition duration-200 hover:scale-110 hover:bg-red-500 focus:ring">
             Mulai Sekarang </a>
          <a href="/" class="inline-flex items-center font-semibold text-red-600 transition-colors duration-200 hover:text-lime-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            Tonton Video</a>
        </div>
      </div>
    </div>
    <!-- /Left Column -->

    <!-- Right Column -->
    <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
      <!-- Col 2 -->
      <div class="w-full flex-col-center items-center space-y-3  rounded-xl py-7 lg:flex lg:w-80 ml-7 ">
        <div class="h-40 overflow-hidden rounded-xl bg-yellow-600 ml-6">
          <img class="mx-auto h-full w-full object-cover" src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2020/07/ezgif.com-gif-maker-2021-08-10T081932.319.webp" alt="" />
        </div>
      </div>
      <div class="w-full flex-col space-y-3 rounded-xl  lg:flex lg:w-80">
        <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://vncojewellery.com/artikel/wp-content/uploads/2019/05/perhiasan-emas-pernikahan.jpg" alt="" />
        </div>
        <div class="w-full h-40 overflow-hidden rounded-xl bg-pink-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://cf.shopee.co.id/file/fb9d933d71c05222fff739f44ac7458a" alt="" />
        </div>
        <div class="w-full h-40 overflow-hidden rounded-xl bg-blue-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://lzd-img-global.slatic.net/g/ot/common/a3202b1e995c4312ae9da296ae902281.jpeg_720x720q80.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- /Right Column -->
  </div>
</div><br>
<!-- Body -->
<div class="flex w-screen flex-wrap text-slate-800">
  <div class="flex w-full flex-col md:w-1/2">
    <div class="flex justify-center py-12 md:justify-start md:pl-12"> 
      <a href="#" class="text-2xl font-bold text-red-500">Goyangan. </a>    
    </div>
    <div class="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]"> 
      <div class="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14"> 
        <div class="mx-auto w-full max-w-md pb-20 px-8 sm:px-0"> 
          <div class="relative">
            <div class="absolute left-0 top-2 h-0.5 w-full bg-gray-200" aria-hidden="true">
              <div class="absolute h-full w-1/3 bg-gray-900"></div>
              <!-- change to w-2/3 for next step -->
              <div class="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
              <!-- change to left-1/2 for next step -->
            </div>
            <ul class="relative flex w-full justify-between">
              <li class="text-left">
                <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white" href="#">1</a>
              </li>
              <li class="text-left">
                <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
              </li>
              <li class="text-left">
                <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="#">3</a>
              </li>
              <li class="text-left">
                <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="#">4</a>
              </li>
            </ul>
          </div>
        </div>
        <h2 class="font-serif text-2xl font-semibold text-gray-700">Seberapa Besar perusahaan anda</h2>
        <div class="mt-8 flex w-full flex-col pb-8">
          <div class="relative mb-4">
            <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
            <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
            <label class="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" for="radio_1">
              <span class="mb-2 text-lg font-semibold">Tim Kecil</span>
              <p class="text-sm sm:text-base">"Tim kecil kami sangat kompak dan mampu beradaptasi dengan cepat dalam menghadapi tantangan."</p>
            </label>
          </div>
          <div class="relative mb-4">
            <input class="peer hidden" id="radio_2" type="radio" name="radio" />
            <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
            <label class="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" for="radio_2">
              <span class="mb-2 text-lg font-semibold">Tim Besar</span>
              <p class="text-sm sm:text-base">Tim besar kami memiliki kemampuan luar biasa dalam mencapai tujuan bersama dan bekerja sama secara efisien</p>
            </label>
          </div>
          <div class="my-4 space-y-3">
            <label for="terms" class="flex space-x-4">
              <input id="terms" name="terms" type="checkbox" class="h-6 w-6 shrink-0 accent-gray-900" checked />
              <span id="terms-description" class="text-sm text-gray-600">I agree to the <a class="underline" href="#">Terms and Conditions</a>. Learn about our Privacy Policy and our measures to keep your data safe and secure.</span>
            </label>
          </div>

          <button class="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white">
            Selanjutnya 
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="relative hidden h-screen select-none flex-col justify-center bg-red-600 bg-gradient-to-br md:flex md:w-1/2 mb-9" >
    <div class="py-16 px-8 text-white xl:w-[40rem]">
      <span class="rounded-full bg-#80BD9E px-7 py-1 font-large text-white-600">New Feature</span>
      <p class="my-6 text-3xl font-semibold leading-10">Buat Animasi Dengan Kretivitas Mungkin</p>
      <p class="mb-4">Mulai lah menjadi anak yang kreatif dan cerdas yang berguna bagi bangsa dan negara.</p>
      <a href="#" class="font-semibold tracking-wide text-white underline underline-offset-4">Selengkapnya >>>> </a>
    </div>
    <img class="ml-16 w-11/12 max-w-lg rounded-lg object-cover lg:w-200" src="https://fcfibreglass.com/wp-content/uploads/2021/08/industri-kreatif.jpg" />
  </div>
</div>
<br><br>



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
    }
}

</script>
<style scoped>
  * {
  font-family: 'Source Sans Pro';
  }

 
</style>

