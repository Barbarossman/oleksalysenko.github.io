'use strict';

execute();

function execute() {
  var base= +prompt('Enter base', ''),
      exp = +prompt('Enter exponent', '');

  if ( isValidValue(base) && isValidValue(exp) ) {
    console.log( 'The result is ', pow(base,exp) );
  } else {
    if ( window.confirm('You entered incorrect values. Do you want to try again?') ) {
      execute();
    } else {
      alert('See ya!');
    }
  }
}

// Help functions

function pow(base, exp) {
  if ( exp === 0 && base === 0 ) {
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
  if ( Boolean(n) && n % 1 === 0 ) {
    return true;
  }

  return false;
}