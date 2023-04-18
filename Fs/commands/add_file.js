import fs from "fs";

import { isExists } from "./helpers.js";

export default function addFile(...args) {
  if (args.length != 2) {
    console.log("command add takes two position argument");
    return;
  }
  let [sourceFile, targetFile] = args;
  let [isSourceFile, isTargetFile] = [
    isExists(sourceFile),
    isExists(targetFile),
  ];

  if (isSourceFile) {
    console.log("file not found");
    return;
  }

  if (!isTargetFile) {
    console.log("file already exists");
    return;
  }
  fs.renameSync(sourceFile, targetFile);
}
