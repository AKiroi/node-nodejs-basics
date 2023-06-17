import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.resolve(dirname, 'files', 'fresh.txt');

const create = async () => {
	try {
		await writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
	} catch {
		throw new Error('fs operation failed');
	}
};

await create();
