const createStatsBar = async _charCode => {
  const div = createElement('div');

  addClass(div, 'stats-bar');

  const dataCharJson = await getDataCharJson(_charCode);

  console.log(dataCharJson);

  div.appendChild(createPerceptionStat());
  div.appendChild(createInvestigationStat());
  div.appendChild(createInsightStat());
  div.appendChild(createCAStat());

  return div;
};
