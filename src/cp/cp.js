import { parentPort, Worker } from "worker_threads";
import os from "node:os";

const spawnChildProcess = async (args) => {
  const filePath = new URL("./files/script", import.meta.url);
  const worker = new Worker(filePath, { data: args });

  // Write your code here
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
