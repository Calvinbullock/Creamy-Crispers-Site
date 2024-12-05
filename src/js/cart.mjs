
import { cartPageTemplate } from "./templates.mjs";
import { loadHeaderFooter } from "./utils";
import { calculateCartTotal, getCartItems } from "./utils.mjs";

loadHeaderFooter();

let cartItems = getCartItems();

cartPageTemplate(cartItems);

const cartTotal = calculateCartTotal(cartItems);
const totalElement = document.getElementById("total");
totalElement.innerHTML = cartTotal;

