const axios = require("axios");
const BASE_URL = "http://localhost:5001";
const constellationsUrl = `${BASE_URL}/constellations`;

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    const exists = data.find(({ name }) => name === leo.name);
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(constellationsUrl, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log);