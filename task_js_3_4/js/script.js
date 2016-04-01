var Test = {

  questions: [
    {
      text: 'Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа 1',
          correct: true
        },
        {
          text: 'Вариант ответа 2',
          correct: false
        },
        {
          text: 'Вариант ответа 3',
          correct: false
        }
      ]
    },
    {
      text: 'Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа 1',
          correct: false
        },
        {
          text: 'Вариант ответа 2',
          correct: true
        },
        {
          text: 'Вариант ответа 3',
          correct: false
        }
      ]
    },
    {
      text: 'Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа 1',
          correct: false
        },
        {
          text: 'Вариант ответа 2',
          correct: false
        },
        {
          text: 'Вариант ответа 3',
          correct: true
        }
      ]
    }
  ],

  createElement: function (elem, cls, text) {
    var element = document.createElement(elem);


    if (cls) {
      var classes = cls.split(' ');

      for (var i = 0; i < classes.length; i++) {
        element.classList.add(classes[i]);
      }
    }

    if (text) {
      element.innerHTML = text;
    }

    return element;
  },

  addElement: function (parentElem, element) {
    document.querySelector(parentElem).appendChild(element);
  },

  addContainer: function () {
    document.body.insertBefore(this.createElement('div', 'container', null), document.body.firstChild);
  },

  addHeader: function () {
    var header = this.createElement('h5', 'text-sm-center', 'Тест по программированию');

    header.style.paddingTop = '20px';

    this.addElement('.container', header);
  },

  addForm: function () {
    var form = this.createElement('form', null, null);

    form.name = 'test';
    form.method = 'post';

    this.addElement('.container', form);
  },

  addList: function () {
    this.addElement('form', this.createElement('ol', null, null));
  },

  addQuestions: function () {
    for (var i = 0; i < this.questions.length; i++) {
      this.addElement('ol', this.createElement('li', null, this.questions[i].text));
    }
  },

  addAnswers: function () {
    var li = document.querySelectorAll('li');

    for (var i = 0; i < li.length; i++) {

      for (var j = 0; j < this.questions[i].answers.length; j++) {

        var container = this.createElement('div', 'checkbox', null),
          label = this.createElement('label', null, this.questions[i].answers[j].text),
          checkbox = this.createElement('input', null, null);

        checkbox.type = 'checkbox';
        checkbox.name = i;
        checkbox.value = j;
        checkbox.style.marginRight = '5px';

        li[i].appendChild(container).appendChild(label).insertBefore(checkbox, label.firstChild);
      }
    }
  },

  addSubmit: function () {
    var container = this.createElement('div', 'text-sm-center', null),
      button = this.createElement('input', 'btn btn-primary-outline', null);

    button.type = 'submit';
    button.value = 'Проверить мои результаты';

    document.querySelector('form').appendChild(container).appendChild(button);
  }
};

Test.addContainer();
Test.addHeader();
Test.addForm();
Test.addList();
Test.addQuestions();
Test.addAnswers();
Test.addSubmit();