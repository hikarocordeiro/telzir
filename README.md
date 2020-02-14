<h1 align="center">
    Telzir
</h1>

<h4 align="center">
  Code challenge
</h4>

<p align="center">
  <a href="#question-challenge">Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :question: Challenge

<p>
A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.
Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
de origem e destino:

| Origem | Destino | $/min |
| --- | --- | --- |
| 011 | 016 | 1.90 |
| 016 | 011 | 2.90 |
| 011 | 017 | 1.70 |
| 017 | 011 | 2.70 |
| 011 | 018 | 0.90 |
| 018 | 011 | 1.90 |

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
<br />
A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
problema.

Ex.

| Origem | Destino | Tempo | Plano FaleMais | Com FaleMais | Sem FaleMais |
| --- | --- | --- | --- | --- | --- |
| 011 | 016 | 20 | FaleMais 30 | $ 0.00 | $ 38.00 |
| 011 | 017 | 80 | FaleMais 60 | $ 37.40 | $ 136.00 |
| 018 | 011 | 200 | FaleMais 120 | $ 167.20 | $ 380.00 |
| 018 | 017 | 100 | FaleMais 30 | - | - |

</p>

## :gear: Technologies

This project was developed with the following technologies:

-  [ReactJS](https://reactjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Router](https://github.com/ReactTraining/react-router)
-  [Axios](https://github.com/axios/axios)
-  [styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [json-server](https://github.com/typicode/json-server)
-  [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] and [Yarn][yarn] installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/hikarocordeiro/telzir.git

# Enter directory
$ cd telzir

# Install dependencies
$ yarn install

# Run json-server
$ yarn json-server --watch server.json --port 3333

# Run the app (in a new terminal)
$ yarn start
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/hikarocordeiro/telzir/blob/master/LICENSE) for more information.

---

Made with ♥ by Hikaro Cordeiro :wave: [Get in touch!](https://www.linkedin.com/in/hikaro-cordeiro/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
