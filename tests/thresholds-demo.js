import http from "k6/http";
import { sleep } from "k6";
import { basicChecks } from "../lib/checks.js";

export const options = {
  vus: 10,
  duration: "20s",
  thresholds: {
    http_req_duration: ["p(95)<50"],
    http_req_failed: ["rate<0.01"]
  }
};

export default function () {
  const res = http.get("https://jsonplaceholder.typicode.com/posts");
  basicChecks(res);
  sleep(1);
}
