Package.describe({
  name: "sokki:impersonate",
  summary: "Impersonate users in Meteor",
  version: "1.0.1",
  git: "https://github.com/sokki/meteor-impersonate.git",
});

Package.onUse(function (api, where) {

  api.use([
    "accounts-base@1.2.2",
    "reactive-var@1.0.6",
  ], "client");

  api.use([
    "alanning:roles@1.2.14",
  ]);

  api.addFiles([
    "server/lib.js"
  ], "server");

  api.addFiles([
    "client/lib.js"
  ], "client");

  api.export("Impersonate");

});
