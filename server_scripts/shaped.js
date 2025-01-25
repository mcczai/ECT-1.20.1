ServerEvents.recipes(event => {

    event.shapeless('create:schedule', ['#forge:plates/steel', 'minecraft:paper'])       //列车时刻表

     event.shaped('kubejs:medical_kits',[     //医疗包
           'h h',
           ' e ',
           'h h'
       ],{
           h:'immersiveengineering:hemp_fabric',
           e:'kubejs:ethanol_bottled'
       })

     event.shaped('create:white_sail',[     //白色风帆
              'sss',
              'shs',
              'sss'
          ],{
              s:'#forge:rods/wooden',
              h:'immersiveengineering:hemp_fabric'
          })

     event.shaped('create:nozzle',[     //分散网
                   'iii',
                   'iai',
                   'iii'
               ],{
                   i:'minecraft:iron_bars',
                   a:'create:andesite_casing'
               })
})