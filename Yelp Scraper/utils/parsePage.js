const cheerio = require("cheerio");

module.exports = (page) => {
  try {
    const $ = cheerio.load(page);
    const rating = $(".i-stars__373c0__1T6rz")["15"].next.attribs.content;
    const reviewCount = $(".css-bq71j2")["0"].children[0].data.split(" ")[0];

    const yelpData = {
      rating,
      reviewCount,
    };

    return Promise.resolve(yelpData);
  } catch (error) {
    return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`);
  }
};
