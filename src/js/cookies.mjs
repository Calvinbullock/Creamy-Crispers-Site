
import { loadHeaderFooter } from "./utils";
import { productPageTemplate } from "./templates.mjs";

loadHeaderFooter();

productPageTemplate("/public/json/cookies.json");

