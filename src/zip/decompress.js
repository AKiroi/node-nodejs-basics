import { createReadStream, createWriteStream } from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createUnzip } from 'zlib';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const compress = async (arhFilePath, curFilePath) => {
  try {
    await pipeline(createReadStream(arhFilePath), createUnzip(), createWriteStream(curFilePath));
  } catch (e) {
    console.error(e.message);
  }
};

await compress(
  path.join(pathDir, 'files', 'archive.gz'),
  path.join(pathDir, 'files', 'fileToCompress.txt'),
);