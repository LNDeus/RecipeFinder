# RecipeFinder

### Sobre o projeto:
Este projeto foi construído para o processo de avaliação de candidatos da DeliveryMuch

O desafio: "Você deve construir uma API que recebe ingredientes como parâmetro
 de entrada em uma chamada GET e retorna uma lista de receitas. Utilize as 
 APIs públicas da RecipePuppy (http://www.recipepuppy.com/about/api/) e da 
 Giphy (https://developers.giphy.com/docs/) para obter os dados necessários."

Todos os requisitos do projeto podem ser encontrados 
[aqui](https://github.com/delivery-much/challenge).

### A aplicação

#### Tecnologias

Abaixo está a lista de tecnologias utilizadas no projeto e a utilização de cada 
uma:
 - Eslint - Verifica e mantém os padrões do código;
 - Commitlint - Checa e ajuda a manter os padrões de escrita das mensagens de commit;
 - Husky - Gerenciador de comandos a serem executados nos hooks do git;
 - Jest - Execução de testes unitários;
 - PM2 - Gerenciador de processos para node;
 - Docker - Containerizar e executar o projeto;
 - Axios - Requisições para serviços externos;
 
#### Rodando o projeto
O serviço foi construído em Node.js, com Express. Para iniciar o projeto na sua
 máquina, os únicos pré-requisitos são a prévia instalação do 
 [Docker](https://docs.docker.com/engine/install/) e 
 [Docker Compose](https://docs.docker.com/compose/install/). Tendo todos os 
 requisitos instalados, siga os passos:

```shell script
$ git clone https://github.com/LNDeus/RecipeFinder.git RecipeFinder # clona o projeto na sua máquina
$ cd RecipeFinder # entra na pasta raíz do projeto
$ echo 'GIPHY_API_KEY=zUz5AmqolSraYorcElgzZrsuh1IG8oZb' > .env # Cria um arquivo com variáveis de ambiente
$ docker-compose up -d && docker-compose logs --tail 10 -f # inicia o projeto e exibe seus logs
```

Com isso, basta começarmos a fazer requisições para a API, que estará escutando
 à porta 80, por padrão.
