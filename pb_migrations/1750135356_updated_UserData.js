/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.id = @request.body.id) || @request.auth.role = \"admin\"",
    "deleteRule": "@request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": null
  }, collection)

  return app.save(collection)
})
