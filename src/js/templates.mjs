import { getProduct as getProductByID, readJsonFile } from "./utils.mjs";

/** ====================================================
 * Product Card Template
 *
 * @param {*} data
 */
function productTemplate(data, catagory) {
  return `
        <div class="prod-card">
            <a class="prod-link" href="/product_item_page/index.html?catagory=${catagory}&id=${data.id}">
            <h3>${data.name}</h3>
            <img src="${data.image}" alt="${data.name}">
            <p>${data.description}</p>
            <span class="price">$${data.price.toFixed(2)}</span><br/>
            <button class="add-button" type="button">Add To Cart</button>
          </a>
        </div>
        `;
}

/** ====================================================
 * Create Product Page Layout
 *
 * @param {string} filePath to the json file with the product data
 */
async function productPageTemplate(filePath, catagory) {
  const gridContainer = document.getElementById("prod-grid");
  const data = await readJsonFile(filePath);
  console.log(data)

  data.forEach(element => {
    const htmlCard = productTemplate(element, catagory);

    const cardElement = document.createElement('div');
    cardElement.innerHTML = htmlCard;
    gridContainer.appendChild(cardElement);
  });
}

/** ====================================================
 * Create Product Item Page Layout
 *
 * @param {string} filePath to the json file with the product data
 * @param {number} the id of the product item
 */
async function productItemTemplate(filePath, id) {
  const data = await readJsonFile(filePath);
  data.filter((item) => item.id === id);

  const item = getProductByID(data);

  return `
      <h1>${item.name}</h1>
      <img src="${item.img}" alt="">
      <p>${item.desc}</p>
      <button type="button">Add To Cart</button>`;
}

export {
  productPageTemplate,
};
