import { check } from 'k6';

export function basicChecks(response) {
  return check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
    'body is not empty': (r) => r.body && r.body.length > 0
  });
}
