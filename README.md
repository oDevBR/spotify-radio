[![codecov](https://codecov.io/gh/whisoer/spotify-radio/branch/main/graph/badge.svg?token=KEF8X9Z8DU)](https://codecov.io/gh/whisoer/spotify-radio)
# Spotify Radio - Semana JS Expert 6.0

Projeto realizado na Semana Javascript Expert ministrado por [Erick Wendel](https://www.linkedin.com/in/erickwendel/).

## Preview

<img src="./prints/demo.png" />

## Checklist Features

- Web API
    - [X] Deve atingir 100% de cobertura de código em testes
    - [X] Deve ter testes de integração validando todas as rotas da API
    - [X] Deve entregar arquivos estáticos como Node.js Stream
    - [X] Deve entregar arquivos de música como Node.js Stream
    - [X] Dado um usuário desconectado, não deve quebrar a API
    - [X] Mesmo que vários comandos sejam disparados ao mesmo tempo, não deve quebrar a API
    - [X] Caso aconteça um erro inesperado, a API deve continuar funcionando
    - [X] O projeto precisa ser executado em ambientes Linux, Mac e Windows

- Web App 
    - Client
        - [X] Deve reproduzir a transmissão
        - [X] Não deve pausar se algum efeito for adicionado
    - Controller
        - [X] Deve atingir 100% de cobertura de código em testes
        - [X] Deve poder iniciar ou parar uma transmissão 
        - [ ] Deve enviar comandos para adicionar audio efeitos à uma transmissão

## Tarefas por aula

- Aula 01: Cobrir as camadas service e route com testes unitários e alcançar 100% de code coverage
- Aula 02: Manter 100% de code coverage e implementar testes e2e para toda a API
- Aula 03: implementar testes unitários para o frontend e manter 100% de code coverage
- **PLUS**: 
    - [ ] disponibilizar um novo efeito
        - [ ] adicionar um botão novo no controlador
        - [ ] adicionar um som de efeito novo para a pasta `audios/fx/`
        - [ ] republicar no heroku

### Considerações
- Tire suas dúvidas sobre os desafios em nossa comunidade, o objetivo é você aprender de forma divertida. Surgiu dúvidas? Pergunte por lá!

- Ao completar qualquer um dos desafios, envie no canal **#desafios** da comunidade no **Discord**

### Créditos aos áudios usados

#### Transmissão 
- [English Conversation](https://youtu.be/ytmMipczEI8)

#### Efeitos
- [Applause](https://youtu.be/mMn_aYpzpG0)
- [Applause Audience](https://youtu.be/3IC76o_lhFw)
- [Boo](https://youtu.be/rYAQN11a2Dc)
- [Fart](https://youtu.be/4PnUfYhbDDM)
- [Laugh](https://youtu.be/TZ90IUrMNCo)
