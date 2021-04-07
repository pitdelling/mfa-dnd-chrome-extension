const createElement = (_tag, isNs = false) => {
  if (_tag) {
    let element;

    if (isNs) {
      element = document.createElementNS('http://www.w3.org/2000/svg', _tag);
    } else {
      element = document.createElement(_tag);
    }

    addClass(element, 'dndh');

    return element;
  } else {
    throw "Variável '_tag' do método 'createElement' está vazia."
  }
}

const setAttributesConfig = (_element, _config = {}) => {
  if (_element && _config) {
    const attributes = Object.entries(_config)

    attributes.forEach(attribute => {
      const prop = attribute[0];
      const value = attribute[1];

      _element.setAttribute(prop, value);
    });
  } else {
    throw "Variável '_element' ou '_config' do método 'setAttributesConfig' está vazia."
  }
};

const addClass = (_element, _class) => {
  if (_element) {
    _element.classList.add(_class);
  } else {
    throw "Variável '_element' do método 'addClass' está vazia."
  }
};
