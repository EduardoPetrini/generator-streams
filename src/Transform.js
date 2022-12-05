import stream from "stream";

class TransformStream extends stream.Transform {
  constructor(options) {
    super(options)
  }

  _transform(chunk, encoding, callback) {
    const [item1, item2] = chunk;
    const timestamp = new Date().toISOString().replace(/:|\./g,"-");

    const filename = `output-${item1.id}-${item2.id}-${timestamp}.json`;

    const fileContent = JSON.stringify(chunk);

    this.push({filename, fileContent});

    callback();
  }
}

export { TransformStream };
