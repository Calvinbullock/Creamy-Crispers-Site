
import { loadHeaderFooter } from "./utils";
import { productPageTemplate } from "./templates.mjs";

loadHeaderFooter();

productPageTemplate("/json/iceCream.json", "iceCream");

let item = getProductObj();
