function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia" />
    </li>
        `
}

let delay = -0.3 /*  Animações e tansições */
function createCard(date, day, games) {
  delay = delay + 0.3

  return `<div class="card" style="animation-delay: ${delay}s">
  <h2>${date}<span> ${day}</span></h2>
  <ul>
      ${games} 
  </ul>
</div>`
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'Quinta-feira', createGame('brazil', '16:00', 'serbia')) + // o sinal de mais foi inserido depois do regaturamento
  createCard(
    '28/11',
    'Segunda-feira',
    createGame('switzerland', '13:00', 'brazil') // + createGame('switzerland', '13:00', 'brazil') caso quiser adcionar outro jogos no mesmo dia no caso (MESMO CONTEINER) basta coloca o sinal de mais (+).
  ) + // o sinal de mais foi inserido depois do regaturamento
  createCard('02/12', 'Sexta-feira', createGame('brazil', '16:00', 'cameroon'))

// ---- >>>> Refactor
// * Mudar o código, sem mudas o comportamento
// * Mais clareza e melhoria para o código

// Este codigo foi refaturado, pois não tem String

/*
 ${createCard(
  '24/11',
  'Quinta-feira',
  createGame('brazil', '16:00', 'serbia')
)}
${createCard(
  '28/11',
  'Segunda-feira',
  createGame('switzerland', '13:00', 'brazil') // + createGame('switzerland', '13:00', 'brazil') caso quiser adcionar outro jogos no mesmo dia no caso (MESMO CONTEINER) basta coloca o sinal de mais (+).
)}
${createCard(
  '02/12',
  'Sexta-feira',
  createGame('brazil', '16:00', 'cameroon')
)} */
