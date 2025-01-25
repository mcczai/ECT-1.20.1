ServerEvents.recipes(event => {
     event.remove({id: 'immersiveengineering:crafting/gunpart_hammer'})    //移除击锤原版合成
     event.remove({id: 'immersiveengineering:crafting/gunpart_barrel'})    //移除枪管原版合成
     event.remove({id: 'immersiveengineering:blueprint/component_electronic_adv'})    //移除高级逻辑组件原版合成
     event.remove({id: 'immersiveengineering:crafting/wooden_grip'})    //移除木握柄原版合成
     event.remove({output: 'create:precision_mechanism', type: 'create:sequenced_assembly'})    //移除原版精密构建合成
     event.remove({id: 'immersiveengineering:crafting/empty_shell'})    //移除合成台大型弹壳配方
     event.remove({id: 'immersiveengineering:bottling/empty_shell'})    //移除原版灌装机合成
     event.remove({id: 'createoreexcavation:vein_finder'})    //移除合成台勘矿稿配方
     event.remove({id: 'create:crafting/kinetics/schedule'})       //移除原版列车时刻表合成
     event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})    //移出原版坚固板合成
     event.remove({id: 'immersiveengineering:crafting/watermill'})     //移出原版水车合成
     event.remove({id: 'immersiveengineering:crafting/drill'})//移除原版沉浸钻头合成
     event.remove({id: 'immersiveengineering:crafting/buzzsaw'})//移除原版沉浸电锯合成
     event.remove({id: 'immersiveengineering:crafting/chemthrower'})//移除原版化学喷射器合成
     event.remove({id: 'create:splashing/gravel'})//移除无中生铁的合成
     event.remove({id: 'create:crushing/ochrum'})//移除伴生矿粉碎产物，然后重写
     event.remove({id: 'create:crushing/veridium'})
     event.remove({id: 'create:crushing/asurine'})
     event.remove({id: 'create:crushing/crimsite'})
})