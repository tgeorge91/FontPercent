/*
	FontPercent.js
	Version 1.0.0
	Created by Timothy George (http://www.tgeorge.net)
	https://github.com/tgeorge91/FontPercent
	MIT License
	A simple javascript library for responsive font sizes.
*/

window.fontPercent = (function() {
  var classes = [];
  var checkChild = function(child){
    if (!child) return;
      $(child).children().each(function() {
        checkChild($(this));
    });
    
    var fontSize, percent, className;
    
    for (var i = 0; i < classes.length; i++) {
      className = classes[i].className;
      percent = classes[i].size;
      percent = percent.substring(0, percent.indexOf('%'));
      if ($(child).hasClass(className)) {
        fontSize = (percent / 100) * $(document).height();
        fontSize = fontSize + 'px';
        $(child).css('font-size', fontSize);
      }
    }
    
    percent = $(child).attr('data-fp') || $(child).attr('fp');
    if (percent)  {
      percent = percent.substring(0, percent.indexOf('%'));
      fontSize = (percent / 100) * $(document).height();
      fontSize = fontSize + 'px';
      $(child).css('font-size', fontSize);
    }  
  };
  
  var checkAll = function() {
    $(document).children().each(function() {
      checkChild($(this));
    });  
  };
  
  var init = function() {
    checkAll();
    $(window).on('resize', checkAll);
  };
  
  var addClass = function(classObj) {
    if (classObj.className && classObj.size) {
      classes.push(classObj);
    }
    checkAll();
  };

  return {
    init: init,
    addClass: addClass
  };
  
})();