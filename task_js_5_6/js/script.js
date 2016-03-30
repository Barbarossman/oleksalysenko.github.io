'use strict';

getCurrentDate();

var start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  stopIndex = 1,
  split = document.getElementById('split'),
  splitIndex = 1,
  reset = document.getElementById('reset'),
  isStopped = true,
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
  isStopped = false;
  timer = window.setInterval(runCounter, 10);
  toggleHidden(start, stop);
  split.style.pointerEvents = 'auto';
});

stop.addEventListener('click', function () {
  clearInterval(timer);
  toggleHidden(stop, start);
  getCount('Stop', stopIndex);
  isStopped = true;
  split.style.pointerEvents = 'none';

  stopIndex++
});

split.addEventListener('click', function () {
  getCount('Split', splitIndex);

  splitIndex++;
});

reset.addEventListener('click', function () {
  clearInterval(timer);
  toggleHidden(stop, start);
  resetCounter();
  split.style.pointerEvents = 'none';
  stopIndex = splitIndex = 1;
});

function getCount(mark, index) {
  if (!isStopped) {
    var currentMs = msContainer.innerHTML,
      currentSec = secondsContainer.innerHTML,
      currentMin = minutesContainer.innerHTML,
      currentHours = hoursContainer.innerHTML,
      result = document.createElement('div');

    result.classList.add('col', 's8', 'offset-s2');
    result.innerHTML = mark.concat(' ', index, ': ', currentHours, ':', currentMin, ':', currentSec, '.', currentMs);

    document.querySelector('.results').appendChild(result);
  }
}

function resetCounter() {
  var results = document.querySelector('.results');

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  ms = sec = min = h = 1;
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

  secondsContainer.innerHTML = leadZero(sec, 2);

  sec++;
}

function countMinutes() {
  if (min > 59) {
    min = 0;
    countHours();
  }

  minutesContainer.innerHTML = leadZero(min, 2);

  min++;
}

function countHours() {
  if (h > 23) {
    h = 0;
  }

  hoursContainer.innerHTML = leadZero(h, 2);

  h++;
}

function leadZero(number, length) {
  var string = '' + number;
  while (string.length < length) {
    string = '0' + string;
  }

  return string;

}

function toggleHidden(elem1, elem2) {
  elem1.classList.add('hide');
  elem2.classList.remove('hide');
}

function getCurrentDate() {
  var currentDate = new Date();
  var currentDateContainer = document.querySelector('.present-day');
  currentDateContainer.innerHTML = currentDate.toDateString();
}