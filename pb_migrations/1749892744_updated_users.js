/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "(@request.body.id != \"\") && (@request.body.role:isset = false || @request.auth.role = \"admin\") ",
    "updateRule": "(@request.body.id != id) && (@request.body.role:isset = false || @request.auth.role = \"admin\") "
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "(@request.body.id = \"\") && (@request.body.role:isset = false || @request.auth.role = \"admin\") ",
    "updateRule": "(@request.body.id = id) && (@request.body.role:isset = false || @request.auth.role = \"admin\") "
  }, collection)

  return app.save(collection)
})
