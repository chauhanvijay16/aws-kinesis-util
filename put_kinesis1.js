const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
AWS.config.apiVersions = { kinesis: '2013-12-02' };
let meta_data = require('./template');

let obj_p = JSON.parse(JSON.stringify(meta_data));
let obj_l = JSON.parse(JSON.stringify(meta_data));
let obj_lp = JSON.parse(JSON.stringify(meta_data));
let obj_a = JSON.parse(JSON.stringify(meta_data));
let obj_o = JSON.parse(JSON.stringify(meta_data));
let obj_s = JSON.parse(JSON.stringify(meta_data));
let obj_h = JSON.parse(JSON.stringify(meta_data));
let obj_hp = JSON.parse(JSON.stringify(meta_data));

var kinesis = new AWS.Kinesis();

obj_p.event.source = 'p';
obj_p.h.id = 'P8830919321|L613148883';

obj_l.event.source = 'l';
obj_l.h.id = 'P8830919322|L613148883';

obj_lp.event.source = 'lp';
obj_lp.h.id = 'P8830919323|L613148883';

obj_a.event.source = 'a';
obj_a.h.id = 'P8830919324|L613148883';

obj_o.event.source = 'o';
obj_o.h.id = 'P8830919325|L613148883';

obj_s.event.source = 's';
obj_s.h.id = 'P8830919326|L613148883';

obj_h.event.source = 'h';
obj_h.h.id = 'P8830919327|L613148883';

obj_hp.event.source = 'hp';
obj_hp.h.id = 'P8830919328|L613148883';

var params = {
  Records: [
    {
      Data: new Buffer(JSON.stringify(obj_p)),
      PartitionKey: '8830919321'
    },
    {
      Data: new Buffer(JSON.stringify(obj_l)),
      PartitionKey: '8830919322'
    },
    {
      Data: new Buffer(JSON.stringify(obj_lp)),
      PartitionKey: '8830919323'
    },
    {
      Data: new Buffer(JSON.stringify(obj_a)),
      PartitionKey: '8830919324'
    },
    {
      Data: new Buffer(JSON.stringify(obj_o)),
      PartitionKey: '8830919325'
    },
    {
      Data: new Buffer(JSON.stringify(obj_s)),
      PartitionKey: '8830919326'
    },
    {
      Data: new Buffer(JSON.stringify(obj_h)),
      PartitionKey: '8830919327'
    },
    {
      Data: new Buffer(JSON.stringify(obj_hp)),
      PartitionKey: '8830919328'
    }
  ],
  StreamName: 'slpa-ingress-stream'
};
kinesis.putRecords(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
