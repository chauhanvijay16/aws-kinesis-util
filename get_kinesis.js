const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
AWS.config.apiVersions = { kinesis: '2013-12-02' };

var kinesis = new AWS.Kinesis();

var params = {
  ShardId: 'shardId-000000000000' /* required */,
  ShardIteratorType: 'TRIM_HORIZON',
  StreamName: 'ingress-stream' /* required */
};
kinesis.getShardIterator(params, function(err, data) {
  if (err) console.log(err, err.stack);
  console.log(data);
  var params = {
    ShardIterator: 'STRING_VALUE',
    Limit: 0
  };
  kinesis.getRecords(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  }); // successful response
});
