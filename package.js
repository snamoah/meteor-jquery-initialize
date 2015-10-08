Package.describe({
  name: 'snamoah:meteor-jquery-initialize',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for jquery initialize library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/snamoah/meteor-jquery-initialize.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'lib/jquery.initialize.js'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('snamoah:meteor-jquery-initialize');
});
