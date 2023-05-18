import { mkdir, access, copyFile, readdir } from "node:fs/promises";
const folderEnd = new URL("./files_copy/", import.meta.url);
const folderStart = new URL("./files/", import.meta.url);

const copy = async () => {
  // Write your code here
  try {
    await mkdir(folderEnd, { recursive: false });
    const files = await readdir(folderStart, { withFileTypes: true });
    for (const file of files) {
      await copyFile(
        new URL(file.name, folderStart),
        new URL(file.name, folderEnd)
      );
    }
  } catch (err) {
<<<<<<< HEAD
    throw Error(`\u001B[31mFS operation failed\u001B[0m ${err.message}`);
=======
    throw Error("FS operation failed", err.message);
>>>>>>> 3b942e5 (feat: add raname)
  }
};

await copy();
