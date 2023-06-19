import { access, cp } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const copy = async (curDir, copyDir) => {
  const isExists = async (path) =>
    await access(path)
      .then(() => true)
      .catch(() => false);

  try {
    if (!(await isExists(curDir)) || (await isExists(copyDir))) {
      throw new Error('FS operation failed');
    } else {
      await cp(curDir, copyDir, { recursive: true });
    }
  } catch (e) {
    console.error(e.message);
  }
};

await copy(path.join(pathDir, 'files'), path.join(pathDir, 'files_copy'));
