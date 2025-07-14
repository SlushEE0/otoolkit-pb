/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && (@request.auth.id = @request.body.user || @request.auth.role = \"admin\")",
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && (@request.auth.role ?= \"admin\" || (@request.auth.role ?= \"member\" && user = @request.auth.id))",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.role ?= \"admin\"",
    "updateRule": "@request.auth.id != \"\" && (@request.auth.role ?= \"admin\" || (@request.auth.role ?= \"member\" && user = @request.auth.id))"
  }, collection)

  return app.save(collection)
})
