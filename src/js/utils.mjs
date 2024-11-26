
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
