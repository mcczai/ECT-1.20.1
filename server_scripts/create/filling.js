ServerEvents.recipes(event => {

  event.recipes.create.filling('kubejs:ethanol_bottled', [Fluid.of('immersiveengineering:ethanol',250), 'minecraft:glass_bottle'])      //瓶装乙醇
  event.recipes.create.filling('kubejs:jute_injection', [Fluid.of('kubejs:jute',250), 'kubejs:ethanol_bottled'])        //黄麻碱针剂

})