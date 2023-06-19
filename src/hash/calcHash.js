import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async (pathFile) => {
  try {
    const data = await readFile(pathFile);
    const res = createHash('sha256').update(data).digest('hex');
    console.log(res);
  } catch (e) {
    console.error(e.message);
  }
};

await calculateHash(path.join(pathDir, 'files', 'fileToCalculateHashFor.txt'));
