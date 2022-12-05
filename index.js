import stream from "stream";

import { ReadableStream } from "./src/Read.js";
import { TransformStream } from "./src/Transform.js";
import { WritableStream } from "./src/Write.js";

const url = "https://jsonplaceholder.typicode.com/posts";

const start = async () => {
  const apiConfig = {
    url,
  };

  const options = {
    objectMode: true,
  };

  const read = new ReadableStream(apiConfig, options);
  const transform = new TransformStream(options);
  const write = new WritableStream(options);

  stream.pipeline(read, transform, write, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};

start()
  .then(() => {
    console.log("Started");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
