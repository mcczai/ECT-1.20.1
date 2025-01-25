ServerEvents.recipes(event => {
    event.custom(                     //成形的坚固板
            {
               "type":"immersiveengineering:arc_furnace",
               "results":[
               {
                  "count":4,
                  "base_ingredient":{
                   "item":"kubejs:formed_sturdy_sheet"
                  }
                }],
            "additives":[{"item":"minecraft:coal"}],
            "input":{"item":"immersiveengineering:plate_steel"},
            "time":100,"energy":51200
            }
       )

    event.custom(                     //石灰（电弧炉）花岗岩
            {
               "type":"immersiveengineering:arc_furnace",
               "additives":[],
               "results":[
               {
                  "count":4,
                  "base_ingredient":{
                   "item":"kubejs:lime"
                  }
                }],
            "input":{"item":"minecraft:granite"},
            "time":100,"energy":51200
            }
       )

    event.custom(                     //石灰（电弧炉）石灰岩
            {
               "type":"immersiveengineering:arc_furnace",
               "additives":[],
               "results":[
               {
                  "count":6,
                  "base_ingredient":{
                   "item":"kubejs:lime"
                  }
                }],
            "input":{"item":"create:limestone"},
            "time":100,"energy":51200
            }
       )

    event.custom(                     //坚固板
            {
               "type":"immersiveengineering:arc_furnace",
               "results":[
               {
                  "count":1,
                  "base_ingredient":{
                   "item":"create:sturdy_sheet"
                  }
                }],
               "additives":[{"item":"immersiveengineering:dust_coke"}],
            "input":{"item":"kubejs:formed_sturdy_sheet"},
            "time":100,"energy":51200
            }
       )
})