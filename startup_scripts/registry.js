
StartupEvents.registry('item', event => {
         event.create('unformed_sturdy_sheet')
         event.create('component_electronic_adv')
         event.create('component_logic_circuit')
         event.create('steel_firearm_parts')
         event.create('wooden_firearm_parts')
         event.create('formed_sturdy_sheet')
         event.create('chamfered_steel_pipe')
         event.create('component_wooden_firearm_parts')
         event.create('unpolished_wooden_firearm_parts')
         event.create('unpolished_steel_firearm_parts')
         event.create('component_gunpart_hammer')
         event.create('small_portions_gunpowder')
         event.create('no12_projectiles')
         event.create('shotgun_warheads')
         event.create('oneheaded_shotgun_warheads')
         event.create('primer')
         event.create('pistol_casings')
         event.create('rifle_shells')
         event.create('rifle_shells_mold')
         event.create('pistol_casings_mold')
         event.create('medical_kits').rarity('uncommon')
         event.create('ethanol_bottled')
         event.create('component_pistol_ammunition')
         event.create('component_shotgun_ammunition')
         event.create('component_oneheaded_shotgun_ammunition')
         event.create('component_rifle_ammunition')
         event.create('jute_injection').rarity('rare')
         event.create('test')
         event.create('gliders_repair_tools')
         event.create('nickel_iron_alloy')
         event.create('mica')
         event.create('sfpt')
         event.create('lime')
         event.create('idea')
         event.create('solid_nitrotoluene')
        // event.create('tangyuan').maxStackSize(8).food(food =>{food.saturation(6);food.hunger(6);food.effect('farmersdelight:comfort',600,1,1);food.effect('farmersdelight:nourishment',300,1,1)})
        // event.create('ravioli').maxStackSize(8).food(food =>{food.saturation(6);food.hunger(6);food.effect('farmersdelight:comfort',600,1,1);food.effect('farmersdelight:nourishment',300,1,1)})

})

StartupEvents.registry('block', event => {
         event.create('gura').hardness(0.5).fullBlock(false).box(1,0,6,15,15,15,true)
         event.create('ame').hardness(0.5).fullBlock(false).box(1,0,5,15,16,15,true)
         event.create('bornite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('galena').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('graphite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('sulfur_ore').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('hematite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('bauxite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('manganese_ore').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('hodg_kinsonite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('polymetallic_nodule').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('pentlandite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('sphalerite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('pyrite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('chalcopyrite').hardness(3).resistance(3).stoneSoundType().requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
         event.create('unknown_technology').hardness(0.5).fullBlock(false).box(-2,2,-2,18,14,18,true)
})

StartupEvents.registry('fluid', event => {
         event.create('jute').thickTexture('#7FFFAA').thinTexture('#7FFFAA')
         event.create('nitric_acid').gaseous().thickTexture('#ADFF2F').thinTexture('#ADFF2F').density(500)   //硝酸
         event.create('sulfur_dioxide').gaseous().thickTexture('#00FF7F').thinTexture('#00FF7F').density(500)          //二氧化硫
         event.create('sulfuric_acid').thickTexture('#67B821').thinTexture('#67B821').density(500)           //硫酸
         event.create('crude_benzene').thickTexture('#88FF26').thinTexture('#88FF26').density(500)        //粗苯
         event.create('nitrotoluene').thickTexture('#98FB98').thinTexture('#98FB98').density(500)       //硝基甲苯溶液
})

ItemEvents.modification(event => {
  event.modify('immersiveengineering:glider', item => {item.maxDamage = 1560})//加强沉浸鞘翅
  event.modify('minecraft:elytra', item => {item.maxDamage = 100})//削弱鞘翅
})


