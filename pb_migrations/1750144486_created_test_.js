/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "_clone_OJua",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "user",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "json2523508434",
        "maxSize": 1,
        "name": "outreachMinutes",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "number492906706",
        "max": null,
        "min": null,
        "name": "totalEvents",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_4223880558",
    "indexes": [],
    "listRule": null,
    "name": "test",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  ea.user as user,\n  SUM(ea.minutes) as outreachMinutes,\n  COUNT(ea.id) as totalEvents\nFROM `OutreachAttendees` ea\nGROUP BY ea.user",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4223880558");

  return app.delete(collection);
})
