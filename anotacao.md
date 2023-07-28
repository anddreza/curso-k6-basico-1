
1. Rodar o test do Cypress:
k6 run hello.js

2. Rodar com 10 usuários simultaneos no curso-k6-basico/tests:
k6 run --vus 10 --duration 30s hello.js

3. O teste k4 run signup.js:
Em teste na aula 'Avaliando perfomance da rota signup' acaba apresentando problema, 
então o professor dropou a Collections, depois de realizar isso ele acabou tirando a 
API do ar, pois isso vai recriar a estrutura de dado com base das implementações da API com base nas implementações do BD. 

4. Sempre que dropar o banco, então tira a API do ar, coloca novamente, e roda o comando de k6 run signup.js (dependendo do nome do arquivo)

5. Massa de teste dinâmica com UUID
Usar a forma de instalação dessa aqui: https://k6.io/docs/examples/generating-uuids/

5. Pametrizando vUS e Duration no script de teste
Alteração somente na const options (tem que ser exatamente esse nome)

6. Smoke testing (teste de fumaça)
Ler mais sobre isso, foi criado o signup-smoke.js que especifica mais ou menos como ocorre. 

7. Como fazer esse report? 
https://github.com/benc-uk/k6-reporter

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
