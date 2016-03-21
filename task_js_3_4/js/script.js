var pageContent = {
  addContainer: function() {
    var div = document.createElement('div');
    div.classList.add('container');
    div.style.paddingTop = '20px';
    document.body.insertBefore(div, document.body.firstChild);
  },
  addHeader: function(text) {
    var header =  document.createElement('h5');
    header.classList.add('text-sm-center');
    header.innerHTML = text;
    document.querySelector('.container').appendChild(header);
  },
  addForm: function() {
    var form = document.createElement('form');
    form.name = 'test';
    form.method = 'post';
    document.querySelector('.container').appendChild(form);
  },
  addList: function() {
    var ol = document.createElement('ol');
    document.querySelector('form').appendChild(ol);
  },
  addListItems: function(itemsNumber) {
    var ol = document.querySelector('ol');
    for (var i = 1; i < itemsNumber + 1; i++) {
      var li = document.createElement('li');
      li.innerHTML = 'Вопрос №' + i;
      ol.appendChild(li);
    }
  },
  addCheckboxes: function(checkboxesNumber) {
    var li = document.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
      for (var j = 1; j < checkboxesNumber + 1; j++) {
        var div = document.createElement('div'),
            label = document.createElement('label'),
            checkbox = document.createElement('input');
        div.classList.add('checkbox');
        li[i].appendChild(div);
        label.innerHTML = ' Вариант ответа ' + j;
        checkbox.type = 'checkbox';
        checkbox.name = i + 1;
        checkbox.value = j;
        div.appendChild(label);
        label.insertBefore(checkbox, label.firstChild);
      }
    }
  },
  addSubmit: function() {
    var container = document.createElement('div'),
        button = document.createElement('input');
    container.classList.add('text-sm-center');
    button.type = 'submit';
    button.classList.add('btn', 'btn-primary-outline');
    button.value = 'Проверить мои результаты';
    document.querySelector('form').appendChild(container).appendChild(button);
  }
};

pageContent.addContainer();
pageContent.addHeader('Тест по программированию');
pageContent.addForm();
pageContent.addList();
pageContent.addListItems(3);
pageContent.addCheckboxes(3);
pageContent.addSubmit();