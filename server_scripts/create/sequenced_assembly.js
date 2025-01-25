ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:logic_circuit', //产物
        'immersiveengineering:circuit_board',  //输入
        [
            event.recipes.createDeploying('kubejs:component_logic_circuit', ['kubejs:component_logic_circuit', 'immersiveengineering:electron_tube']),
            event.recipes.createDeploying('kubejs:component_logic_circuit', ['kubejs:component_logic_circuit', 'immersiveengineering:capacitor_lv']),
            event.recipes.createDeploying('kubejs:component_logic_circuit', ['kubejs:component_logic_circuit', 'immersiveengineering:wire_aluminum']),
            event.recipes.createDeploying('kubejs:component_logic_circuit', ['kubejs:component_logic_circuit', 'immersiveengineering:component_electronic_adv'])
        ]).transitionalItem('kubejs:component_logic_circuit').loops(2) //电路板

    event.recipes.create.sequenced_assembly(
        'immersiveengineering:component_electronic_adv',
        'immersiveengineering:plate_duroplast',
        [
            event.recipes.createDeploying('kubejs:component_electronic_adv', ['kubejs:component_electronic_adv', 'immersiveengineering:electron_tube']),
            event.recipes.createDeploying('kubejs:component_electronic_adv', ['kubejs:component_electronic_adv', 'immersiveengineering:capacitor_lv']),
            event.recipes.createDeploying('kubejs:component_electronic_adv', ['kubejs:component_electronic_adv', 'immersiveengineering:wire_aluminum'])
        ]).transitionalItem('kubejs:component_electronic_adv').loops(2)  //高级逻辑组件

    event.recipes.create.sequenced_assembly(
        'immersiveengineering:gunpart_barrel',
        '#forge:rods/steel',
        [
            event.recipes.createDeploying('kubejs:chamfered_steel_pipe', ['kubejs:chamfered_steel_pipe', 'immersiveengineering:drillhead_steel']).keepHeldItem(),
            event.recipes.createDeploying('kubejs:chamfered_steel_pipe', ['kubejs:chamfered_steel_pipe', 'immersiveengineering:screwdriver']).keepHeldItem()
        ]).transitionalItem('kubejs:chamfered_steel_pipe').loops(1)  //枪管

    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(120.0),
        Item.of('create:golden_sheet').withChance(8.0),
        Item.of('create:andesite_alloy').withChance(8.0),
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('minecraft:gold_nugget').withChance(3.0),
        Item.of('create:shaft').withChance(2.0),
        Item.of('create:crushed_gold_ore').withChance(2.0),
        Item.of('minecraft:iron_ingot'),
        Item.of('minecraft:clock')],
        '#forge:plates/iron',
        [
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'immersiveengineering:component_iron']),
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'immersiveengineering:component_steel']),
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'immersiveengineering:wire_steel']),
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel'])
        ]).transitionalItem('create:incomplete_precision_mechanism').loops(2)  //精密构件

    event.recipes.create.sequenced_assembly(
        '#forge:plates/steel',
        'immersiveengineering:gunpart_hammer',
        [
            event.recipes.createDeploying('kubejs:component_gunpart_hammer', ['kubejs:component_gunpart_hammer', 'immersiveengineering:component_iron']),
            event.recipes.createCutting('kubejs:component_gunpart_hammer', 'kubejs:component_gunpart_hammer'),
            event.recipes.createCutting('kubejs:component_gunpart_hammer', 'kubejs:component_gunpart_hammer')
        ]).transitionalItem('kubejs:component_gunpart_hammer').loops(1)  //击锤

    event.recipes.create.sequenced_assembly(
        '2x kubejs:unpolished_wooden_firearm_parts',
        'immersiveengineering:treated_wood_horizontal',
        [
            event.recipes.createCutting('kubejs:component_wooden_firearm_parts','kubejs:component_wooden_firearm_parts'),
            event.recipes.createCutting('kubejs:component_wooden_firearm_parts','kubejs:component_wooden_firearm_parts'),
            event.recipes.createFilling('kubejs:component_wooden_firearm_parts',['kubejs:component_wooden_firearm_parts',Fluid.of('immersiveengineering:plantoil',100)])
        ]).transitionalItem('kubejs:component_wooden_firearm_parts').loops(1)   //木制枪械零件(未打磨)

    event.recipes.create.sequenced_assembly(
        '4x kubejs:oneheaded_shotgun_warheads',
        '#forge:ingots/steel',
        [
            event.recipes.createCutting('kubejs:component_oneheaded_shotgun_ammunition','kubejs:component_oneheaded_shotgun_ammunition'),
            event.recipes.createCutting('kubejs:component_oneheaded_shotgun_ammunition','kubejs:component_oneheaded_shotgun_ammunition')
        ]).transitionalItem('kubejs:component_oneheaded_shotgun_ammunition').loops(1)   //独头霰弹枪弹头

    event.recipes.create.sequenced_assembly(
        'kubejs:component_shotgun_ammunition',
        'immersiveengineering:empty_shell',
        [
            event.recipes.createDeploying('kubejs:component_shotgun_ammunition', ['kubejs:component_shotgun_ammunition', 'kubejs:primer']),
            event.recipes.createDeploying('kubejs:component_shotgun_ammunition', ['kubejs:component_shotgun_ammunition', 'kubejs:small_portions_gunpowder']),
            event.recipes.createDeploying('kubejs:component_shotgun_ammunition', ['kubejs:component_shotgun_ammunition', 'kubejs:small_portions_gunpowder'])
        ]).transitionalItem('kubejs:component_shotgun_ammunition').loops(1)   //未完成的霰弹枪弹药



 })