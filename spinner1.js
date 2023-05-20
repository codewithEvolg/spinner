setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1300);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2900);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 3300);