/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4223880558")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  ea.user as user,\n  SUM(ea.minutes) as outreachMinutes,\n  COUNT(ea.id) as totalEvents,\n  MAX(e.date) as lastOutreachEvent\nFROM `OutreachSessions` ea\nLEFT JOIN `OutreachEvents` e ON ea.event = e.id\nGROUP BY ea.user"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_ilBI")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_7k1D",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4223880558")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  ea.user as user,\n  SUM(ea.minutes) as outreachMinutes,\n  COUNT(ea.id) as totalEvents,\n  MAX(e.date) as lastOutreachEvent\nFROM `OutreachAttendees` ea\nLEFT JOIN `OutreachEvents` e ON ea.event = e.id\nGROUP BY ea.user"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_ilBI",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_7k1D")

  return app.save(collection)
})
