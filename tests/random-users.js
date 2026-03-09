import http from "k6/http";
import { sleep } from "k6";
import { basicChecks } from "../lib/checks.js";

export const options = {
  vus: 5,
  duration: "20s"
};

export default function () {
  const randomPost = Math.floor(Math.random() * 100) + 1;

  const res = http.get(
    `https://jsonplaceholder.typicode.com/posts/${randomPost}`
  );

  basicChecks(res);

  sleep(Math.random() * 3);
}
