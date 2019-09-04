const moment = require('moment');

exports.handler = async (event, context) => {
  const body = {
    key: process.env.API_KEY,
    timestamp: moment().unix(),
    message: 'yes, hello!!!'
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body)
  };
};
