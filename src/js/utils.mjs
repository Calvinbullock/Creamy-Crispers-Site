
/** ====================================================
 * render a html template
 */
export async function renderWithTemplate(templateFn, parentElement, data, callback, position = "afterbegin", clear = true) {
  if (clear) {
    parentElement.innerHTML = "";
  }

  const htmlString = await templateFn(data);

  parentElement.insertAdjacentHTML(position, htmlString);
  if (callback) {
    callback(data);
  }
}

/** ====================================================
 * load an html a template
 */
function loadTemplate(path) {
  return async function() {
    const res = await fetch(path);
    if(res.ok) {
      const html = await res.text();
      return html;
    }
  };
}

/** ====================================================
 * Load in the header and footer templates
 */
export async function loadHeaderFooter() {
  const headerTemplateFn = loadTemplate("/partials/header.html");
  const footerTemplateFn = loadTemplate("/partials/footer.html");

  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");

  renderWithTemplate(headerTemplateFn, header);
  renderWithTemplate(footerTemplateFn, footer);
}

/** ====================================================
 * Read Json File and return as an Json obj
 * @param {*} filePath
 * @returns {json obj} jsonObj
 */
export async function readJsonFile(filePath) {
  try {
    const response = await fetch(filePath);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }}


/** ====================================================
 * Read Json File and return as an Json obj
 * @param {string} key the key for the url paramiter
 * @returns {string} the param pair
 */
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

/** ====================================================
 * takes a category and returns the corresponding json file path
 * @param {string} category string
 * @returns {string} path to corresponding json file
 */
export function catagoryToPath(catagory) {
  if (catagory === "cookie") {
    return "/json/cookies.json";
  } else if (catagory === "iceCream") {
    return "/json/iceCream.json";
  }
  return null;
}

/** ====================================================
 * Adds an item to the cart in local storage.
 *
 * @param {Object} item - The item to add to the cart.
 *   - `id`: The unique identifier of the item.
 *   - `name`: The name of the item.
 *   - `price`: The price of the item.
 *   // ... other properties as needed
 */
export function addToCart(item) {

  // make sure item is not null
  if (item == null || item == undefined) {
    console.log("cart item null");
    return;
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);

  // Update the cart in local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

/** ====================================================
 * Retrieves the cart items from local storage.
 *
 * @returns {Array} An array of cart items.
 */
export function getCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

/** ====================================================
 * Retrieves the product item object matching the
 *    category and the id
 *
 * @param {string} category
 * @param {number} id
 *
 * @returns {Array} An array of cart items.
 */
export async function getProductObj(category, id) {

  // ensure id is an number
  if (!Number.isInteger(id)) {
    id = parseInt(id);
  }

  // get category data
  const dataPath = catagoryToPath(category);
  let data = await readJsonFile(dataPath);

  // filter for id
  data = data.filter(item => item.id === id);
  return data[0];
}

/** ====================================================
 * Totals all the prices in the cart
 *
 * @param {object} objectList - all the objects in the
 * @returns {number} total cost of everything in the cart
 */
export function calculateCartTotal(itemList) {
  let total = 0;
  itemList.forEach(item => { total += item.price; });
  return total;
}

