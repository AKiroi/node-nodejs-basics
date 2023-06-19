import { fileURLToPath } from 'url';
import path from 'node:path';
import { fork } from 'child_process';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args, pathFile) => {
  try {
    const childProcess = fork(pathFile, args, { stdio: 'pipe' });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
  } catch (e) {
    console.error(e);
  }
};

spawnChildProcess(['someArgument1', 'someArgument2'], path.join(pathDir, 'files', 'script.js'));
