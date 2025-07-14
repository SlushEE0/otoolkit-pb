/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4223880558")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  ea.user as user,\n  SUM(ea.minutes) as outreachMinutes,\n  COUNT(ea.id) as totalEvents,\n  MAX(e.date) as lastOutreachEvent\nFROM `OutreachAttendees` ea\nLEFT JOIN `OutreachEvents` e ON ea.event = e.id\nGROUP BY ea.user"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_sDUd")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_iPEt",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "json2928408046",
    "maxSize": 1,
    "name": "lastOutreachEvent",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4223880558")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  ea.user as user,\n  SUM(ea.minutes) as outreachMinutes,\n  COUNT(ea.id) as totalEvents\nFROM `OutreachAttendees` ea\nGROUP BY ea.user"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_sDUd",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_iPEt")

  // remove field
  collection.fields.removeById("json2928408046")

  return app.save(collection)
})
