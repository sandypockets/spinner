const spinner = () => {
  const spinnerCharacters = '|/-\\|/-\\|'
  let delay = 100;
  for (let character of spinnerCharacters) {
    setTimeout(function() {
      process.stdout.write('\r' + character + '   ');
    }, delay);
    delay += 200;
  }
};

spinner();