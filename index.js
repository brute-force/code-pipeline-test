exports.handler = async (event, context) => {
  const body = {
    key: process.env.API_KEY
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body)
  };
};
