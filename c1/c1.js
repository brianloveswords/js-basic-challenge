(function(){
  var addEvent = function(elem, type, listener) {
    if ( elem.addEventListener ) {
      elem.addEventListener( type, listener, false );
    } else if ( elem.attachEvent ) {
      elem.attachEvent( "on" + type, listener );
    }
  };
  var toggleEmail = function() {
    alert('yes I am being called');     
  };
  
  var checkbox = document.getElementById('subscribe');

  addEvent(checkbox, 'click', toggleEmail);
})()