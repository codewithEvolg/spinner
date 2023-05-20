const spinner1 = (symbols) => {
  let delay = 100;
  for(const sym of symbols){
    setTimeout(() => {
      process.stdout.write(`\r ${sym}  `);
    }, delay);
    delay += 400;
  }
}
const mySymbols = [ '|', '/', '-', '\\'];
spinner1(mySymbols);