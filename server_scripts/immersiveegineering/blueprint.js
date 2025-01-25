ServerEvents.recipes(event => {

     event.custom({                              //手枪弹壳模具
       "type":"immersiveengineering:blueprint",
       "inputs":[{"count":3,"base_ingredient":{"tag":"forge:plates/steel"}},
       {"item":"immersiveengineering:wirecutter"}],
       "category":"molds",
       "result":{"item":"kubejs:rifle_shells_mold"}
       })

     event.custom({                              //步枪弹壳模具
       "type":"immersiveengineering:blueprint",
       "inputs":[{"count":3,"base_ingredient":{"tag":"forge:plates/steel"}},
       {"item":"immersiveengineering:wirecutter"}],
       "category":"molds",
       "result":{"item":"kubejs:pistol_casings_mold"}
       })

})