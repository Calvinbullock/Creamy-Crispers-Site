
import { cartPageTemplate } from "./templates.mjs";
import { loadHeaderFooter } from "./utils";
import { getCartItems } from "./utils.mjs";

loadHeaderFooter();

let cartItems = getCartItems();

cartPageTemplate(cartItems);
