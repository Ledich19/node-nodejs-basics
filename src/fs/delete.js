import { unlink } from "node:fs/promises";

const fileForRemove = new URL("./files/fileToRemove.txt", import.meta.url);

const remove = async () => {
  try {
    await unlink(fileForRemove);
  } catch (err) {
    throw Error(`\u001B[31mFS operation failed\u001B[0m ${err.message}`);
  }
};

await remove();
