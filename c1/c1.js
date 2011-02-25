(function(){
  var checkbox = document.getElementById('subscribe');
  var emailpara = document.getElementById('emailpara');
  
  /* crossbrowser way of attaching events */
  var addEvent = function(elem, type, listener) {
    if ( elem.addEventListener ) {
      elem.addEventListener( type, listener, false );
    } else if ( elem.attachEvent ) {
      elem.attachEvent( "on" + type, listener );
    }
  };
  
  var toggleEmail = function() {
    var state = {'true': 'block', 'false': 'none'}
    emailpara.style.display = state[this.checked];
  };
  
  addEvent(checkbox, 'click', toggleEmail);
})()