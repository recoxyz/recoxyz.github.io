var app = angular.module('reco', ['facebook']);
app.config(function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     var myAppId = '599935950076162';
     FacebookProvider.init(myAppId);
  });
