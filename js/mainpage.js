function setHandlers() {
  $('.letters li').on('mouseover', function(){
    var item = $(this),
        classes = item.attr('class'),
        siblings = item.siblings('.'+classes);

    if(siblings.length > 0) {
      siblings.addClass('full-opacity');
    }
  }).on('mouseleave', function() {
    $('.letters li.full-opacity').removeClass('full-opacity');
  });
}

function clickMe() {
  $('.letters li.light-green').click(function() {
    var url = 'http://www.google.ca';
    $(location).attr('href', url);
    // window.location.href = "http://www.google.com";
  });
  $('.letters li.blue').click(function() {
    var url = 'about.html';
    $(location).attr('href', url);
  });
  $('.letters li.yellow').click(function() {
    var url = 'http://www.blogspot.ca';
    $(location).attr('href', url);
  });
  $('.letters li.green').click(function() {
    var url = 'http://www.urbandictionary.com';
    $(location).attr('href', url);
  });
}

$(document).ready(function() {
  setHandlers();
  clickMe();
});
