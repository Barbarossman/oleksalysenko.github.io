'use strict';

getCurrentDate();

var start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  split = document.getElementById('split'),
  reset = document.getElementById('reset'),
  msContainer = document.getElementById('milliseconds'),
  secondsContainer = document.getElementById('seconds'),
  minutesContainer = document.getElementById('minutes'),
  hoursContainer = document.getElementById('hours'),
  timer,
  ms = 1,
  sec = 1,
  min = 1,
  h = 1;

start.addEventListener('click', function () {
  timer = window.setInterval(runCounter, 10);
  toggleHidden(start, stop);
});

stop.addEventListener('click', function () {
  clearInterval(timer);
  toggleHidden(stop, start);
  getCount('Stop');
});

split.addEventListener('click', function () {
  getCount('Split');
});

reset.addEventListener('click', function () {
  clearInterval(timer);
  toggleHidden(stop, start);
  resetCounter();
});

function getCount(mark) {
  var currentMs = msContainer.innerHTML,
    currentSec = secondsContainer.innerHTML,
    currentMin = minutesContainer.innerHTML,
    currentHours = hoursContainer.innerHTML,
    result = document.createElement('div');

  result.classList.add('col', 's8', 'offset-s2');
  result.innerHTML = mark.concat(': ', currentHours, ':', currentMin, ':', currentSec, '.', currentMs);

  document.querySelector('.results').appendChild(result);
}

function resetCounter() {
  var results = document.querySelector('.results');

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  msContainer.innerHTML = '000';
  secondsContainer.innerHTML = '00';
  minutesContainer.innerHTML = '00';
  hoursContainer.innerHTML = '00';
}

function runCounter() {
  if (ms == 100) {
    ms = 0;
    countSeconds();
  }

  switch (true) {
    case (ms < 10):
      msContainer.innerHTML = '0' + ms + '0';
      break;
    default:
      msContainer.innerHTML = ms + '0';
  }

  ms++;
}

function countSeconds() {
  if (sec > 59) {
    sec = 0;
    countMinutes();
  }

  secondsContainer.innerHTML = leadZero(sec);

  sec++;
}

function countMinutes() {
  if (min > 59) {
    min = 0;
    countHours();
  }

  minutesContainer.innerHTML = leadZero(min);

  min++;
}

function countHours() {
  if (h > 23) {
    h = 0;
  }

  hoursContainer.innerHTML = leadZero(h);

  h++;
}

function getCurrentDate() {
  var currentDate = new Date();
  var currentDateContainer = document.querySelector('.present-day');
  currentDateContainer.innerHTML = currentDate.toDateString();
}

function leadZero(n) {
  if (n < 10) {
    return n = '0' + n;
  }

  return n;
}

function toggleHidden(elem1, elem2) {
  elem1.classList.add('hide');
  elem2.classList.remove('hide');
}