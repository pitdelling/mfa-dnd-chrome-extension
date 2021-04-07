const elementsIteration = async (_className, _function) => {
  const elements = document.getElementsByClassName(_className);

  await Array.prototype.forEach.call(elements, async _element => {
    await _function(_element)
  });
};

const cardsIteration = _function => {
  elementsIteration('ddb-campaigns-character-card-wrapper', _function);
};

const circleStatsIteration = _function => {
  elementsIteration('circle-stat', _function);
};

const addElementsOnCard = async _card => {
  const hyperlinkCharElement = _card.getElementsByClassName('ddb-campaigns-character-card-header-upper-details-link')[0];
  const charHrefLink = hyperlinkCharElement.getAttribute('href');
  const charCode = charHrefLink.substring(charHrefLink.lastIndexOf('/') + 1);

  const statsBar = await createStatsBar(charCode);

  _card.appendChild(statsBar);
};

const addElementsOnCards = () => {
  cardsIteration(addElementsOnCard);
};

const addElementsOnWebsite = async () => {
  addElementsOnCards();
};

const showStat = _stat => {
  addClass(_stat, 'circle-stat-ready');
};

const showStats = () => {
  circleStatsIteration(showStat);
};
