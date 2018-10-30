#!/bin/bash

SHARD_ITERATOR=$(aws kinesis get-shard-iterator --shard-id shardId-00000000001 --shard-iterator-type TRIM_HORIZON --stream-name ingress-stream --query 'ShardIterator')

aws kinesis get-records --shard-iterator $SHARD_ITERATOR
