import stream from "stream";
import { apiGet } from "./api.js";

class ReadableStream extends stream.Readable {
  constructor(apiConfig, options) {
    super(options);
    this.apiGet = apiGet(apiConfig);
    this.limit = 2;
  }

  async _read(size) {
    let count = 0;
    const list = [];
    let isDone = false;

    while (count < this.limit) {
      const data = await this.apiGet.next();

      const { done } = data;
      if (done) {
        isDone = true;
        break;
      }

      list.push(data.value);
      count++;
    }

    if (list.length) {
      this.push(list);
    }
  }
}

export { ReadableStream };
