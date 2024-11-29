
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
