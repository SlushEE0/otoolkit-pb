/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // update collection data
  unmarshal({
    "createRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && (@request.auth.id = @request.body.user || @request.auth.role = \"admin\")"
  }, collection)

  return app.save(collection)
})
