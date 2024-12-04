
import { loadHeaderFooter } from "./utils";
import { productPageTemplate } from "./templates.mjs";
import { addToCart, getProductObj } from "./utils.mjs";

const catagory = "iceCream";

loadHeaderFooter();

productPageTemplate("/json/iceCream.json", catagory);

// add to cart on button click
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-button')) {
    const id = event.target.value;

    // get then add the item to cart
    getProductObj(catagory, id)
      .then(item => {
        addToCart(item);

      }).catch(error => {
        console.error("Error getting product:", error);

      });

  }
});
