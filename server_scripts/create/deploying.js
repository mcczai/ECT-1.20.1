ServerEvents.recipes(event => {

    event.recipes.create.deploying('kubejs:shotgun_warheads', ['kubejs:no12_projectiles', 'minecraft:paper'])   //霰弹枪弹头
    event.recipes.create.deploying('9x kubejs:primer', ['#forge:nuggets/lead', 'kubejs:small_portions_gunpowder'])      //底火

})