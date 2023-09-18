<template>
    <div class="lg:m-10">
  <form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
  <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

  <div class="grid gap-3 md:grid-cols-2">
  </div>
  <div>
    <label class=""> Name </label>
    <input type="text" placeholder="Username" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Email Address </label>
    <input type="email" placeholder="1244614@gmail.com" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Password </label>
    <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
   <div>
    <label class="">Confirm Password </label>
    <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div class="grid gap-3 lg:grid-cols-2">
    <div>
      <label class=""> Phone: <span class="text-sm text-gray-400">(optional)</span> </label>
      <input type="text" placeholder="+543 5445 0543" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
  </div>

  <div class="checkbox">
    <input type="checkbox" id="chekcbox1" checked="" />
    <label for="checkbox1">I agree to the <a href="#" target="_blank" class="text-blue-600"> Terms and Conditions </a> </label>
  </div>

  <div>
    <a href="/">
    <button type="button" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Register</button>
    </a>
  </div>
</form>

</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            register: {
                email: "",
                username: "",
                password: "",
                confirm_password: "",
                phone: "",
            }
        };
    },
    methods: {
        ...mapActions("auth", ["register"]),
        async perfromRegister() {
          const credentials = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            password: this.password,
            confirm_password: this.confirm_password,
          };
          const success = await this.register(credentials);
          if (success) {
            this.$router.push('/login')
          } else {
            alert("Register Failed")
          }
              }
           }
        }
</script>