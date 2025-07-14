/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2928408046",
    "max": "",
    "min": "",
    "name": "lastOutreachEvent",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date3040363929",
    "max": "",
    "min": "",
    "name": "lastBuildEvent",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_310648419")

  // remove field
  collection.fields.removeById("date2928408046")

  // remove field
  collection.fields.removeById("date3040363929")

  return app.save(collection)
})
