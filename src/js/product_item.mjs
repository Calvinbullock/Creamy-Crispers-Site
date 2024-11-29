
import { getParam } from "../../CSE330-group3/src/js/utils.mjs";
import { loadHeaderFooter } from "./utils";

loadHeaderFooter();

const catagory = getParam("catagory");
const id = getParam("id");

console.log(catagory);
console.log(id);

