var my = window.my || {};
//var context = SP.ClientContext.get_current();
//var user = context.get_web().get_currentUser();
// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
$(document).ready(function() {
  'use strict';
    //getUserName();
    my.vm = function() {
    var name = ko.observable('KO Shaswata Das'),
        username = ko.observable(),
        getUserName = function() {
            my.CRUDService.getUserName(my.vm.getUserNameCallback, appWebUrl, hostWebUrl);
        },
        getUserNameCallback = function() {
            username(my.user.get_title());
        };
        return {
            username: username,
            name: name,
            getUserNameCallback: getUserNameCallback,
            getUserName: getUserName

        };
    }();
    my.vm.getUserName();
    ko.applyBindings(my.vm);
});

var getQueryStringParameter = function(p) {
  'use strict';
   var params = document.URL.split("?")[1].split("&");
   // var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] === p) {
            return decodeURIComponent(singleParam[1]);
        }
    }
};

var appWebUrl = getQueryStringParameter("SPAppWebUrl");
var hostWebUrl = getQueryStringParameter("SPHostUrl");


