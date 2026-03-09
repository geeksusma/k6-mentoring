# k6-mentoring

![K6](https://img.shields.io/badge/tested%20with-k6-blue)
![Load Testing](https://img.shields.io/badge/type-load%20testing-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A minimal project for mentoring sessions demonstrating **performance testing with K6**.

This repository covers:

- Running tests with K6
- Writing assertions using `check`
- Configuring ramp-up and ramp-down stages
- Understanding key performance metrics and thresholds

API used: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

## Test Overview

| Test | Purpose | Ramp / Stage | Expected Result |
|------|---------|--------------|----------------|
| `smoke.js` | Validate a single endpoint works | VUs = 1, iterations = 5 | Pass, basic check of status & response |
| `load.js` | Simulate steady load | Ramp-up to 10 VUs, steady, ramp-down | Pass, demonstrates load stages |
| `stress.js` | Find system limits | Ramp-up to 100 VUs, then ramp-down | Pass unless system saturates; demonstrates stress testing |
| `random-posts.js` | Simulate realistic traffic with varying resources | 5 VUs requesting random posts | Pass, shows variability and think time |
| `thresholds-demo.js` | Show threshold failures for demonstration | 10 VUs, strict SLA | Expected to fail `http_req_duration` (50ms) to illustrate thresholds |

---

## Stages (Ramp-Up / Ramp-Down)

**Ramp-Up / Ramp-Down** control how virtual users (VUs) increase or decrease during the test.

### Example: `stress.js`

Stage 1: 0 → 20 VUs (20s)
Stage 2: 20 → 50 VUs (20s)
Stage 3: 50 → 100 VUs (20s)
Stage 4: 100 → 0 VUs (20s)


**Graphical representation:**

VUs
100 | *
90 | *
50 | *
20 | *
0 |*
-----------------> time
20s 20s 20s 20s


### Example: `load.js`

Stage 1: 0 → 10 VUs (20s)
Stage 2: 10 VUs steady (40s)
Stage 3: 10 → 0 VUs (20s)


**Graphical representation:**
VUs
10 |****
0 |*
20s 40s 20s


---

## Thresholds

Thresholds define **performance requirements**. If they are not met, the test fails.

### Example: `thresholds-demo.js`

```javascript
http_req_duration: ["p(95)<50"]  // 95% of requests must finish under 50ms
```

⚠️ Expected failure: The API response times are normally >50ms.
Purpose: Demonstrate how K6 fails tests when thresholds are not met — useful in CI/CD pipelines.

## Metrics to observe

* http_req_duration → Request latency

* http_req_failed → Error rate

* vus → Number of virtual users

* iterations → Number of executed requests

## Running Tests

### Smoke test
k6 run tests/smoke.js

### Load test
k6 run tests/load.js

### Stress test
k6 run tests/stress.js

### Random posts test
k6 run tests/random-posts.js

### Threshold demo (expected to fail)
k6 run tests/thresholds-demo.js

## Notes

* Always run scripts from the root of the repo.

* scripts/run-load.sh is a helper script that can be executed from any location.

* random-posts.js fetches different posts randomly to simulate realistic user traffic.

* thresholds-demo.js is designed to fail so you can show how thresholds work.