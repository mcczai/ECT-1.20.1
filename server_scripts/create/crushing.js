ServerEvents.recipes(event => {

    event.recipes.create.crushing([Item.of('minecraft:cobblestone').withChance(0.2), Item.of('kubejs:mica').withChance(0.8)], 'minecraft:diorite')    //云母合成

})