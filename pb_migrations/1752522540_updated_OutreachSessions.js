/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940882714")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2691386019",
    "max": null,
    "min": null,
    "name": "minutes",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940882714")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2691386019",
    "max": null,
    "min": 0,
    "name": "minutes",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
