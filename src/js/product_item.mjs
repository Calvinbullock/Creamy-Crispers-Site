
import { productItemTemplate } from "./templates.mjs";
import { catagoryToPath, loadHeaderFooter, getParam, readJsonFile, getProductObj, addToCart } from "./utils.mjs";

loadHeaderFooter();

// get json file path and item id
const catagory = getParam("catagory");
let id = getParam("id");
id = parseInt(id);
const dataPath = catagoryToPath(catagory);

// get data and filter to get target item
let data = await readJsonFile(dataPath);
data = data.filter(item => item.id === id);

// render the item
productItemTemplate(data[0]);

// add to cart
document.getElementById('add-button').addEventListener('click', async function() {

  // get then add the item to cart
  getProductObj(catagory, id)
    .then(item => {
      addToCart(item);

    }).catch(error => {
      console.error("Error getting product:", error);

    });
});
