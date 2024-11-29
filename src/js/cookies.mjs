
import { loadHeaderFooter, catagoryToPath } from "./utils";
import { productPageTemplate } from "./templates.mjs";
import { } from "./utils.mjs";

loadHeaderFooter();

productPageTemplate("/json/cookies.json", "cookie");

