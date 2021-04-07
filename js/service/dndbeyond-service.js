const getDataCharBeyondJson = async _charCode => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const data = await fetch('https://character-service.dndbeyond.com/character/v4/character/' + _charCode, config);
  const dataJson = await data.json();

  return dataJson;
};

const getDataCharJson = async _charCode => {
  const rawData = await getDataCharBeyondJson(_charCode);

  const polishedData = rawData;

  return polishedData;
};
