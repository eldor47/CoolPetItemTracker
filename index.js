/**
 * This contains a set of logs I pulled from the marketplace API to pull a list of all the items that exist. There are 49, item 1 is the chest
 */


var totalItems = require('./totalItems.json')
var totalItems2 = require('./totalItems2.json')
var totalItems3 = require('./totalItems3.json')
var totalItems4 = require('./totalItems4.json')
var totalItems5 = require('./totalItems5.json')

var uniqueItems = new Map()
for(var item of totalItems.data) {
    var itemId = item.pet_item.item_id
    var rarity = item.pet_item.fire
    var name = item.pet_item.name
    if(!uniqueItems.has(itemId)){
        uniqueItems.set(itemId, {rarity, name})
    }
}

for(var item of totalItems2.data) {
    var itemId = item.pet_item.item_id
    var rarity = item.pet_item.fire
    var name = item.pet_item.name
    if(!uniqueItems.has(itemId)){
        uniqueItems.set(itemId, {rarity, name})
    }
}

for(var item of totalItems3.data) {
    var itemId = item.pet_item.item_id
    var rarity = item.pet_item.fire
    var name = item.pet_item.name
    if(!uniqueItems.has(itemId)){
        uniqueItems.set(itemId, {rarity, name})
    }
}

for(var item of totalItems4.data) {
    var itemId = item.pet_item.item_id
    var rarity = item.pet_item.fire
    var name = item.pet_item.name
    if(!uniqueItems.has(itemId)){
        uniqueItems.set(itemId, {rarity, name})
    }
}


for(var item of totalItems5.data) {
    var itemId = item.pet_item.item_id
    var rarity = item.pet_item.fire
    var name = item.pet_item.name
    if(!uniqueItems.has(itemId)){
        uniqueItems.set(itemId, {rarity, name})
    }
}

uniqueItems = new Map([...uniqueItems].sort((a, b) => a.rarity - b.rarity));

console.log(Object.fromEntries(uniqueItems))