import http from 'k6/http';
import { sleep, check } from 'k6';
import uuid from './libs/uuid.js';

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export const options = {
  stages: [
    { duration: '10m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '30m', target: 200 }, // stay at higher 200 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisiçoes devem responder em ate 2s
    http_req_failed: ['rate<0.01'] // 1% das requisições podem ocorrer erro 
  }
}

// 62e8a053-3d08-49a3-92ae-d0109af33da7
//@qa.qacademy.com.br

export default function () {
  const url = 'http://localhost:3333/signup'
  
  const payload = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qa.qacademy.com.br`,
    password: 'pwd123'
  })

  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }
  const res = http.post(url, payload, headers)


  check(res, {
    'status should be 201': (r) => r.status === 201     
 })

   sleep(1);
    
}
