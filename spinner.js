const spinner = () => {
  let delay = 100;
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay);
    delay += 200;
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, delay);
  delay += 200;
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, delay);
  delay += 200;
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, delay);
  delay += 200;

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay);
};

spinner();