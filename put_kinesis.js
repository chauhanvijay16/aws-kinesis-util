const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
AWS.config.apiVersions = { kinesis: '2013-12-02' };
let meta_data = require('./template1');

let obj_p = JSON.parse(JSON.stringify(meta_data));
let obj_l = JSON.parse(JSON.stringify(meta_data));
let obj_lp = JSON.parse(JSON.stringify(meta_data));
let obj_a = JSON.parse(JSON.stringify(meta_data));
let obj_o = JSON.parse(JSON.stringify(meta_data));
let obj_s = JSON.parse(JSON.stringify(meta_data));

var kinesis = new AWS.Kinesis();

let prop_id_start = 8830919500;

let evt_types = ['p', 'l', 'pl', 'a', 'o', 's'];

let getRandomSource = function() {
  return evt_types[Math.floor(Math.random() * evt_types.length)];
};

let events_no = 10;

if (process.argv.length > 2) {
  events_no = parseInt(process.argv[2], 10);
}

var params = {
  Records: [],
  StreamName: 'doc-builder-msg-filter-tagger'
};

console.log('No of events: ', events_no);
for (let i = 0; i < events_no; i++) {
  let obj_temp = JSON.parse(JSON.stringify(meta_data));
  obj_temp.event.source = getRandomSource();
  obj_temp.h.id = 'P' + prop_id_start + '|L613148883';
  prop_id_start++;

  params.Records.push({
    Data: new Buffer(JSON.stringify(obj_temp)),
    PartitionKey: i + ''
  });
}

kinesis.putRecords(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
