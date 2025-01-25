
ServerEvents.recipes(event => {

     event.recipes.create.mechanical_crafting('immersiveengineering:drill', [
        'CTO ',
        'CBEM',
        'WSS '
      ], {
        B: 'create:blaze_burner',
        W: 'immersiveengineering:wooden_grip',
        S: 'kubejs:steel_firearm_parts',
        C: 'immersiveengineering:component_steel',
        O: 'kubejs:wooden_firearm_parts',
        T: 'immersiveengineering:toolupgrade_drill_capacity',
        E: 'create:steam_engine',
        M: 'create:mechanical_bearing'
     })   //沉浸钻头

     event.recipes.create.mechanical_crafting('immersiveengineering:buzzsaw', [
        'CTO ',
        'CBEG',
        'WSS '
      ], {
        B: 'create:blaze_burner',
        W: 'immersiveengineering:wooden_grip',
        S: 'kubejs:steel_firearm_parts',
        C: 'immersiveengineering:component_steel',
        O: 'kubejs:wooden_firearm_parts',
        T: 'immersiveengineering:toolupgrade_drill_capacity',
        E: 'create:steam_engine',
        G: 'create:gearbox'
     })   //沉浸电锯

     event.recipes.create.mechanical_crafting('immersiveengineering:chemthrower', [
        'WCP ',
        'SVII',
        'GT  '
      ], {
        W: 'immersiveengineering:toolupgrade_drill_waterproof',
        C: 'immersiveengineering:toolupgrade_drill_capacity',
        P: 'kubejs:wooden_firearm_parts',
        S: 'immersiveengineering:component_steel',
        V: 'create:fluid_valve',
        I: 'immersiveengineering:fluid_pipe',
        G: 'immersiveengineering:wooden_grip',
        T: 'kubejs:steel_firearm_parts'
     })   //化学喷射器

     event.recipes.create.mechanical_crafting('kubejs:unknown_technology', [
        'MHMHM',
        'HPEPH',
        'MEAEM',
        'HPEPH',
        'MHMHM'
      ], {
        M: 'immersiveengineering:coil_mv',
        H: 'immersiveengineering:capacitor_hv',
        E: 'minecraft:end_crystal',
        P: 'immersiveengineering:plate_silver',
        A: 'immersiveengineering:heavy_engineering'
     })   //微型虫洞发生器

})