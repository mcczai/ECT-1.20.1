ItemEvents.tooltip(tooltip => {

     tooltip.addAdvanced('kubejs:medical_kits',(item,advanced,text) =>{
         if(!tooltip.shift){
          text.add(1, Component.translate('tooltip.kubejs.medical_kits.1'));
          text.add(2, Component.translate('tooltip.kubejs.shift'))
         }
         else{
          text.add(1, Component.translate('tooltip.kubejs.medical_kits.1'));
          text.add(2, Component.translate('tooltip.kubejs.medical_kits.2'));
          text.add(3, Component.translate('tooltip.kubejs.medical_kits.3'));
          text.add(4, Component.translate('tooltip.kubejs.medical_kits.4'))
         }
      })

     tooltip.addAdvanced('kubejs:jute_injection',(item,advanced,text) =>{
        if(!tooltip.shift){
         text.add(1, Component.translate('tooltip.kubejs.jute_injection.1'));
         text.add(2, Component.translate('tooltip.kubejs.shift'))
        }
        else{
         text.add(1, Component.translate('tooltip.kubejs.jute_injection.1'));
         text.add(2, Component.translate('tooltip.kubejs.jute_injection.2'));
         text.add(3, Component.translate('tooltip.kubejs.jute_injection.3'));
         text.add(4, Component.translate('tooltip.kubejs.jute_injection.4'));
         text.add(4, Component.translate('tooltip.kubejs.jute_injection.5'))
        }
     })

     tooltip.addAdvanced('immersiveengineering:glider',(item,advanced,text) =>{
       text.add(1, Component.translate('tooltip.immersiveengineerings.glider.1'));
       text.add(2, Component.translate('tooltip.immersiveengineerings.glider.2'))
     })

     tooltip.addAdvanced('kubejs:sfpt',(item,advanced,text) =>{
            text.add(1, Component.translate('tooltip.kubejs.sfpt'))
     })

     tooltip.addAdvanced('kubejs:idea',(item,advanced,text) =>{
            text.add(1, Component.translate('tooltip.kubejs.idea1'))
            text.add(2, Component.translate('tooltip.kubejs.idea2'))
          })
})
