(function(){
  var checkbox = document.getElementById('homepostalcheck');
  var postaladdress = document.getElementById('postaladdress');
  var homeaddress = document.getElementById('homeaddress');
  
  /* crossbrowser way of attaching events */
  var addEvent = function(elem, type, listener) {
    if ( elem.addEventListener ) {
      elem.addEventListener( type, listener, false );
    } else if ( elem.attachEvent ) {
      elem.attachEvent( "on" + type, listener );
    }
  };
  var setHomeAddress = function(){
    homeaddress.value = postaladdress.value;
    homeaddress.disabled = this.checked;
  };

  addEvent(checkbox, 'click', setHomeAddress);
})()  
