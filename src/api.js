import fetch from "node-fetch";
const apiGet = async function* ({ url }) {
  while (true) {
    const response = await fetch(url);

    const jsonData = await response.json();

    for (const data of jsonData) {
      yield data;
    }
    return { done: true };
  }
};

export { apiGet };
