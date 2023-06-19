import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const read = async (pathFile) => {
  createReadStream(pathFile).pipe(process.stdout);
};

await read(path.join(pathDir, 'files', 'fileToRead.txt'));
