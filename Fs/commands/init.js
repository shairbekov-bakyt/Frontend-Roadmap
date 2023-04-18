import fs from "fs";
import { isExists } from "./helpers.js";

const BASE_DIR = ".init_fs";

export default function initFs() {
  let isFileExists = isExists(BASE_DIR);
  if (!isFileExists) {
    console.error("file system already initialized");
    return;
  }
  fs.writeFile(BASE_DIR, "", (err) => {
    if (err) {
      throw err;
    }
    console.log("file system initialized success");
  });
}
