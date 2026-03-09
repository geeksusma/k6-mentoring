# k6-mentoring

![K6](https://img.shields.io/badge/tested%20with-k6-blue)
![Load Testing](https://img.shields.io/badge/type-load%20testing-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A minimal project used in mentoring sessions to demonstrate **performance testing with K6**.

This repository covers the basics:

- Running tests with K6
- Writing assertions using `check`
- Configuring ramp-up and ramp-down
- Understanding key performance metrics

The examples use a public test API:

https://jsonplaceholder.typicode.com

---

# Requirements

Install K6:

https://k6.io/docs/get-started/installation/

Verify installation:

```bash
k6 version
```

---

# Running tests

## Smoke test

```bash
k6 run tests/smoke.js
```

## Load test

```bash
k6 run tests/load.js
```

## Stress test

```bash
k6 run tests/stress.js
```

## Threshold demo

```bash
k6 run tests/thresholds-demo.js
```

## Dynamic users example

```bash
k6 run tests/random-users.js
```

---

# Project structure

```
k6-mentoring
│
├── tests        # k6 test scripts
├── lib          # reusable assertions
└── scripts      # helper scripts
```

---

# Important metrics

K6 prints a summary after each run:

- `http_req_duration` → request latency
- `http_req_failed` → error rate
- `vus` → number of virtual users
- `iterations` → executed requests

---

# License

MIT
