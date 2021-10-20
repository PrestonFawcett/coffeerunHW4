(function (window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    $("#titleHolder").text(data.title);
    $("#nameHolder").text(data.name);
    $("#thankUMSG").modal();
  });
  
  console.log(formHandler);
})(window);