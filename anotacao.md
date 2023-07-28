
1. Rodar o test do Cypress:
k6 run hello.js

2. Rodar com 10 usuários simultaneos no curso-k6-basico/tests:
k6 run --vus 10 --duration 30s hello.js

3. O teste k4 run signup.js:
Em teste na aula 'Avaliando perfomance da rota signup' acaba apresentando problema, 
então o professor dropou a Collections, depois de realizar isso ele acabou tirando a 
API do ar, pois isso vai recriar a estrutura de dado com base das implementações da API com base nas implementações do BD. 

4. Sempre que dropar o banco, então tira a API do ar, coloca novamente, e roda o comando de k6 run signup.js (dependendo do nome do arquivo)