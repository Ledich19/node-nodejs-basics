import { writeFile } from "fs/promises";

const TEXT = "I am fresh and young";
const newFilePath = new URL("./files/fresh.txt", import.meta.url);

const create = async () => {
  try {
    await writeFile(newFilePath, TEXT, { flag: "wx" });
  } catch (err) {
    throw Error(`\u001B[31mFS operation failed:\u001B[0m`);
  }
};

await create();
