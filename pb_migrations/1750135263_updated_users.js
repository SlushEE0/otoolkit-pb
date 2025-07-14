/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "(@request.body.role = \"member\") || \n(@request.auth.role = \"admin\")",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "((@request.body.role = \"member\") && (@request.auth.id = id)) || \n(@request.auth.role = \"admin\")",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "member",
      "admin",
      "guest"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "(@request.body.role:isset = false) || \n(@request.auth.role = \"admin\")",
    "listRule": "",
    "updateRule": "((@request.body.role:isset = false) && (@request.auth.id = id)) || \n(@request.auth.role = \"admin\")",
    "viewRule": ""
  }, collection)

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "member",
      "admin",
      "guest"
    ]
  }))

  return app.save(collection)
})
