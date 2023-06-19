import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const write = async (pathFile) => {
  const writeStream = createWriteStream(pathFile, { flags: 'a' });
  process.stdout.write('Enter the text:\n');
  await pipeline(process.stdin, writeStream);
};

await write(path.join(pathDir, 'files', 'fileToWrite.txt'));
