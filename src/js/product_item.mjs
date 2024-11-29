
import { productItemTemplate } from "./templates.mjs";
import { catagoryToPath, loadHeaderFooter, getParam, readJsonFile } from "./utils.mjs";

loadHeaderFooter();

// get json file path
const catagory = getParam("catagory");
let id = getParam("id");
id = parseInt(id);
const dataPath = catagoryToPath(catagory);

// get data and filter to get target item
let data = await readJsonFile(dataPath);
data = data.filter(item => item.id === id);

productItemTemplate(data[0]);
