ServerEvents.tags('item', event => {
        event.add('forge:dyes/white','kubejs:mica')
        event.add('forge:dyes/black','create:powdered_obsidian')
        event.remove('forge:ingots/steel', 'davebuildingmod:steel_ingot')
})
ServerEvents.tags('fluid', event => {
        event.get('forge:sulfur_dioxide').add('kubejs:sulfur_dioxide')
        event.get('forge:nitric_acid').add('kubejs:nitric_acid')
        event.get('forge:sulfuric_acid').add('kubejs:sulfuric_acid')
        event.get('forge:crude_benzene').add('kubejs:crude_benzene')
        event.get('forge:nitrotoluene').add('kubejs:nitrotoluene')
})
