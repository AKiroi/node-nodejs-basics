import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const rename = async (curFilePath, nextFilePath) => {
  const isExists = async (path) =>
    await fs.access(path)
      .then(() => true)
      .catch(() => false);

  try {
    if (!(await isExists(curFilePath)) || (await isExists(nextFilePath))) {
      throw new Error('FS operation failed');
    } 
    await fs.rename(curFilePath, nextFilePath);
  } catch (e) {
    console.error(e.message);
  }
};

await rename(
  path.join(pathDir, 'files', 'wrongFilename.txt'),
  path.join(pathDir, 'files', 'properFilename.md'),
);
