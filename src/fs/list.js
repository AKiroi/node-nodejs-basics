import { readdir, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const list = async (path) => {
  try {
    if (
      !(await access(path)
        .then(() => true)
        .catch(() => false))
    ) {
      throw new Error('FS operation failed');
    }
    console.log(await readdir(path));
  } catch (e) {
    console.error(e.message);
  }
};

await list(path.join(pathDir, 'files'));
