'use strict';

var names = [];

for (var i = 0; i < 5; i++) {
  names.push(prompt('Введите имя', ''));
}

var name = prompt('Введите имя для поиска', '');

if (contains(name, names)) {
  alert(name + ' , Вы успешно вошли');
} else {
  alert('Имя не найдено');
}

function contains(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}