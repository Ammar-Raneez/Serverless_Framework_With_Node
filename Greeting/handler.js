"use strict";

module.exports.greeting = (event, context, callback) => {
  const name = event.pathParameters.name;
  const message = event.path === `/hello/${name}` ? `Hello, ${name}` : `Good bye, ${name}`;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message,
      // event,
      // name: event.pathParameters.name,
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
