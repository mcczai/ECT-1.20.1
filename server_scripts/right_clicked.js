ItemEvents.rightClicked(event => {
      if (event.player.crouching && event.player.mainHandItem.id == "kubejs:jute_injection"){
           event.item.count--;
           event.player.addItemCooldown("kubejs:jute_injection",6);
           let i = Math.floor(Math.random() * 100 ) + 1
           if(i >=90){
              event.player.potionEffects.add("minecraft:strength",600,1,false,false);
              event.player.potionEffects.add("minecraft:resistance",600,1,false,false);
              event.player.potionEffects.add("minecraft:speed",600,0,false,false);
            }else if(i < 90 && i >= 50){
              event.player.potionEffects.add("minecraft:speed",600,0,false,false);
              event.player.potionEffects.add("minecraft:strength",600,0,false,false);
              event.player.potionEffects.add("brewery:drunk",600,2,false,false);
            }else if(i < 50 && i >= 20){
              event.player.potionEffects.add("minecraft:speed",600,0,false,false);
              event.player.potionEffects.add("minecraft:nausea",600,0,false,false);
              event.player.potionEffects.add("minecraft:weakness",1200,0,false,false);
              event.player.potionEffects.add("brewery:drunk",1200,2,false,false);
              event.player.potionEffects.add("minecraft:mining_fatigue",1200,1,false,false);
            }else if(i >= 1 && i<= 5){
              event.player.potionEffects.add("minecraft:instant_damage",20,9,false,false);
            }else{
              event.player.potionEffects.add("minecraft:mining_fatigue",1200,1,false,false);
              event.player.potionEffects.add("minecraft:nausea",600,1,false,false);
              event.player.potionEffects.add("brewery:drunk",1200,3,false,false);
              event.player.potionEffects.add("minecraft:slowness",1200,0,false,false);
              event.player.potionEffects.add("minecraft:weakness",1200,1,false,false);
            }

      }
})//黄麻碱针剂实现

ItemEvents.rightClicked(event => {
       if (event.player.crouching && event.player.mainHandItem.id == "kubejs:medical_kits")
       {
            event.player.heal(2);
            event.item.count--;
            event.player.addItemCooldown("kubejs:medical_kits",63);
        event.player.potionEffects.add("minecraft:regeneration",50,3,false,false);
       }
})//医疗包实现