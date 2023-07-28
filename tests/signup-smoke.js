import http from 'k6/http';
import { sleep, check } from 'k6';
import uuid from './libs/uuid.js';

export const options = {
  vus: 1,
  duration: '1m',
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
  
  console.log(res.body)

  check(res, {
    'status should be 201': (r) => r.status === 201     
 })

   sleep(1);
    
}
