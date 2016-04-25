'use strict';

var Content = {
  title: 'JavaScript Quiz: What does this function do?',
  submit: 'Check my results',
  message: {
    success: '<h3>Great job!</h3>',
    failure: '<h3>Oops...You failed quiz</h3>'
  },
  result: {
    message: ''
  },
  minScore: 10,
  maxScore: 18,
  questions: [
    {
      text: 'What does this function do?',
      image: 'img/1.png',
      answers: [
        {
          text: 'It returns val',
          correct: false,
          checked: false
        },
        {
          text: 'It always returns 2',
          correct: false,
          checked: false
        },
        {
          text: 'It returns 1 if val is truthful, otherwise 2',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/2.png',
      answers: [
        {
          text: 'It returns an object with colors and an array with the value of param',
          correct: false,
          checked: false
        },
        {
          text: 'It converts red, green and blue colors to their hex values',
          correct: true,
          checked: false
        },
        {
          text: 'This is invalid JavaScript code',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/3.png',
      answers: [
        {
          text: 'Always returns red',
          correct: true,
          checked: false
        },
        {
          text: 'Returns blue, green or red, depending on the parameter "color"',
          correct: false,
          checked: false
        },
        {
          text: 'Returns only blue and green',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/4.png',
      answers: [
        {
          text: 'Sums all the elements in the array',
          correct: false,
          checked: false
        },
        {
          text: 'Always returns an empty array',
          correct: false,
          checked: false
        },
        {
          text: 'Removes duplicate values from an array',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/5.png',
      answers: [
        {
          text: 'Sums all the elements in the array',
          correct: true,
          checked: false
        },
        {
          text: 'Finds the largest element in the array',
          correct: false,
          checked: false
        },
        {
          text: 'Throws an exception',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/6.png',
      answers: [
        {
          text: 'Reverses the array',
          correct: false,
          checked: false
        },
        {
          text: 'Returns a new array with numbers twice as large as the original',
          correct: true,
          checked: false
        },
        {
          text: 'Initializes a new Google map and uses the array as coordinates',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/7.png',
      answers: [
        {
          text: 'Always returns true',
          correct: false,
          checked: false
        },
        {
          text: 'Always returns false',
          correct: false,
          checked: false
        },
        {
          text: 'If mood is true, will return "I like this", otherwise "I don’t like this"',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/8.png',
      answers: [
        {
          text: 'Returns the same string that was passed',
          correct: false,
          checked: false
        },
        {
          text: 'If a string is passed, returns a reversed copy',
          correct: true,
          checked: false
        },
        {
          text: 'Returns an array',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/9.png',
      answers: [
        {
          text: 'Throws an error',
          correct: false,
          checked: false
        },
        {
          text: 'Initializes an empty XHTML namespace',
          correct: false,
          checked: false
        },
        {
          text: 'Returns the number of elements on the page',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/10.png',
      answers: [
        {
          text: 'Finds the largest number in the array',
          correct: true,
          checked: false
        },
        {
          text: 'Initializes Math.max with random numbers',
          correct: false,
          checked: false
        },
        {
          text: 'Throws an error',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/11.png',
      answers: [
        {
          text: 'Returns only the first, smallest, element of the array',
          correct: false,
          checked: false
        },
        {
          text: 'Sorts the original array',
          correct: false,
          checked: false
        },
        {
          text: 'Returns a sorted copy of the array',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/12.png',
      answers: [
        {
          text: 'Checks whether the number is between 0 and 10',
          correct: false,
          checked: false
        },
        {
          text: 'Fits the number passed as a parameter in an interval from 0 to 10',
          correct: true,
          checked: false
        },
        {
          text: 'Always returns 0',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/13.png',
      answers: [
        {
          text: 'It will return the string "1,2,3,4"',
          correct: false,
          checked: false
        },
        {
          text: 'This is not valid JavaScript – it will throw an error',
          correct: false,
          checked: false
        },
        {
          text: 'It will return the string "1,2,4"',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/14.png',
      answers: [
        {
          text: '“NaNNaNNaN Batman!”',
          correct: true,
          checked: false
        },
        {
          text: 'Returns four arrays with Batman as their value',
          correct: false,
          checked: false
        },
        {
          text: 'Throws an error',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/15.png',
      answers: [
        {
          text: 'It returns an empty string',
          correct: false,
          checked: false
        },
        {
          text: 'It throws an error',
          correct: false,
          checked: false
        },
        {
          text: 'Returns HTML of the string wrapped in bold and italics tags',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/16.png',
      answers: [
        {
          text: 'Counts the number of ‘d’ characters in the string',
          correct: false,
          checked: false
        },
        {
          text: 'Makes sure that the string contains only three or more digits',
          correct: true,
          checked: false
        },
        {
          text: 'Returns an array with numbers',
          correct: false,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/17.png',
      answers: [
        {
          text: 'It will always return 10',
          correct: false,
          checked: false
        },
        {
          text: 'It will always return undefined',
          correct: false,
          checked: false
        },
        {
          text: 'It will always return 10 more than the number passed as an argument',
          correct: true,
          checked: false
        }
      ]
    },
    {
      text: 'What does this function do?',
      image: 'img/18.png',
      answers: [
        {
          text: 'Returns the string "fail"’',
          correct: true,
          checked: false
        },
        {
          text: 'Creates nested arrays 100 levels deep',
          correct: false,
          checked: false
        },
        {
          text: 'Causes your computer to explode',
          correct: false,
          checked: false
        }
      ]
    }
  ]
};

// Set data to local storage
localStorage.setItem('content', JSON.stringify(Content));

// Get data from local storage
var data = JSON.parse(localStorage.getItem('content'));

$(function () {
  
  // Compile a template and execute with data
  var template = Handlebars.compile($("#template").html()),
    html = template(data);
  
  $(html).appendTo(document.body);
  
  // Change checked state in answers' object
  $('input[type="checkbox"]').on('click', function () {
    var $this = $(this),
      question = $this.data('question-index'),
      answer = $this.data('answer-index');
    
    $this.siblings('label').find('span').toggleClass('checked');
    
    data.questions[question].answers[answer].checked = $this.prop('checked');
  });
  
  $('.submit-btn').on('click', function (e) {
    e.preventDefault();
    
    var result = gatherResult();
    
    showResult(data.minScore, result);
    
    
  });
  
  hideModal();
  
  function gatherResult() {
    var score = 0; // amount of correct answers
    
    outer:
      for (var i = 0; i < data.questions.length; i++) {
        
        var options = data.questions[i].answers;
        
        for (var j = 0; j < options.length; j++) {
          
          if (options[j].checked !== options[j].correct)
            continue outer;
        }
        
        score++;
      }
    
    return score;
  }
  
  function showResult(expected, actual) {
    var message;
    
    data.result.score = actual;
    
    if (expected > actual)
      message = data.message.failure;
    else
      message = data.message.success;
    
    $('.modal-content p').append(message);
    
    showModal();
  }
  
  function showModal() {
    $('.modal').fadeIn(200)
      .find('.modal-content')
      .hide()
      .slideDown(500);
  }
  
  function hideModal() {
    $('.btn-close').on('click', function () {
      $('.modal-content').slideUp(500);
      $('.modal').fadeOut(200);
      $('.modal-content p').empty();
      
      removeSelectedAnswers();
    });
  }
  
  function removeSelectedAnswers() {
    var $checked = $('input[type="checkbox"]:checked');
    
    for (var i = 0; i < $checked.length; i++) {
      $checked.eq(i)
        .prop('checked', false)
        .siblings('label')
        .children('span')
        .removeClass('checked');
    }
  }
});