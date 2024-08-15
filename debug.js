const { handler } = require("./src");
const data = require("./data.json");

require("dotenv").config();
const debug = async (event) => {
    const response = await handler(event);
    console.log(response);
};

debug(data);