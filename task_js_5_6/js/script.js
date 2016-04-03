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
  startTime = null,
  stopTime = null,
  stopDuration = 0,
  timer,
  ms = 1,
  sec = 1,
  min = 1,
  h = 1;

start.addEventListener('click', function () {
  if(startTime == null)
    startTime = new Date();


  if (stopTime !== null)
    stopDuration += (new Date - stopTime);

  
  timer = window.setInterval(runCounter, 10);
  toggleHidden(start, stop);
  isStopped = false;
  split.style.pointerEvents = 'auto';
});

stop.addEventListener('click', function () {
  stopTime = new Date();
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

  stopDuration = 0;
  startTime = null;
  stopTime = null;
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
  var currentTime = new Date(),
    elapsedTime = new Date(currentTime - startTime - stopDuration);

  ms = elapsedTime.getUTCMilliseconds();
  sec = elapsedTime.getUTCSeconds();
  min = elapsedTime.getUTCMinutes();
  h = elapsedTime.getUTCHours();

  msContainer.innerHTML = leadZero(ms, 3);
  secondsContainer.innerHTML = leadZero(sec, 2);
  minutesContainer.innerHTML = leadZero(min, 2);
  hoursContainer.innerHTML = leadZero(h, 2);
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
  var currentDate = new Date(),
    currentDateContainer = document.querySelector('.present-day');
  
  currentDateContainer.innerHTML = currentDate.toDateString();
}