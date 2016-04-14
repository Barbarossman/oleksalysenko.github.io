'use strict';

execute();

function execute() {

  var base= prompt('Enter base', ''),
      exp = prompt('Enter exponent', '');

  if (isCancelled(base) || isCancelled(exp)) {
    askForConfirmation();

  } else if(isEmptyString(base) || isEmptyString(exp)) {
    askForConfirmation();

  } else if (+base === 0 && +exp < 0) {
    askForConfirmation();

  } else if (isValidValue(+base) && isValidValue(+exp)) {
    console.log('The result is ', pow(+base,+exp));
    
  } else {
    askForConfirmation();
  }
}

// Help functions

function pow(base, exp) {
  if (exp === 0) {
    return 1;
  }

  var result = base;
  for (var i = 1; i < Math.abs(exp); i++) {
    result *= base;
  }

  if (exp < 0) {
    return 1 / result;
  }

  return result;
}

function isValidValue(n) {
  return (n % 1 === 0);
}

function isEmptyString(n) {
  return (n.length === 0);
}

function isCancelled(n) {
  return (n == null);
}

function askForConfirmation() {
  if (window.confirm('You entered incorrect values. Do you want to try again?')) {
    execute();
  } else {
    alert('See ya!');
  }
}