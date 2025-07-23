/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "(@request.body.role != \"admin\" && @request.auth.id = \"\")",
    "updateRule": "((@request.body.role != \"admin\") && (@request.auth.id = id)) || \n(@request.auth.role = \"admin\")"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "",
    "updateRule": "((@request.body.role = \"member\") && (@request.auth.id = id)) || \n(@request.auth.role = \"admin\")"
  }, collection)

  return app.save(collection)
})
