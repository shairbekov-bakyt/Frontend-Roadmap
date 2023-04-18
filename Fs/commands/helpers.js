import fs from "fs";

export function isExists(path) {
  try {
    fs.accessSync(path, fs.constants.F_OK);
    return false;
  } catch (err) {
    return true;
  }
}
