#!/bin/bash

echo "Running K6 load test..."

k6 run   --summary-export=results.json   tests/load.js
