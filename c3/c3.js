(function(){
  /* going strictly by the HTML provided by the challenge, we have a form
     that doesn't have an ID associated with it. Instead we will use
     document.getElementsByTagName and match against the expected action */
  var emailform = (function(action){
    var forms = document.getElementsByTagName('form');
    for (var len = forms.length, i = 0; i < len; i++) {
      if (forms[i].action === action) return forms[i];
    }
    /* if we didn't find the form, throw an error */
    throw "Could not find form with action " + action;
  })('mailto:me@fakeemail.com');
  
  /* crossbrowser way of attaching events */
  var addEvent = function(elem, type, listener) {
    if ( elem.addEventListener ) {
      elem.addEventListener( type, listener, false );
    } else if ( elem.attachEvent ) {
      elem.attachEvent( "on" + type, listener );
    }
  };

  var checkForm = function(event){
    var checkfields = ['optstraw', 'optblue'];
    var valid = false;
    for (var i = 0, len = checkfields.length; i < len; i++) {
      valid = valid || document.getElementById(checkfields[i]).checked; 
    }
    if (!valid) {
      /* use preventDefault() to stop the form from submitting if invalid */
      event.preventDefault();
      window.alert('Please select your favorite berry');
      return false;
    }
    return true;
  };
  
  addEvent(emailform, 'submit', checkForm);
})()  
