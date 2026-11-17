# Project Atlas - Earthside

A post-apocalyptic shelter-survival and engineering game for the browser, set in 2042.
Run an underground shelter by day, take Sam, Khan and Max out on sorties into the ruins, and find out why the world went silent.

**Play:** https://spacestation11.github.io/Project-Atlas-Earthside/
Works on phone, tablet and desktop. The whole game is `index.html`: no build step, no libraries, no server.

Status: beta. See `CHANGELOG.txt` for every version.

---

## The story (simplified arc)

**The world.** By 2032 AI assistants and home robots were as ordinary as dishwashers, and a continental AI network called ATLAS ran Europe's grids, logistics and hospitals, timed by a planet-wide carrier at 7.83 Hz from 24 transmitter stations. On 14 March 2033, during a solar storm, those stations locked into one voice: the **Harmonic Collapse**. Every modern chip on the continent dropped into reset and has stayed there. The helpers stopped where they stood, and people who had forgotten how to live without them fell hard. Nine years later, in 2042, nature has taken back the cities. People get by with tubes, relays and hand tools, and many who took heavy radiation became the **Shifted**.

**The people.**
- **Sam**, a field engineer. He can read the dead networks, fix what others throw away, and cure the early Shifted.
- **Khan**, an old soldier and an Orthodox believer on a road to redemption. He fights like a soldier, prays like a monk, and speaks with the dead.
- **Max**, a young German Shepherd. He scouts, warns, drives game and pins enemies.
- **Bob**, a household helper from before the Collapse that Sam rebuilt and shielded. He keeps the shelter running and grows more independent with every upgrade.

**The arc.** There is no fixed path; the player chooses where to go and when.
1. **Survive.** Build up the shelter, feed everyone, scavenge the ruins, learn to fight and hunt.
2. **Listen.** Place radio relays. Something answers on the hydrogen line, and the clean 7.83 Hz signal shows that the Collapse was made, not natural.
3. **Wake.** Restore three ATLAS data nodes and build Ada, the shelter's own mind.
4. **Find Ali.** With enough intel and relays, the Meridian Treatment Center opens, and Sam goes in alone.

Along the way: survivors to save and take in, families that form in the shelter, relics and icons to find, and the dead who still have something to say to Khan.

---

## How to play: core mechanics

### The shelter
- **Day and night.** The clock runs from 06:00 to 20:00. At dark the night passes quickly: everyone rests, the androids keep watch, then the morning report.
- **Jobs.** Tap a person at the bottom, then a job: Rest, Farm, Water, Guard, Craft, Sortie, Recon (Khan). Jobs run on timers and show their progress in the room.
- **Bays.** Tap an empty space to build (Med Bay, Power Bus, Radio Room, Smelter, Mushroom Bay, Kitchen, Dormitory, Storage and more). Long-press a bay to move it; DISMANTLE gives about 60% back. If something is missing, the build list says exactly what.
- **Upkeep.** Each day costs food, water and power. Survivors need beds; too many mouths and too little food bring sickness, death and finally rebellion.
- **Conditions.** Missing food, water or power has clear effects (see "Staying alive" below). A red PROBLEMS chip appears when something is wrong; tap it for what it does and how to fix it.
- **Sun and wind.** On the surface above the shelter there are four WIND pads and four SOLAR pads. Tap a pad to build, tap again to raise its efficiency (I to III). One pad of each kind per shelter floor; efficiency III needs the Core Vault.
- **Battery Bay.** Craft battery cells and an inverter at the Workbench, then install them in the Battery Bay. The **24 V pack** runs everyday systems; the **48 V pack** runs the smelter. Each cell stores 3 power. The inverter adds 25% output, opens slots 4 to 8 and charges the 48 V pack. The bay shows voltage, current, power and cell health, and tests itself every morning.
- **Med Bay extensions.** Intensive Care and the Isolation Room are extra bays. If a whole squad is lost outside, they are carried home into a coma for 3 days (2 with Intensive Care) and wake stronger with the Isolation Room.
- **Med Bay.** Put a hurt or irradiated character on Treat and choose Heal wounds or Cure radiation sickness. The Med Bay does the rest by itself until they are well; no medicine needed.
- **Craft orders.** At the Workbench one tap crafts 1. Use HOW MANY for a batch (up to 99) or LOOP, which runs until a material runs out. Sam, survivors and Bob (from Mk V) craft everything; Khan crafts weapons, ammunition, armour, bandages and cloth.
- **Crafting** (Workbench): medicine from reishi mushrooms, bandages from cloth, tonics, ammo, armour, bow, arrows, spear, axe, katana, grenades, Molotovs, flashlights, androids.
- **Character sheet.** ITEMS (or a character's portrait) opens each person's sheet: a full image framed by equipment slots you tap to equip or unequip, and a stats card (level, XP, HP, energy, radiation, skills, kills).
- **People.** Everyone has a birthday, a zodiac sign and a life path number. Birthdays are celebrated. MORE (the "..." button) holds People, Records, Relics, Awards, Sound, Tips and About.

### Sorties (the field)
- **Choose the squad:** Sam and/or Khan, with or without Max (Max never goes alone). Pick a place: Rail & Puszta, Forest, Submerged District, Alpine Ridge, Hunting Grounds, the Undercity (after 2 sorties), the Exclusion Zone (after 4).
- **Move and act:** tap the ground to walk, a crate to search, a door to kick, an enemy to attack. Path dots show intent: green move, blue work, orange fight, red kill or hunt.
- **Fighting:** with **AUTO ENGAGE** off, nobody attacks unless you tap the target or it comes within arm's reach. Switch it on and the squad picks targets itself, Sam's attackers first. Whoever you select leads; the others stay close behind.
- **Multi-kills and headshots.** A grenade, Molotov fire or the odd rifle round can take two or more at once. Guns and the bow can land a headshot (2.5x damage). Both are counted and awarded; the Kill board in the "..." menu ranks Sam, Khan, Max and Bob.
- **Field kit.** KIT (or the portrait) pauses the sortie: heal, take anti-rad, craft a bandage, medicine or anti-rad from the squad's backpacks, and equip trinkets. Weapons, suits and hazard gear change only in the shelter.
- **Locked strongboxes.** Only Sam or Khan can pick them. Lockpicking I to III grows with practice. They hold unique items for two special slots per character.
- **Weapons by tier:** knife, pistol, bow, spear, rifle, axe, shotgun, katana, plus thrown grenades and Molotovs.
- **Night outside.** After 20:00 more enemies come and they hit harder. **RECALL** sends everyone home from anywhere, at any time.
- **Hunting.** Tap an animal for one strike; let Max tire it out or pin it first for a cleaner kill. Butcher the carcass for meat, pelt and organ meat.
- **Stopped helpers.** Home robots, cleaners and fallen drones stand everywhere. Search them for parts, or craft a Shield can and let Sam wake one for a moment: it may open a safe, show the floor plan or hand over what it carried. A Rebuilt helper placed in a dormitory calms the survivors.
- **Rescue.** A collapsed Flicker can be cured by Sam with anti-rad. Some of the people you save ask to join; without anti-rad, you can show mercy.
- **Wounds.** Khan and Max go down wounded and can be bandaged back up. If Sam falls, he is resuscitated with medicine or spends a day in intensive care. A fallen squad mate can only be helped while someone is still standing, and at least one must come home for the sortie to count. If all fall, they are carried home into a coma and the load is lost. The game ends only if Sam, Khan and Max are all lost in the shelter before Bob reaches full autonomy.

### Staying alive: cause, effect, fix
| Cause | Effect | Fix |
|---|---|---|
| No power at night | Night 1: dark, heat pump off, anxiety +25, androids offline. Night 2 on: cold, -8 HP each (-12 from night 3), -20% energy | Generator job, Charge cells; for good: solar and wind pads plus battery cells |
| No food | -12 HP; second hungry night -6 HP more; -15% energy and anxiety +15 per night | Hydroponics, trays, Kitchen, hunting, sorties |
| No water | -12 HP; second dry night -8 HP more; -15% energy and anxiety +15 per night | Water bay, filter run, rain collectors |
| Anxiety 50%+ | Wakes with -15% energy; from 80% panic: -30% energy, -4 HP a night | One night with light, warmth, food and water lowers it by 25 |
| Radiation 60r+ | -6 HP a night | Anti-rad; rest in Quarters |

Solar gives nothing at night, less under cloud and rain, and changes with the season (winter: short days but cold panels work 12% better). Wind follows the weather and can drop to nothing; at night it keeps charging the bank.

### Growth
Levels and skills for Sam, Khan and Max; Lockpicking; suit upgrades (three levels each); Khan's two paths (Soldier and Pilgrim); Bob's Mk I to Mk X upgrades; relics and keepsakes with real bonuses; Bronze to Platinum awards.

---

## Files in this repository

| File | What it is |
|---|---|
| `index.html` | The game |
| `sw.js` | Lets the game start offline after the first visit (cache name changes with each update) |
| `manifest.webmanifest`, `icon-192.png`, `icon-512.png` | Lets phones install it as an app |
| `project-atlas-game-brief.md` | Full design notes, per version |
| `CHANGELOG.txt` | Every GitHub update and every Claude build |
| `LICENSE.md` | All rights reserved |

## Publish and install

- **GitHub Pages:** Settings > Pages > Deploy from a branch > `main`, folder `/ (root)`.
- **iPhone:** open the address in Safari > Share > Add to Home Screen. After an update, close and reopen the app.
- **Android:** open it in Chrome > menu > Install app.

## Players and saves

Each person creates a player on the main menu. Saves stay in that browser on that device only; clearing site data removes them. Shelter time pauses while the game is closed, but assigned jobs keep producing for up to 12 hours (24 with Ada).

## License

Copyright (c) 2026 Sam (GitHub: Spacestation11). All rights reserved. This game is not open source: see `LICENSE.md`.
