ServerEvents.recipes(event => {

     event.custom({                              //小份火药
         "type":"immersiveengineering:metal_press",
          "mold":"immersiveengineering:mold_unpacking",
          "result":{"item":"kubejs:small_portions_gunpowder","count":18},
          "input":{"tag":"forge:gunpowder"},
          "energy":2400
          })

     event.custom({                              //12号弹丸
         "type":"immersiveengineering:metal_press",
          "mold":"immersiveengineering:mold_unpacking",
          "result":{"item":"kubejs:no12_projectiles","count":4},
          "input":{"tag":"forge:ingots/copper"},
          "energy":2400
          })

     event.custom({                              //手枪弹壳
            "type":"immersiveengineering:metal_press",
             "mold":"kubejs:pistol_casings_mold",
             "result":{"item":"kubejs:pistol_casings","count":18},
             "input":{"tag":"forge:ingots/copper"},
             "energy":2400
             })

     event.custom({                              //步枪弹壳
            "type":"immersiveengineering:metal_press",
             "mold":"kubejs:rifle_shells_mold",
             "result":{"item":"kubejs:rifle_shells","count":9},
             "input":{"tag":"forge:ingots/copper"},
             "energy":2400
             })

     event.custom({                              //大型弹壳(霰弹)
            "type":"immersiveengineering:metal_press",
             "mold":"immersiveengineering:mold_bullet_casing",
             "result":{"item":"immersiveengineering:empty_shell","count":5},
             "input":{"item":"immersiveengineering:plate_duroplast"},
             "energy":2400
             })
})