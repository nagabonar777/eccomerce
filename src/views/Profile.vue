<template>
  <center>
    <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img class="mx-auto h-auto w-full rounded-full" src="https://media.istockphoto.com/id/1300845620/id/vektor/ikon-pengguna-datar-terisolasi-pada-latar-belakang-putih-simbol-pengguna-ilustrasi-vektor.jpg?s=612x612&w=0&k=20&c=QN0LOsRwA1dHZz9lsKavYdSqUUnis3__FQLtZTQ--Ro=" alt="" />
    </div>
    <br>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Nama : {{ user.name}}</h3>
    <p class="font-lg text-semibold text-center leading-6 text-gray-600">Email : {{ user.email}}</p>
    <div>
      <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{{ address.address }}, {{ address.city }}, {{ address.state }}, {{ address.country }}, {{address.postal_code }}</p>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shzadow">
      <li class="flex items-center py-3 text-sm">
        <span>Status:</span>
        <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">SINGLE MAN</span></span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Bergabung:</span>
        <span class="ml-auto">Marc 08, 2023</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>TTL:</span>
        <span class="ml-auto">Jerman, 07-03-2006</span>
      </li>
       <li class="flex  py-3 text-sm text-right">
        <span>Alamat:</span>
        <span class="ml-auto">{{ address.address }}, {{ address.city }}, {{ address.state }}, {{ address.country }}, {{address.postal_code }}</span>
      </li>
    </ul>
    </div>

  </div>
</div>
</center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
    ...mapGetters('user', ['getUser']),
    ...mapGetters('auth', ['getAddress']),
    user() {
          return this.getUser
    },
    address() {
          return this.getAddress.data[0]
        }
    },
    methods: {
      ...mapActions('user', ["getUserInfo"]),
        ...mapActions('auth', ["getUserAddress"]),
  },
  async created() {
    this.getUserAddress()

    const user = await this.getUserInfo();

    if (user) {
      this.$store.commit('user/SET_USER', user)
    }
  }
}
</script>