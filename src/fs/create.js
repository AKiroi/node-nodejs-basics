import { writeFile, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const create = async (pathFile) => {
  try {
    if (
      await access(pathFile)
        .then(() => true)
        .catch(() => false)
    ) {
      throw new Error('fs operation failed');
    }
    await writeFile(pathFile, 'I am fresh and young', { flag: 'wx' });
  } catch (e) {
    console.error(e.message);
  }
};

await create(path.join(pathDir, 'files', 'fresh.txt'));
