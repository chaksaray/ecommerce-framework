Package.describe({
  name: 'saraychak:sample-meteor-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This is the sample meteor package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chaksaray/sample-meteor-package.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use("templating", "client");
  api.addFiles('sample-meteor-package.js');
  api.addFiles('sample-meteor-package.html', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('saraychak:sample-meteor-package');
  api.addFiles('sample-meteor-package.js');
});
