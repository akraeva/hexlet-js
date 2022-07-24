const whoIsThisHouseToStarks = (house) => {
  let houseKind;
  if (house === 'Karstark' || house === 'Tally') {
    houseKind = 'friend';
  } else if (house === 'Lannister' || house === 'Frey') {
    houseKind = 'enemy';
  } else {
    houseKind = 'neutral';
  }
  return houseKind;
};

const test = whoIsThisHouseToStarks('Karstark') === 'friend'
    && whoIsThisHouseToStarks('Frey') === 'enemy'
    && whoIsThisHouseToStarks('Joar') === 'neutral'
    && whoIsThisHouseToStarks('Ivanov') === 'neutral';
console.log(test);
