'use strict';

System.register('madchatthew/flarum-ext-themelightshadow/main', ['flarum/app'], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {

      app.initializers.add('madchatthew/flarum-ext-themelightshadow', function () {});
    }
  };
});
