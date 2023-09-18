import { createStore } from "vuex";
import auth from "./modules/auth"
import product from "./modules/product";
import brand from "./modules/brand"
import categori from "./modules/categori"
import user from "./modules/user";
import cart from "./modules/cart";
import order from "./modules/order";
 const store = createStore({
    
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        product,
        brand,
        categori,
        user,
        cart,
        order,
    },
});

export default store;