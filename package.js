Package.describe({
  name: 'szchenghuang:fingerprint',
  version: '0.0.4',
  summary: 'Reactive client fingerprint based on fingerprintjs2',
  git: 'git@github.com:szchenghuang/fingerprint.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.mainModule('index.js', 'client');
});

Package.onTest(function(api) {
  api.use('szchenghuang:fingerprint');
  api.use('ecmascript');
  api.use('practicalmeteor:chai');
  api.use('practicalmeteor:mocha');
  api.addFiles('test/client/index.spec.js', ['client']);
  api.addFiles('test/server/index.spec.js', ['server']);
});

Npm.depends({
  chai: "3.5.0",
  fingerprintjs2: "1.4.1"
});
