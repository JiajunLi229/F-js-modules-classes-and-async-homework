import { ADDRESS, PORT, PATH } from "./constant";
import { getURL } from "./utils";

const url = getURL(ADDRESS, PORT, PATH);
export { REGION as region } from "./constant";
export { url };
