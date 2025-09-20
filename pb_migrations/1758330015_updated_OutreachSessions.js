/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940882714")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"admin\"",
    "deleteRule": "@request.auth.role = \"admin\"",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.role = \"admin\"",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940882714")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "@request.auth.id = \"\"",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
