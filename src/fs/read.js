import { readFile, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const read = async (pathFile) => {
  try {
    if (
      !(await access(pathFile)
        .then(() => true)
        .catch(() => false))
    ) {
      throw new Error('FS operation failed');
    }
    console.log(await readFile(pathFile, { encoding: 'utf-8' }));
  } catch (e) {
    console.error(e.message);
  }
};

await read(path.join(pathDir, 'files', 'fileToRead.txt'));
