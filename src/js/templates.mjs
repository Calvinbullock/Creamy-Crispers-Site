import { readJsonFile } from "./utils.mjs";

/** ====================================================
 * Product Card Template
 *
 * @param {*} data
 */
function productTemplate(data) {
  return `
        <div class="prod-card">
          <h3>${data.name}</h3>
          <img src="${data.image}" alt="${data.name}">
          <p>${data.description}</p>
          <span class="price">$${data.price.toFixed(2)}</span>
        </div>
        `;
}

/** ====================================================
 * Create Product Page Layout
 *
 * @param {string} filePath to the json file with the product data
 */
async function productPageTemplate(filePath) {
  const gridContainer = document.getElementById("prod-grid");
  const data = await readJsonFile(filePath);
  console.log(data)

  data.forEach(element => {
    const htmlCard = productTemplate(element);

    const cardElement = document.createElement('div');
    cardElement.innerHTML = htmlCard;
    gridContainer.appendChild(cardElement);
  });
}

export {
  productPageTemplate,
};
