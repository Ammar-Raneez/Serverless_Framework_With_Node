"use strict";

module.exports.s3Notification = (event, context, callback) => {
  console.log(event.Records[0].s3);
  // extract S3 data from the event object
  const uploadedData = event.Records.map(record => {
    return {
      bucketName: record.s3.bucket.name,
      file: record.s3.object.key,
      fileSize: record.s3.object.size
    }
  })
  console.log(uploadedData);

  // generate an email using the data above

  // send the email

  // send a response

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);
};
