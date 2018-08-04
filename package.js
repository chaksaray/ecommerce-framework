Package.describe({
  name: 'saraychak:ecommerce-framwork',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'package to add module products, point, member, and cart.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chaksaray/ecommerce-framwork.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use("templating", "client");
  api.addFiles('ecommerce-framwork.js');
  api.addFiles('ecommerce-framwork.html', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('saraychak:ecommerce-framwork');
  api.addFiles('ecommerce-framwork-tests.js');
});
