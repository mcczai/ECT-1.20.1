ServerEvents.recipes(event => {

  event.recipes.create.cutting('immersiveengineering:wooden_grip', 'kubejs:wooden_firearm_parts').processingTime(50)    //木握把
  event.recipes.create.cutting('2x kubejs:unpolished_steel_firearm_parts', '#forge:plates/steel').processingTime(50)    //钢制枪械零件(未打磨)

})