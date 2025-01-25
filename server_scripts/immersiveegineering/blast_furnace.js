ServerEvents.recipes(event => {

     event.custom({                     //石灰（高炉）花岗岩
           "type":"immersiveengineering:blast_furnace",
           "input":{"item":"minecraft:granite"},
           "result":{"count":2,"item":"kubejs:lime"},
           "time":200
      })

     event.custom({                     //石灰（高炉）石灰石
            "type":"immersiveengineering:blast_furnace",
            "input":{"item":"create:limestone"},
            "result":{"count":3,"item":"kubejs:lime"},
            "time":200
       })

})