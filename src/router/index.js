import {
    createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue"
import Contact from "../views/Contact.vue"
import Brand from "../views/Brand.vue";
import Categori from "../views/Categori.vue"
import Checkout from "../views/Checkout.vue"
import Profile from "../views/Profile.vue"
import Order from "../views/Order.vue"
import store from "../store"

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {requireLogin: true}
    },
      {
        path: "/login",
        name: "Login",
          component: Login,
        meta: {requireGuest: true}
    },
      {
        path: "/register",
        name: "Register",
          component: Register
        
    },
    {
        path: "/checkout",
        name: "Checkout",
          component: Checkout,
        
    },
     {
        path: "/product/:slug",
        name: "SingleProduct",
         component: SingleProduct,
       props: true,
         meta: {requireLogin: true}
    },
      {
        path: "/product",
        name: "Product",
          component: Product,
        
     
    },
       {
        path: "/cart",
        name: "Cart",
         component: Cart,
        props: true,
    },
        {
        path: "/contact",
        name: "Contact",
        component: Contact,
  },
      {
        path: "/order/:orderCode",
        name: "Order",
        component: Order,
        props:true,
  },
      {
        path: "/brand",
        name: "Brand",
        component: Brand,
        meta: {requireLogin: true}
    },
       {
        path: "/categori",
        name: "Categori",
        component: Categori,
        meta: {requireLogin: true}
  },
       {
        path: "/profile",
        name: "Profile",
        beforeEnter: cekToken,
         component: Profile,
        meta: {requireLogin: true},





        
    },
       
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;