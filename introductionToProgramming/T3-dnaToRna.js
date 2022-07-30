const dnaToRna = (dna) => {
  let rna = '';
  for (let i = 0; i < dna.length; i += 1) {
    let char = '';
    switch (dna[i]) {
      case 'G':
        char = 'C';
        break;
      case 'C':
        char = 'G';
        break;
      case 'T':
        char = 'A';
        break;
      case 'A':
        char = 'U';
        break;
      default:
        return null;
    }
    rna += char;
  }
  return rna;
};

const test = dnaToRna('ACGTGGTCTTAA') === 'UGCACCAGAAUU'
          && dnaToRna('CCGTA') === 'GGCAU'
          && dnaToRna('') === ''
          && dnaToRna('ACNTG') === null;
console.log('test: ', test);

export default dnaToRna;
