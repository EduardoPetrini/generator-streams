import stream from "stream";
import fs from "fs/promises";

class WritableStream extends stream.Writable {
  constructor(options) {
    super(options)
  }

  async _write(chunk, encoding, callback) {
    const {filename, fileContent} = chunk;

    console.log(`Persisting to ${filename}`);

    await fs.writeFile(`output/${filename}`, fileContent);
    callback();
  }
}

export { WritableStream };
