/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3097943471")

  // remove field
  collection.fields.removeById("relation1542800728")

  // remove field
  collection.fields.removeById("json2691386019")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3097943471")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1542800728",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json2691386019",
    "maxSize": 0,
    "name": "minutes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})
