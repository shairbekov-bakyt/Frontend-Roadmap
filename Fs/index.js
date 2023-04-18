import initFs from "./commands/init.js";
import addFile from "./commands/add_file.js";

function main() {
  let commands = {
    init: initFs,
    add: addFile,
    del: "del",
    list: "list",
  };
  let [runtime, scriptName, ...args] = process.argv;
  let command = args[0];
  if (!commands.hasOwnProperty(command)) {
    console.log("command not found");
    return;
  }
  commands[command](...args.slice(1));
}

main();
