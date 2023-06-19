import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { stdin, stdout } from 'process';

const transform = async () => {
    const transformStream  = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    })
    await pipeline(stdin, transformStream, stdout);
};

await transform();