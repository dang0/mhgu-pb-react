const defItem = (obj = {}, label = EMPTY_STRING, desc = EMPTY_STRING, cost = 0, rates = NO_RATES, unlock = EMPTY_STRING) => {
  let rv = {
    label: label,
    desc: desc,
    cost: cost,
    bhernaRate: rates[0],
    kokotoRate: rates[1],
    pokkeRate: rates[2],
    yukumoRate: rates[3],
    unlock: unlock
  };
  return Object.assign({}, obj, rv);
}

const defMove = (label, desc, cost, rates, unlock, fortes = ['']) => {
  return defItem({ type: MOVE, fortes: fortes }, ...arguments);
}

const defSkill = (label, desc, cost, rates, unlock, subtype) => {
  return defItem({ type: SKILL, subtype: subtype }, ...arguments);
}

export {
  defMove,
  defSkill
};
