import './App.scss';
import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      ItemsCemetery: [
        {"key" : "cem1", "Name": "Ashen Estus Flask - in front of fountain"},
        {"key" : "cem2", "Name": "Iudex Gundyr - Boss"},
      ],
      ItemsFirelink: [
        {"key" : "fire1", "Name": "Fire Keeper Soul - Top of tower"},
        {"key" : "fire2", "Name": "Estus Ring - Bottom of tower"},
        {"key" : "fire3", "Name": "Estus Shard - Rafters"},
        {"key" : "fire4", "Name": "Covetous Silver Serpent Ring - Chest behind thrones"}
      ],
      ItemsHigh: [
        {"key" : "high1", "Name": "Estus Shard - big room before winged knight"},
        {"key" : "high2", "Name": "Cell Key - big room before winged knight"},
        {"key" : "high3", "Name": "Ring of Sacrifice - above winged knight"},
        {"key" : "high4", "Name": "Free Greirat - below Tower on the Wall bonfire"},
        {"key" : "high5", "Name": "Way of  Blue Covenant - Dancer area"},
        {"key" : "high6", "Name": "Vordt of the Boreal Valley"},
        {"key" : "high7", "Name": "Dancer of the Boreal Valley"}
      ],
      ItemsSettle: [
        {"key" : "set1", "Name": "Loretta's Bone - Corpse befoe Evangelist"},
        {"key" : "set2", "Name": "Estus Shard - Evangelist area"},
        {"key" : "set15", "Name": "Warrior of Sunlight Covenant - Broken floor in house after Evangelist area"},
        {"key" : "set3", "Name": "Mound Makers - Rooftops to the right of Evangelist area"},
        {"key" : "set4", "Name": "Flame Stoneplate Ring - Right after Mound Makers NPC"},
        {"key" : "set5", "Name": "Free Cornyx - Above Cliff Underside bonfire"},
        {"key" : "set6", "Name": "Fire Clutch Ring - Above Cliff Underside bonfire"},
        {"key" : "set7", "Name": "Befriend Giant - Top of tower"},
        {"key" : "set8", "Name": "Flynn's Ring - Roof after fire demon"},
        {"key" : "set9", "Name": "Chloranthy Ring - Tower after Flynn's ring"},
        {"key" : "set10", "Name": "Undead Bone Shard - Giant snipe zone"},
        {"key" : "set11", "Name": "Mortician's Ashes - Giant snipe zone"},
        {"key" : "set12", "Name": "Grave Key - Shrine Handmaid for 1500 after Mortician's Ashes"},
        {"key" : "set13", "Name": "Bloodbite Ring - Big rat in sewer"},
        {"key" : "set14", "Name": "Free Irina - Area after sewer"},
        {"key" : "set16", "Name": "Curse-Rotted Greatwood"}
      ],
      ItemsRoad: [
        {"key" : "road1", "Name": "Braille Divine Tome of Carim - Drop down area with dogs"},
        {"key" : "road2", "Name": "Morne's Ring - Drop down area with dogs"},
        {"key" : "road3", "Name": "Blue Sentinels Covenant - Horace beside Halfway Fortress bonfire"},
        {"key" : "road4", "Name": "Estus Shard - Behind ruins"},
        {"key" : "road5", "Name": "Ring of Sacrifice - Drop off ledge in ruins"},
        {"key" : "road6", "Name": "Recruit Orbeck - Top of ruins"},
        {"key" : "road7", "Name": "Sage Ring - Drop through floor under Orbeck"},
        {"key" : "road8", "Name": "Great Swamp Ring - Drop from giant crab"},
        {"key" : "road9", "Name": "Farron Coal - After black knight"},
        {"key" : "road10", "Name": "Crystal Sage"}
      ],
      ItemsCathedral: [
        {"key" : "cath1", "Name": "Paladin's Ashes - Left of Cathedral of the Deep bonfire"},
        {"key" : "cath2", "Name": "Estus Shard - Right outside Cathedral"},
        {"key" : "cath3", "Name": "Undead Bone Shard - Gaint snipe zone"},
        {"key" : "cath4", "Name": "Poisonbite Ring - Room after gaint crystal lizard"},
        {"key" : "cath5", "Name": "Lloyd's Sword Ring - Giant head height path"},
        {"key" : "cath6", "Name": "Deep Braille Divine Tome - Mimic after Lloyd's Sword Ring"},
        {"key" : "cath7", "Name": "Aldrich's Sapphire - Giant spider after mimic"},
        {"key" : "cath8", "Name": "Deep Ring - Behind ruins"},
        {"key" : "cath9", "Name": "Rosaria's Fingers Covenant - Behind second Patches"},
        {"key" : "cath10", "Name": "Deacons of the Deep"}
      ],
      ItemsFarron: [
        {"key" : "far1", "Name": "Estus Shard - Left and up of Farron Keep bonfire"},
        {"key" : "far2", "Name": "Sage's Coal - Left of first fire"},
        {"key" : "far3", "Name": "Sage's Scroll - Left of seccond fire"},
        {"key" : "far11", "Name": "Lingering Dragoncrest Ring - Drop from swamp crab"},
        {"key" : "far4", "Name": "Undead Bone Shard - Building after seccond fire"},
        {"key" : "far5", "Name": "Watchdogs of Farron covenant - Big tower after seccond fire"},
        {"key" : "far6", "Name": "Dreamchaser's Ashes - Illusory wall outside Watchdogs of Farron"},
        {"key" : "far7", "Name": "Stray Demon"},
        {"key" : "far8", "Name": "Golden Scroll - Cave after third fire"},
        {"key" : "far9", "Name": "Abyss Watchers"}
      ],
      ItemsCatacombs: [
        {"key" : "cata1", "Name": "Carthus Pyromancy Tome - Illusory wall at top of rolling ball area"},
        {"key" : "cata2", "Name": "Undead Bone Shard - Drop from first rolling ball"},
        {"key" : "cata3", "Name": "Carthus Milkring - Behind afinity jars"},
        {"key" : "cata4", "Name": "Carthus Bloodring - Far right of seccond rolling ball lowwer area"},
        {"key" : "cata5", "Name": "Grave Warden's Ashes - Above seccond rolling ball area"},
        {"key" : "cata6", "Name": "High Lord Wolnir"},
        {"key" : "cata7", "Name": "Fire Demon"},
        {"key" : "cata8", "Name": "Witch's Ring - After Fire Demon"}
      ],
      ItemsLake: [
        {"key" : "lake1", "Name": "Undead Bone Shard - Drop from giant worm"},
        {"key" : "lake2", "Name": "Speckled Stoneplate Ring - Behind stone wall, only destroyed by balista"},
        {"key" : "lake3", "Name": "Estus Shard - Jump the gap, or backtrack after Old King's Antechamber bonfire"},
        {"key" : "lake4", "Name": "Izalith Pyromancy Tome- Beside Old King's Antechamber bonfire"},
        {"key" : "lake5", "Name": "Undead Bone Shard - Hall with three fire throwers"},
        {"key" : "lake6", "Name": "Quelana Pyromancy Tome - After hall with three fire throwers"},
        {"key" : "lake7", "Name": "Knight Slayer's Ring - drop from Knight Slayer Tsorig"},
        {"key" : "lake8", "Name": "Shield of Want - Lake"},
        {"key" : "lake9", "Name": "Old Demon King"}
      ],
      ItemsIrithyll: [
        {"key" : "iri1", "Name": "Pontiff's Right Eye - Sulyvahn's Beast on bridge"},
        {"key" : "iri2", "Name": "Magic Clutch Ring - Illusory wall beside ornate altar"},
        {"key" : "iri3", "Name": "Undead Bone Shard - Behind gravestone after Church of Yorshka bonfire"},
        {"key" : "iri4", "Name": "Ring of Sacrifice - Corpse in water"},
        {"key" : "iri5", "Name": "Excrement-covered Ashes - Exit of sewer area"},
        {"key" : "iri6", "Name": "Leo Ring - One of three silver knight chests"},
        {"key" : "iri7", "Name": "Pontiff Sulyvahn"},
        {"key" : "iri8", "Name": "Dark Stoneplate Ring - Left of big courtyard by invisible enemies"},
        {"key" : "iri9", "Name": "Aldrich's Faithful Covenant - Flooded chamber with two Sulyvahn's Beasts"},
        {"key" : "iri10", "Name": "Ring of Favor - Same room as Aldrich's Faithful Covenant"},
        {"key" : "iri11", "Name": "Easterner's Ashes - Lower roof on silver knight snipers area"},
        {"key" : "iri12", "Name": "Reversal Ring(useless) - Illusory wall before roatating platform, far into tomb"},
        {"key" : "iri13", "Name": "Blades of the Darkmoon Covenant - Backtrack onto roatating platform from Anor Londo bonfire"}
      ],
      ItemsDungeon: [
        {"key" : "dun1", "Name": "Jailbreaker's Key - Far side top from Irithyll Dungeon bonfire"},
        {"key" : "dun2", "Name": "Prisoner Chief's Ashes - Far side bottom from Irithyll Dungeon bonfire, need Jailer's Key Ring from Profaned Capital"},
        {"key" : "dun3", "Name": "Estus Shard - Mimic after hooded enemies"},
        {"key" : "dun4", "Name": "Old Cell Key - Right mimic at end of sewer"},
        {"key" : "dun5", "Name": "Dark Clutch Ring - Left mimic at end of sewer"},
        {"key" : "dun6", "Name": "Profaned Coal - Front left of jailer room"},
        {"key" : "dun7", "Name": "Xanthous Ashes - Back left of jailer room"},
        {"key" : "dun8", "Name": "Dusk Crown Ring - Back left of jailer room"},
        {"key" : "dun9", "Name": "Free Karla - Front right of jailer room, need Jailer's Key Ring from Profaned Capital"},
        {"key" : "dun10", "Name": "Undead Bone Shard - Right before Profaned Capital bonfire"}
      ],
      ItemsCapital: [
        {"key" : "cap1", "Name": "Cursebite Ring - Cave with toxic pool"},
        {"key" : "cap2", "Name": "Logan's Scroll - drop from sorcerer NPC on roof"},
        {"key" : "cap3", "Name": "Covetous Gold Serpent Ring - Siegward jail room"},
        {"key" : "cap4", "Name": "Jailer's Key Ring - Empty jail from rooftop"},
        {"key" : "cap6", "Name": "Yhorm the Giant"}
      ],
      ItemsAnor: [
        {"key" : "anor1", "Name": "Giant's Coal - Left side entrance"},
        {"key" : "anor2", "Name": "Aldrich's Ruby - Drop from giant spider"},
        {"key" : "anor3", "Name": "Estus Shard - Chest on left side of main hall"},
        {"key" : "anor4", "Name": "Aldrich, Devourer of Gods"},
        {"key" : "anor5", "Name": "Sun Princess Ring - Gwynevere's room"}
      ],
      ItemsGarden: [
        {"key" : "gard1", "Name": "Estus Shard - Early roll off first elevator"},
        {"key" : "gard2", "Name": "Ring of Sacrifice - Toxic swamp"},
        {"key" : "gard3", "Name": "Magic Stoneplate Ring - Drop from knight"},
        {"key" : "gard4", "Name": "Dragonscale Ring - Early roll off seccond elevator"},
        {"key" : "gard5", "Name": "Oceiros, the Consumed King"},
        {"key" : "gard6", "Name": "Path of the Dragon Gesture - Room before illusory wall"}
      ],
      ItemsGrave: [
        {"key" : "grav1", "Name": "Ashen Estus Ring - left of Untended Graves bonfire"},
        {"key" : "grav2", "Name": "Champion Gundyr"},
        {"key" : "grav3", "Name": "Hornet Ring - By gravestones"},
        {"key" : "grav4", "Name": "Priestess Ring - 1000 souls from dark Shrine Handmaid"},
        {"key" : "grav5", "Name": "Eyes of a Fire Keeper- Illusory wall by Irina"}
      ],
      ItemsCastle: [
        {"key" : "cas1", "Name": "Undead Bone Shard - Drop off bridge on dragon side"},
        {"key" : "cas2", "Name": "Knight's Ring - Past rooftop after shortcut unlock"},
        {"key" : "cas3", "Name": "Braille Divine Tome of Lothric - Drop down after shortcut unlock"},
        {"key" : "cas4", "Name": "Red Tearstone Ring - Outside building with twin princes shortcut"},
        {"key" : "cas5", "Name": "Dragonslayer Armour"}
      ],
      ItemsArchive: [
        {"key" : "arc1", "Name": "Grand Archives Key - Before front door"},
        {"key" : "arc2", "Name": "Crystal Scroll - Drop from crystal sage"},
        {"key" : "arc3", "Name": "Scholar Ring - Bookcase behind lever by boreal knight"},
        {"key" : "arc4", "Name": "Fleshbite Ring - Area before rooftops"},
        {"key" : "arc5", "Name": "Undead Bone Shard - Area after rooftops"},
        {"key" : "arc6", "Name": "Estus Shard - Behind three winged knights"},
        {"key" : "arc7", "Name": "Hunter's Ring - Building after three winged knights"},
        {"key" : "arc8", "Name": "Twin Princes"}
      ],
      ItemsPeak: [
        {"key" : "peak1", "Name": "Lightning Clutch Ring - Left of Ancient Wyvern arena"},
        {"key" : "peak2", "Name": "Ancient Wyvern"},
        {"key" : "peak3", "Name": "Ring of Steel Protection - Ground section of Ancient Wyvern arena"},
        {"key" : "peak4", "Name": "Calamity Ring(useless) - Path of the Dragon Gesture in front of alter after Dragon-Kin Mausoleum bonfire"},
        {"key" : "peak5", "Name": "Dragon Chaser's Ashes - Left path after Great Belfry bonfire"},
        {"key" : "peak6", "Name": "Nameless King"}
      ],
      ItemsKiln: [
        {"key" : "kiln1", "Name": "Soul of Cinder"}
      ],
      ItemsAriandel: [
        {"key" : "ari1", "Name": "Captain's Ashes - Top of Millwood Knight tower"},
        {"key" : "ari2", "Name": "Chillbite Ring - Talk to Sister Friede"},
        {"key" : "ari3", "Name": "Champion's Gravetender"},
        {"key" : "ari4", "Name": "Sister Friede"}
      ],
      ItemsDreg: [
        {"key" : "dreg1", "Name": "Ring of Steel Protection +3 - Far side building by first angel"},
        {"key" : "dreg2", "Name": "Covetous Silver Serpent Ring +3 - Murkmen section, behind illusory wall and off ledge"},
        {"key" : "dreg3", "Name": "Ring of Favor +3 - Large branch by seccond and third angel"},
        {"key" : "dreg4", "Name": "The Demon Prince"},
        {"key" : "dreg5", "Name": "Small Envoy Banner - After Demon Prince arena"}
      ],
      ItemsCity: [
        {"key" : "ring1", "Name": "Wolf Ring +3 - Drop from Seeker of the Spurned invader, left turn on giant staircase"},
        {"key" : "ring2", "Name": "Havel's Ring +3 - Drop down ledges after Silver Knight Ledo"},
        {"key" : "ring3", "Name": "Covetous Gold Serpent Ring +3 - Lapp's room by Ringed City Streets bonfire"},
        {"key" : "ring4", "Name": "Ring of the Evil Eye +3 - Mimic in tower after dragon fire run"},
        {"key" : "ring5", "Name": "Chloranthy Ring +3 - Dropdown oposite side from Midir fight"},
        {"key" : "ring6", "Name": "Halflight, Spear of the Church"},
        {"key" : "ring7", "Name": "Darkeater Midir"},
        {"key" : "ring8", "Name": "Slave Knight Gael"}
      ]
    }
  };

  componentDidMount(){
    document.getElementById("btnCemetery").addEventListener("click", cemeteryToggle);
    document.getElementById("btnFirelink").addEventListener("click", firelinkToggle);
    document.getElementById("btnHigh").addEventListener("click", highToggle);
    document.getElementById("btnSettle").addEventListener("click", settleToggle);
    document.getElementById("btnRoad").addEventListener("click", roadToggle);
    document.getElementById("btnCathedral").addEventListener("click", cathedralToggle);
    document.getElementById("btnFarron").addEventListener("click", farronToggle);
    document.getElementById("btnCatacombs").addEventListener("click", catacombsToggle);
    document.getElementById("btnLake").addEventListener("click", lakeToggle);
    document.getElementById("btnValley").addEventListener("click", valleyToggle);
    document.getElementById("btnDungeon").addEventListener("click", dungeonToggle);
    document.getElementById("btnCapital").addEventListener("click", capitalToggle);
    document.getElementById("btnLondo").addEventListener("click", londoToggle);
    document.getElementById("btnGarden").addEventListener("click", gardenToggle);
    document.getElementById("btnGraves").addEventListener("click", gravesToggle);
    document.getElementById("btnCastle").addEventListener("click", castleToggle);
    document.getElementById("btnArchives").addEventListener("click", archivesToggle);
    document.getElementById("btnPeak").addEventListener("click", peakToggle);
    document.getElementById("btnKiln").addEventListener("click", kilnToggle);
    document.getElementById("btnAriandel").addEventListener("click", ariandelToggle);
    document.getElementById("btnDreg").addEventListener("click", dregToggle);
    document.getElementById("btnRinged").addEventListener("click", ringedToggle);
    this.runcounts();
  }

  toggleCheckboxChange = (e) => {
    if (e.target.type === 'checkbox') {
      localStorage.setItem(e.target.id, e.target.checked)
    }
    this.runcounts();
  }

  runcounts(){
    this.cemeteryCount();
    this.FirelinkCount();
    this.HighCount();
    this.SettleCount();
    this.RoadCount();
    this.CathedralCount();
    this.FarronCount();
    this.CatacombsCount();
    this.LakeCount();
    this.ValleyCount();
    this.DungeonCount();
    this.CapitalCount();
    this.LondoCount();
    this.GardenCount();
    this.GravesCount();
    this.CastleCount();
    this.ArchivesCount();
    this.PeakCount();
    this.KilnCount();
    this.AriandelCount();
    this.DregCount();
    this.RingedCount();
  }

  cemeteryCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("cem") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("cemeteryTotal").innerText = count+"/"+this.state.ItemsCemetery.length;
  }

  FirelinkCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("fire") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("firelinkTotal").innerText = count+"/"+this.state.ItemsFirelink.length;
  }

  HighCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("high") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("highTotal").innerText = count+"/"+this.state.ItemsHigh.length;
  }

  SettleCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("set") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("settleTotal").innerText = count+"/"+this.state.ItemsSettle.length;
  }

  RoadCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("road") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("roadTotal").innerText = count+"/"+this.state.ItemsRoad.length;
  }

  CathedralCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("cath") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("cathedralTotal").innerText = count+"/"+this.state.ItemsCathedral.length;
  }

  FarronCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("far") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("farronTotal").innerText = count+"/"+this.state.ItemsFarron.length;
  }

  CatacombsCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("cata") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("catacombsTotal").innerText = count+"/"+this.state.ItemsCatacombs.length;
  }
  
  LakeCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("lake") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("lakeTotal").innerText = count+"/"+this.state.ItemsLake.length;
  }

  ValleyCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("iri") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("valleyTotal").innerText = count+"/"+this.state.ItemsIrithyll.length;
  }

  DungeonCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("dun") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("dungeonTotal").innerText = count+"/"+this.state.ItemsDungeon.length;
  }

  CapitalCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("cap") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("capitalTotal").innerText = count+"/"+this.state.ItemsCapital.length;
  }

  LondoCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("anor") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("londoTotal").innerText = count+"/"+this.state.ItemsAnor.length;
  }

  GardenCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("gard") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("gardenTotal").innerText = count+"/"+this.state.ItemsGarden.length;
  }

  GravesCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("grav") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("gravesTotal").innerText = count+"/"+this.state.ItemsGrave.length;
  }

  CastleCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("cas") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("castleTotal").innerText = count+"/"+this.state.ItemsCastle.length;
  }

  ArchivesCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("arc") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("archivesTotal").innerText = count+"/"+this.state.ItemsArchive.length;
  }

  PeakCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("peak") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("peakTotal").innerText = count+"/"+this.state.ItemsPeak.length;
  }

  KilnCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("kiln") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("kilnTotal").innerText = count+"/"+this.state.ItemsKiln.length;
  }

  AriandelCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("ari") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("ariandelTotal").innerText = count+"/"+this.state.ItemsAriandel.length;
  }

  DregCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("dreg") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("dregTotal").innerText = count+"/"+this.state.ItemsDreg.length;
  }

  RingedCount(){
    let count = 0;
    for (var i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("ring") && localStorage.getItem(localStorage.key(i)) === "true")
        count++
    }
    document.getElementById("ringedTotal").innerText = count+"/"+this.state.ItemsCity.length;
  }

  render(){
    return (
      <div className="App">

        <h1>Dark Souls 3 Checklist</h1>
        
        <h2>
          Cemetery of Ash
        </h2>
        <div class="flex">
          <button id="btnCemetery" class="hideShowBtn">Show</button>
          <p id="cemeteryTotal"></p>
        </div>
        <div id="checkboxCemetery" class="checkbox-list">
        {
        this.state.ItemsCemetery.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Firelink Shrine
        </h2>
        <div class="flex">
          <button id="btnFirelink" class="hideShowBtn">Show</button>
          <p id="firelinkTotal"></p>
        </div>
        <div id="checkboxFirelink" class="checkbox-list">
        {
        this.state.ItemsFirelink.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          High Wall of Lothric
        </h2>
        <div class="flex">
          <button id="btnHigh" class="hideShowBtn">Show</button>
          <p id="highTotal"></p>
        </div>
        <div id="checkboxHigh" class="checkbox-list">
        {
        this.state.ItemsHigh.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Undead Settlement
        </h2>
        <div class="flex">
          <button id="btnSettle" class="hideShowBtn">Show</button>
          <p id="settleTotal"></p>
        </div>
        <div id="checkboxSettle" class="checkbox-list">
        {
        this.state.ItemsSettle.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Road of Sacrifices
        </h2>
        <div class="flex">
          <button id="btnRoad" class="hideShowBtn">Show</button>
          <p id="roadTotal"></p>
        </div>
        <div id="checkboxRoad" class="checkbox-list">
        {
        this.state.ItemsRoad.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>
        <h2>
          Cathedral of the Deep
        </h2>
        <div class="flex">
          <button id="btnCathedral" class="hideShowBtn">Show</button>
          <p id="cathedralTotal"></p>
        </div>
        <div id="checkboxCathedral" class="checkbox-list">
        {
        this.state.ItemsCathedral.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Farron Keep
        </h2>
        <div class="flex">
          <button id="btnFarron" class="hideShowBtn">Show</button>
          <p id="farronTotal"></p>
        </div>
        <div id="checkboxFarron" class="checkbox-list">
        {
        this.state.ItemsFarron.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Catacombs of Carthus
        </h2>
        <div class="flex">
          <button id="btnCatacombs" class="hideShowBtn">Show</button>
          <p id="catacombsTotal"></p>
        </div>
        <div id="checkboxCatacombs" class="checkbox-list">
        {
        this.state.ItemsCatacombs.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Smouldering Lake
        </h2>
        <div class="flex">
          <button id="btnLake" class="hideShowBtn">Show</button>
          <p id="lakeTotal"></p>
        </div>
        <div id="checkboxLake" class="checkbox-list">
        {
        this.state.ItemsLake.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Irithyll of the Boreal Valley
        </h2>
        <div class="flex">
          <button id="btnValley" class="hideShowBtn">Show</button>
          <p id="valleyTotal"></p>
        </div>
        <div id="checkboxValley" class="checkbox-list">
        {
        this.state.ItemsIrithyll.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Irithyll Dungeon
        </h2>
        <div class="flex">
          <button id="btnDungeon" class="hideShowBtn">Show</button>
          <p id="dungeonTotal"></p>
        </div>
        <div id="checkboxDungeon" class="checkbox-list">
        {
        this.state.ItemsDungeon.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Profaned Capital
        </h2>
        <div class="flex">
          <button id="btnCapital" class="hideShowBtn">Show</button>
          <p id="capitalTotal"></p>
        </div>
        <div id="checkboxCapital" class="checkbox-list">
        {
        this.state.ItemsCapital.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Anor Londo
        </h2>
        <div class="flex">
          <button id="btnLondo" class="hideShowBtn">Show</button>
          <p id="londoTotal"></p>
        </div>
        <div id="checkboxLondo" class="checkbox-list">
        {
        this.state.ItemsAnor.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Consumed King's Garden
        </h2>
        <div class="flex">
          <button id="btnGarden" class="hideShowBtn">Show</button>
          <p id="gardenTotal"></p>
        </div>
        <div id="checkboxGarden" class="checkbox-list">
        {
        this.state.ItemsGarden.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Untended Graves
        </h2>
        <div class="flex">
          <button id="btnGraves" class="hideShowBtn">Show</button>
          <p id="gravesTotal"></p>
        </div>
        <div id="checkboxGraves" class="checkbox-list">
        {
        this.state.ItemsGrave.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Lothric Castle
        </h2>
        <div class="flex">
          <button id="btnCastle" class="hideShowBtn">Show</button>
          <p id="castleTotal"></p>
        </div>
        <div id="checkboxCastle" class="checkbox-list">
        {
        this.state.ItemsCastle.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Grand Archives
        </h2>
        <div class="flex">
          <button id="btnArchives" class="hideShowBtn">Show</button>
          <p id="archivesTotal"></p>
        </div>
        <div id="checkboxArchives" class="checkbox-list">
        {
        this.state.ItemsArchive.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Archdragon Peak
        </h2>
        <div class="flex">
          <button id="btnPeak" class="hideShowBtn">Show</button>
          <p id="peakTotal"></p>
        </div>
        <div id="checkboxPeak" class="checkbox-list">
        {
        this.state.ItemsPeak.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Kiln of the First Flame
        </h2>
        <div class="flex">
          <button id="btnKiln" class="hideShowBtn">Show</button>
          <p id="kilnTotal"></p>
        </div>
        <div id="checkboxKiln" class="checkbox-list">
        {
        this.state.ItemsKiln.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          Painted World of Ariandel
        </h2>
        <div class="flex">
          <button id="btnAriandel" class="hideShowBtn">Show</button>
          <p id="ariandelTotal"></p>
        </div>
        <div id="checkboxAriandel" class="checkbox-list">
        {
        this.state.ItemsAriandel.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          The Dreg Heap
        </h2>
        <div class="flex">
          <button id="btnDreg" class="hideShowBtn">Show</button>
          <p id="dregTotal"></p>
        </div>
        <div id="checkboxDreg" class="checkbox-list">
        {
        this.state.ItemsDreg.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

        <h2>
          The Ringed City
        </h2>
        <div class="flex">
          <button id="btnRinged" class="hideShowBtn">Show</button>
          <p id="ringedTotal"></p>
        </div>
        <div id="checkboxRinged" class="checkbox-list">
        {
        this.state.ItemsCity.map((item) =>{
            return <div>
              <input type="checkbox" id={item.key} onChange={this.toggleCheckboxChange} defaultChecked={JSON.parse(localStorage.getItem(item.key))}></input>
              <label for={item.key}>{item.Name}</label>
            </div>
          })
        }
        </div>

      </div>
    );
  };
}

function cemeteryToggle(){
  if(document.getElementById("btnCemetery").innerText === "Show"){
      document.getElementById("checkboxCemetery").style.display = "block";
      document.getElementById("btnCemetery").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxCemetery").style.display = "none";
      document.getElementById("btnCemetery").innerText = "Show";
  }
}

function firelinkToggle(){
  if(document.getElementById("btnFirelink").innerText === "Show"){
      document.getElementById("checkboxFirelink").style.display = "block";
      document.getElementById("btnFirelink").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxFirelink").style.display = "none";
      document.getElementById("btnFirelink").innerText = "Show";
  }
}

function highToggle(){
  if(document.getElementById("btnHigh").innerText === "Show"){
      document.getElementById("checkboxHigh").style.display = "block";
      document.getElementById("btnHigh").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxHigh").style.display = "none";
      document.getElementById("btnHigh").innerText = "Show";
  }
}

function settleToggle(){
  if(document.getElementById("btnSettle").innerText === "Show"){
      document.getElementById("checkboxSettle").style.display = "block";
      document.getElementById("btnSettle").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxSettle").style.display = "none";
      document.getElementById("btnSettle").innerText = "Show";
  }
}

function roadToggle(){
  if(document.getElementById("btnRoad").innerText === "Show"){
      document.getElementById("checkboxRoad").style.display = "block";
      document.getElementById("btnRoad").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxRoad").style.display = "none";
      document.getElementById("btnRoad").innerText = "Show";
  }
}

function cathedralToggle(){
  if(document.getElementById("btnCathedral").innerText === "Show"){
      document.getElementById("checkboxCathedral").style.display = "block";
      document.getElementById("btnCathedral").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxCathedral").style.display = "none";
      document.getElementById("btnCathedral").innerText = "Show";
  }
}

function farronToggle(){
  if(document.getElementById("btnFarron").innerText === "Show"){
      document.getElementById("checkboxFarron").style.display = "block";
      document.getElementById("btnFarron").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxFarron").style.display = "none";
      document.getElementById("btnFarron").innerText = "Show";
  }
}

function catacombsToggle(){
  if(document.getElementById("btnCatacombs").innerText === "Show"){
      document.getElementById("checkboxCatacombs").style.display = "block";
      document.getElementById("btnCatacombs").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxCatacombs").style.display = "none";
      document.getElementById("btnCatacombs").innerText = "Show";
  }
}

function lakeToggle(){
  if(document.getElementById("btnLake").innerText === "Show"){
      document.getElementById("checkboxLake").style.display = "block";
      document.getElementById("btnLake").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxLake").style.display = "none";
      document.getElementById("btnLake").innerText = "Show";
  }
}

function valleyToggle(){
  if(document.getElementById("btnValley").innerText === "Show"){
      document.getElementById("checkboxValley").style.display = "block";
      document.getElementById("btnValley").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxValley").style.display = "none";
      document.getElementById("btnValley").innerText = "Show";
  }
}

function dungeonToggle(){
  if(document.getElementById("btnDungeon").innerText === "Show"){
      document.getElementById("checkboxDungeon").style.display = "block";
      document.getElementById("btnDungeon").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxDungeon").style.display = "none";
      document.getElementById("btnDungeon").innerText = "Show";
  }
}

function capitalToggle(){
  if(document.getElementById("btnCapital").innerText === "Show"){
      document.getElementById("checkboxCapital").style.display = "block";
      document.getElementById("btnCapital").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxCapital").style.display = "none";
      document.getElementById("btnCapital").innerText = "Show";
  }
}

function londoToggle(){
  if(document.getElementById("btnLondo").innerText === "Show"){
      document.getElementById("checkboxLondo").style.display = "block";
      document.getElementById("btnLondo").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxLondo").style.display = "none";
      document.getElementById("btnLondo").innerText = "Show";
  }
}

function gardenToggle(){
  if(document.getElementById("btnGarden").innerText === "Show"){
      document.getElementById("checkboxGarden").style.display = "block";
      document.getElementById("btnGarden").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxGarden").style.display = "none";
      document.getElementById("btnGarden").innerText = "Show";
  }
}

function gravesToggle(){
  if(document.getElementById("btnGraves").innerText === "Show"){
      document.getElementById("checkboxGraves").style.display = "block";
      document.getElementById("btnGraves").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxGraves").style.display = "none";
      document.getElementById("btnGraves").innerText = "Show";
  }
}

function castleToggle(){
  if(document.getElementById("btnCastle").innerText === "Show"){
      document.getElementById("checkboxCastle").style.display = "block";
      document.getElementById("btnCastle").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxCastle").style.display = "none";
      document.getElementById("btnCastle").innerText = "Show";
  }
}

function archivesToggle(){
  if(document.getElementById("btnArchives").innerText === "Show"){
      document.getElementById("checkboxArchives").style.display = "block";
      document.getElementById("btnArchives").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxArchives").style.display = "none";
      document.getElementById("btnArchives").innerText = "Show";
  }
}

function peakToggle(){
  if(document.getElementById("btnPeak").innerText === "Show"){
      document.getElementById("checkboxPeak").style.display = "block";
      document.getElementById("btnPeak").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxPeak").style.display = "none";
      document.getElementById("btnPeak").innerText = "Show";
  }
}

function kilnToggle(){
  if(document.getElementById("btnKiln").innerText === "Show"){
      document.getElementById("checkboxKiln").style.display = "block";
      document.getElementById("btnKiln").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxKiln").style.display = "none";
      document.getElementById("btnKiln").innerText = "Show";
  }
}

function ariandelToggle(){
  if(document.getElementById("btnAriandel").innerText === "Show"){
      document.getElementById("checkboxAriandel").style.display = "block";
      document.getElementById("btnAriandel").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxAriandel").style.display = "none";
      document.getElementById("btnAriandel").innerText = "Show";
  }
}

function dregToggle(){
  if(document.getElementById("btnDreg").innerText === "Show"){
      document.getElementById("checkboxDreg").style.display = "block";
      document.getElementById("btnDreg").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxDreg").style.display = "none";
      document.getElementById("btnDreg").innerText = "Show";
  }
}

function ringedToggle(){
  if(document.getElementById("btnRinged").innerText === "Show"){
      document.getElementById("checkboxRinged").style.display = "block";
      document.getElementById("btnRinged").innerText = "Hide";
  }
  else{
      document.getElementById("checkboxRinged").style.display = "none";
      document.getElementById("btnRinged").innerText = "Show";
  }
}

export default App;