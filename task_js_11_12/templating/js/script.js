$(function() {

  var html = $('#worksheet').html();

  var profile = {
    first_name: 'Oleksandra',
    last_name: 'Lysenko',
    photo: 'img/avatar.jpg',
    occupation: 'For now I\'m a student again',
    motives: {
      title: 'Why I wanna learn frontend:',
      content: [
        'first of all, after this course I wanna get a junior frontend developer position',
        'because I\'m passionate about web development',
        'and I wanna take a chance here'
      ]
    },
    contacts: {
      phone: {
        title: 'My contact phone',
        number: '+380934911695'
      },
      fb_profile:  {
        title: 'Meet me on Facebook ',
        content: 'Lysenko Oleksandra',
        link: 'https://www.facebook.com/lalexal'
      }
    },
    feedback: {
      title: 'My feedback',
      content: 'I\'m expecting the good results from this course'
    }
  };

  var content = tmpl(html, {
    data: profile
  });

  $('body').append(content);
});