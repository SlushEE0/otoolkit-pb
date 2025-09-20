/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2396374951")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"admin\" || @request.auth.id = @request.body.id",
    "deleteRule": "@request.auth.role = \"admin\" || @request.auth.id = @request.body.id",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.role = \"admin\" || @request.auth.id = @request.body.id",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2396374951")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
