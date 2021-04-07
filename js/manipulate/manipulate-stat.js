const createNumberStats = _valueStat => {
  if (_valueStat) {
    const span = createElement('span');

    addClass(span, 'number-stats');

    span.textContent = _valueStat;

    return span;
  } else {
    throw "Variável '_valueStat' do método 'createNumberStats' está vazia."
  }
}

const createCircleStat = (_logo, _valueStat) => {
  if (_logo && _valueStat) {
    const div = createElement('div');

    addClass(div, 'col-12');
    addClass(div, 'circle-stat');

    div.appendChild(_logo);

    const numberStats = createNumberStats(_valueStat);

    div.appendChild(numberStats);

    return div;
  } else {
    throw "Variável '_logo' ou '_valueStat' do método 'createCircleStat' está vazia."
  }
};

const createStatDefault = (_logo, _valueStat, _classNameStat) => {
  if (_logo && _valueStat) {
    const div = createElement('div');

    addClass(div, 'col-3');
    addClass(div, _classNameStat);
    
    const circleStat = createCircleStat(_logo, _valueStat);

    div.appendChild(circleStat);

    return div;
  } else {
    throw "Variável '_logo' ou '_valueStat' do método 'createStatDefault' está vazia."
  }
};

const createCAStat = (_valueStat = 1) => {
  if (_valueStat) {
    const logo = createLogoCA();

    return createStatDefault(logo, _valueStat, 'ca');
  } else {
    throw "Variável '_valueStat' do método 'createCAStat' está vazia."
  }
};

const createInsightStat = (_valueStat = 1) => {
  if (_valueStat) {
    const logo = createLogoInsight();

    return createStatDefault(logo, _valueStat, 'insight');
  } else {
    throw "Variável '_valueStat' do método 'createInsightStat' está vazia."
  }
};

const createInvestigationStat = (_valueStat = 1) => {
  if (_valueStat) {
    const logo = createLogoInvestigation();

    return createStatDefault(logo, _valueStat, 'investigation');
  } else {
    throw "Variável '_valueStat' do método 'createInvestigationStat' está vazia."
  }
};

const createPerceptionStat = (_valueStat = 1) => {
  if (_valueStat) {
    const logo = createLogoPerception();

    return createStatDefault(logo, _valueStat, 'perception');
  } else {
    throw "Variável '_valueStat' do método 'createPerceptionStat' está vazia."
  }
};
