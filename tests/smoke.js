import http from 'k6/http';
import { sleep } from 'k6';
import { basicChecks } from '../lib/checks.js';

export const options = {
  vus: 1,
  iterations: 5
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1');
  basicChecks(res);
  sleep(1);
}
