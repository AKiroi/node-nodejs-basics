import { access, rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const remove = async (pathFile) => {
  try {
    if (
      !(await access(pathFile)
        .then(() => true)
        .catch(() => false))
    ) {
      throw new Error('fs operation failed');
    }
    await rm(pathFile);
  } catch (e) {
    console.error(e.message);
  }
};

await remove(path.join(pathDir, 'files', 'fileToRemove.txt'));
