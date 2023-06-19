import { createReadStream, createWriteStream } from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const compress = async (curFilePath, arhFilePath) => {
  try {
    await pipeline(createReadStream(curFilePath), createGzip(), createWriteStream(arhFilePath));
  } catch (e) {
    console.error(e.message);
  }
};

await compress(
  path.join(pathDir, 'files', 'fileToCompress.txt'),
  path.join(pathDir, 'files', 'archive.gz'),
);
