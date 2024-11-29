
import { loadHeaderFooter } from "./utils";
import { productPageTemplate } from "./templates.mjs";

loadHeaderFooter();

productPageTemplate("/json/cookies.json", "cookie");

