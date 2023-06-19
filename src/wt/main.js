import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async (pathWorkerFile) => {
  const workers = Array.from({ length: os.cpus().length }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(pathWorkerFile, { workerData: 10 + i });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
  });
  console.log(await Promise.all(workers));
};

await performCalculations(path.join(pathDir, 'worker.js'));
