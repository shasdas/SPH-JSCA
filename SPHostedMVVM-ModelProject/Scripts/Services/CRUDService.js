var my = window.my || {};
(function(my) {
    "use strict";
     my.CRUDService = {
        getUserName: function(callback, appWebUrl, hostWebUrl) {
        //"use strict";
        var context = new SP.ClientContext(appWebUrl);
        var appCtx = new SP.AppContextSite(context, hostWebUrl);
        //var context = new SP.ClientContext.get_current();
        my.user = appCtx.get_web().get_currentUser();
        context.load(my.user);
        context.executeQueryAsync(callback, my.CRUDService.failure);},
        failure: function() {
        alert("failed");
        }
};
}(my));
