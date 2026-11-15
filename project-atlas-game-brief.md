# PROJECT ATLAS: SHELTER — GAME BRIEF (v5, real-time)
### `project-atlas-game-brief.md` // Design reference for `project-atlas-shelter-game.html`

## 1. Pitch
A phone-first survival-management game in the Project Atlas: Earthside world (2092), in the spirit of *This War of Mine* and *Dying Light*. By day you run an underground shelter. Outside, a real-time sortie takes the squad into radioactive, stormy ruins. The long arc: place relays, restore three data-center nodes, wake the AI, and find Ali, Sam's wife, who has spent a year in the Meridian Treatment Center looking for a cure.

## 2. Squad
| Unit | Role | Kit | Special |
|---|---|---|---|
| **Sam** | Field engineer, protagonist | Pistol (+ rifle if found) | **Scan** (14 s cooldown): maps hostiles, radiation and live water within 7 tiles. Probes vaults and water safely. Only he can set relays, restore nodes and reach Ali. Finds extra PCBs and gold. |
| **Khan** | Tactical | Knife, pistol, rifle (+ shotgun if found) | **Overwatch** (10 s, 20 s cooldown): fires at anything hostile in sight at nearly double speed. Silent knife kill on unaware enemies. Can be sent alone on a ~3 minute **Recon** for intel and loot. |
| **Max** | K9 scout | Bite | **Charge** (9 s cooldown): sprints to an enemy and pins it (pinned targets take +50% damage and cannot act). Takes down a grabber to free a held squad-mate. Senses enemies nearby through fog. Always goes with Sam or Khan. |
| **Bob** | Robot | none | Runs the shelter while Sam is out. Does every shelter task Sam does. Power is paid at each dawn. Goes offline if power is short. |

## 3. Loop
**Shelter (real time):** one night is 3 minutes (18:00 to 06:00). Tap a character card, tap a job tile. Jobs run on timers with progress rings: Farm +1 food and Water +1 water every 35 s, Craft takes 20-70 s per item (materials are paid when it starts), Treat takes 6 s, Recon keeps Khan away ~3 min. Resting recovers energy and HP. Working drains energy. Time pauses while a menu is open. **Sortie:** SORTIE button, pick biome and party, DEPLOY starts the mission at once; the shelter keeps working (Bob) while you are out. **Dawn:** upkeep (food, water, power), raids, events.

Shelter jobs: Rest, Farm, Water, Guard, Craft, Sortie, Recon (Khan), Treat (anti-rad and meds).

## 4. Sortie (real time)
**One shared night clock:** the clock keeps running at the shelter while the party is outside (Bob keeps working, crafts finish). Dawn is the same moment everywhere. Every action, in the shelter or outside, spends time from that clock; as soon as a unit reaches its goal the action starts.
- **Side view** (like *This War of Mine*): a long level scrolling left to right from the shelter hatch, with multi-floor ruined buildings shown as cutaways, ladders between floors, doors at ground level, puddles and cover. Rooms stay black until you see into them. Drag to pan.
- Fog of war, line of sight, cover (standing on a crate or rubble tile). The mission clock gives you 2:30 until dawn (tap the timer to pause). After dawn, hunters spawn and everyone outside takes damage every 2 s. RECALL sends the whole squad to the door; they shoot what blocks the way.
- **Timed actions:** walking is about 0.3 s per tile (sneaking 0.6 s, quiet). Searching a crate takes ~2.6 s (Sam 2.1 s), objectives 4 s, using meds or anti-rad 1.4 s, breaking free 2.2 s. Damage interrupts an action. Weapons have cooldowns: knife 0.7 s, pistol 0.9 s, shotgun 1.5 s, rifle 1.7 s, bite 0.8 s. Units defend themselves automatically; tap an enemy to focus it. Max follows the squad and rescues grabbed allies by himself when his charge is ready.
- **Noise** is a radius: shots and running are loud, knives and sneaking are quiet. Rain and wind mask it. Dampers help. Heard noise sends enemies to investigate.
- **Enemies:** raiders (melee, grab), gunmen (ranged), feral hounds (fast), brutes (armored). States: idle, investigating (?), hunting (!).
- **Held:** a grabbed unit cannot move. Break free (50%) or have Max/anyone kill the grabber.
- **Armor** absorbs damage before HP. One plate = +10 armor (Max +10, cap 20). Crafted from scrap and copper.
- Environment every second: radiation dose from tiles and fallout rain, toxic fog, cold, lightning strikes (storms), dawn damage.
- **Radiation** is cumulative. 30+ slows movement and fire rate, 60+ and 85+ cause sickness damage. Anti-rad (-40) cleans it. Radiation suit halves dose.
- **Pack:** limited slots, stacks to 6. Everything not carried home is lost.

## 5. Loot and resources
Food, water, power, ammo, armor plates, scrap, parts, **PCBs**, copper, **gold**, meds, **anti-rad**, intel, relay kits, node kits.
- **PCBs** are recycled at the bench: 2 PCB → 2 parts + 2 copper, 35% chance of gold.
- Gold is for node kits (1 gold + 4 parts + 2 PCB). Relay kit: 6 parts, 4 copper, 2 power.
- Weapons turn up in locked cases: first a rifle for Sam, then a shotgun for Khan.

## 6. Weather (emergent, never scripted)
A small atmosphere model: pressure random-walks with momentum, humidity builds under low pressure and drains as rain, wind follows pressure change, storms need rain and wind together, fog forms in still humid air. Contamination persists in the air, so **rain carries fallout in proportion to it**. Weather moves the noise radius, enemy sight, felt temperature, lightning risk, rain collectors and radiation. Nothing is timed. Two runs never match.

## 7. Sound (all synthesized, no files)
Rain bed (louder with intensity), wind (gusts and howl), thunder with delay and crack, footsteps by surface (gravel, leaf, snow, metal, water) with quieter sneaking steps, pistol/rifle/shotgun/enemy shots with room tail, knife, hits, armor hits, growls, barks, hurt and death, coughing in fog, retching from radiation sickness, shivering in cold, electric zap, heartbeat at low HP, scanner ping, relay and node tones, and a **Geiger counter**: random clicks (Poisson) at a rate that follows the local dose, with a rising rate near sources. Biome beds: drips (submerged), owls and crickets (forest), wire hum (rail), ice creaks (alpine), terminal beeps (treatment center). iPhone note: the silent switch mutes web audio, and sound starts after the first tap.

## 8. Story
- **Act I:** place 2 relays. A voice answers on the hydrogen line.
- **Act II:** restore 3 data-center nodes. The AI wakes, Bob farms unattended.
- **Act III:** with ≥4 intel and 2 relays (or 3 nodes) the **Meridian Treatment Center** unlocks. Reach Ali (Sam only) for the ending.
- Death is permanent. Sam's death ends the run.

## 9. Controls (phone)
Tap the floor to walk, a ladder to climb. Tap an enemy to attack it (the unit walks into range and fires on its own). Tap a crate to walk there and search. Tap unit cards to switch. Drag the map to pan. Bottom buttons: weapon, sneak, special, heal, anti-rad, context action. RECALL / GO HOME sends everyone to the door. Tap the timer to pause. Space pauses, 1-3 pick units on desktop.

## 10. Tech
One HTML file, Canvas 2D, no assets, no network. Progress saves in localStorage. Add to Home Screen on iPhone for fullscreen play. Sound starts after your first tap; an iPhone with the silent switch on may mute web audio on older iOS versions.

## v6: Cutaway shelter (rooms)
- The shelter is a cutaway of build zones (5 per floor, 2 floors, dig up to 4) beside an elevator shaft. Tap an empty zone to build; tap a room for level, upgrade and workers; drag a survivor into a room to assign.
- Rooms: Airlock, Quarters, Workbench, Hydroponics, Water Reclaimer (start built); Power Bus, Med Bay (day 2), Radio Room (1 relay), Smelter (Power Bus L2, 48V) are built by the player. Levels speed up jobs; hydro and water levels add dawn output.
- Only the four main characters work rooms. Skills: Sam (power, radio, bench, med), Khan (smelter), Bob (farm, water), Max is clumsy.
- Shared night clock and real-time sorties are unchanged. Save key is v4.

## v7 update
- Indoors on sorties: no rain, wind, fog, cold or dawn damage, and weather FX/audio fade out ("Sheltered" chip). Local radiation hotspots still apply.
- Backpacks: Sam 6, Khan 9, Max 4 slots, stacks of 4. Loot goes to the searcher, then teammates. Leftovers stay in the container ("ITEMS LEFT"). Each human starts with 1 medicine + 1 anti-rad if in stock. Readable pack panel and Stockpile sheet grouped by category.
- Androids (Workbench): Worker android (max 2) takes maintenance jobs; Combat android (max 2, needs Workbench lvl 2) auto-joins sorties with a rifle, immune to rad/fog/cold. Each costs 1 power/day.
- Follow: unselected squad members trail the selected unit; FOLLOW toggle beside RECALL.
- Containers: untouched glow + SEARCH marker, animated lid/door, dust, then EMPTY tag.
- New character art and walk cycle (two-segment legs, arm swing, bob, head lag, swaying rosary).

## v8 update
- Backpack stacks hold up to 99 of one item per slot.
- Gear is now per person: Filter mask, Thermal layers, Rad-shield lining, Ground-rod kit, Acoustic dampers. Craft up to 3 of each (Sam, Khan, Max).
- Auto-equip (on by default) hands out gear and medicine/anti-rad by the mission's hazards (biome + current weather). Off = choose by hand per person.
- Inventory sheet (ITEMS button, or GEAR on a character): tabs Shelter / Sam / Khan / Max, swipe or tap. Each person's page shows what is worn, what is RECOMMENDED for the next sortie, and what is missing. The sortie planner shows the same loadout summary with warnings.
- Audio: quieter geiger, heartbeat, coughs and alerts with cooldowns; generative soft score that thins out in danger and warms up indoors.
- Art: desaturated ash-and-dust grade, falling ash, dead trees, weathered rust work jacket/scarf/beard for Sam, quilted drab parka for Khan.

## v9 update
- Responsive layout: portrait = world on top, controls below; landscape/widescreen (phone rotated, tablet, desktop) = world on the left, controls in a side panel. Switches automatically on rotate or resize.
- Sortie camera zooms in (about 6 tiles across on a phone, was 11) and follows the selected unit vertically; drag to look around. Characters and enemies drawn 25% larger on top of that.
- Shelter rooms never shrink below a readable size; the view pans (drag the background) and centres on the selected character.
- Visible gear: filter mask shows on the face; a health light strip on Sam's and Khan's backs.
- Overgrowth: dry grass on open ground, vines hanging off ledges.

## v10 update
- Zoom: default pulled back (about 8.6 tiles across on a phone). Adjustable with the + / − buttons, pinch, or mouse wheel; shelter and sortie zoom are remembered separately.
- Portrait panel: selecting a character shows a close-up (Sam uses the supplied photo; others are drawn close-ups until photos are supplied). In the shelter, tapping it opens that character's inventory.
- Film pass: bloom on bright areas and fine grain at device resolution.

## v11 update
- Levels no longer end: the map is built 40 columns (80 m) at a time as the squad walks, up to 2.4 km out. Every building has a doorway on both sides, so none is a dead end. Further stretches hold more loot and more enemies. The mission objective stays in the first stretch.
- Tunnel hatches ("TUNNEL HOME") appear in every later stretch and count as a way home, like the shelter door.
- Exploration tracking: 1 tile = 2 m. Live distance and time chip during a sortie; per-location totals (distance, time outside, furthest point, trips) in the sortie planner, the sortie report and Inventory > Shelter. Metres until 1 km, then km.
- Sam's portrait replaced with the new photo. Rain and fog now fade properly when the selected unit is indoors.

## v12 update
- Revive: a character who dies is "down" and carried home. Revive in the Med Bay for 2 medicine + 2 power (tap their card, or the Med Bay). They return at 35 HP, +10 per Med Bay level. Game over only when Sam and Khan are both down. Destroyed androids are still gone.
- Return from a sortie: crafting materials and loot unload into the shelter stockpile. Worn gear (mask, thermal, rad lining, ground rods, dampers) stays on the person for later sorties; found armor plates are fitted to whoever carried them; weapons stay with their owner. Unused medicine/anti-rad goes back on the shelf.
- Shelter rooms redrawn: stained concrete, rust runs, cracks, ceiling pipes and cables, caged flickering lamps, grated floors with hazard strips, riveted steel frames, and green-phosphor terminals.
- LOG is now a Command terminal: green CRT readout of stock, squad, mission and exploration records.

## v13 update
- Sortie: the RECALL button becomes CANCEL RECALL while the squad is heading home; tapping it stops them where they are.
- Power: androids switched off by an outage come back during the day as soon as there is power in stock, one android per unit (1 power = first android, 2 = second, and so on). Nothing extra is charged; the normal cost is still taken at the daily reset.
- Day timer: END DAY button next to SORTIE shows the time until the daily reset and fills as the day passes. At every reset everyone at home sleeps (energy to 100, +5 HP). Tapping END DAY (with a confirmation) resets the day early.
- Khan's portrait uses the supplied photo.

## v14 update
- Workbench: new recipe "Mix medicine" (1 food, 1 water, 1 parts -> 1 medicine, 12 s).
- All Workbench craft times halved. Sortie actions halved: search 1.3 s, objective 2 s, heal/anti-rad 0.7 s, break free 1.2 s.

## v15 update (beta)
- Name: Project Atlas - Earthside.
- Main menu: players are created on the device (name, jacket colour, drawn face or portrait). Each player has a separate save; the menu lists only the players on that device with CONTINUE / START OVER / DELETE. An older single save becomes the first player automatically. MAIN MENU is reachable from the Command terminal. No accounts yet: nothing leaves the browser.
- Performance: the cause of the heavy load was the film pass (bloom that re-read the whole picture every frame) plus glow shadows, CSS filters on the canvas and blurred HUD panels. Bloom, glow shadows and grain are now only in the optional High level. Graphics levels: Auto (default, steps down when frames are slow), High, Balanced, Light, Minimal. Drawing surface is capped per level and frames are capped at 60 per second.
- Blood: enemies bleed when hit and burst when killed. Droplets follow gravity and drag, then leave stains on the floor, walls (with runs) and ceilings.
- Hosting: GitHub Pages files are index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, README.md.

## v16 update (beta)
- HUD fix: the top bar (resources, DAY, TERMINAL, ITEMS) was rebuilt every second and the day chip changed width as it switched between "DAY 2" and "DAY 2 · 18:15", which made the bar flicker and the buttons shift. It now only updates what changed, and the clock has a fixed width.
- Player creation: name, jacket, trousers, headgear (cap, beanie, hood, none), eyewear (scan goggle, glasses, none), skin tone, hair (short, long, shaved), hair colour, beard (none, stubble, full), with a live full-body preview. The in-game character is drawn with these choices.
- Player icon: drawn face, an uploaded photo (cropped to a 256 px square, stored only in the browser), or the classic Sam portrait. EDIT LOOK on the player screen changes any of this later.

## v17 update (beta)
- Inventory wording: each character's gear is split into "EQUIPPED ON <name>" and "NOT EQUIPPED". Status labels: EQUIPPED, NOT OWNED / MISSING (shelter has none), "<NAME> HAS IT" (owned, but on a teammate), IN LOCKER (owned and spare, not needed here), TAP TO EQUIP (manual mode). Each row adds one plain sentence saying why. The gear locker shows how many are owned, who has them, and how many are spare.

## v18 update (beta)
- Levels: Sam, Khan and Max earn XP from shelter jobs (6), crafting (10), searching containers (5), kills (8), objectives (30) and returning from a sortie (10 + distance). Level cap 20, one skill point per level.
- Skills (rank 0-6 each, perks unlock automatically at rank 3 and 6):
  - Engineering: +8% shelter work and craft speed per rank. Jury-rig (crafting 20% faster), Overclock (1 in 4 room jobs yields double).
  - Combat (Max: Bite): +7% damage per rank. Steady aim / Lockjaw (15% critical for double damage), Double tap (1 shot in 5 free) / Fast charge (Max's charge ready 30% sooner).
  - Survival (Max: Grit): -5% damage taken per rank. Weathered (cold, fog, radiation 25% less), Second wind (once per sortie survive a killing blow at 15 HP).
  - Scouting (Max: Nose): -8% search time per rank, +1 backpack slot every 2 ranks. Light feet (noise 1 tile less), Pathfinder (15% faster outside).
  - A RECOMMENDED tag marks the skill that fits the role: Engineering for Sam (Scouting once he is mostly in the field), Combat for Khan, Nose for Max.
- Ranks: Sam goes Junior/-/Senior/Principal Bench Engineer (L1-4), Lab Engineer (L5-9), Shelter Supervisor Engineer (L10+); if most of his XP comes from sorties he is a Field Engineer instead. Khan holds military ranks from Private to General and earns distinctions (Marksman Badge, Bronze Star, Silver Star, Medal of Valor, Purple Heart, Campaign Ribbon). Max goes from Shelter Pup to Legend of the Wastes with his own tags.
- Bob: Sam upgrades him at the Workbench (Upgrade Bob) to Mk V, +8% work speed per level. From Mk V he is autonomous: he can craft, build worker androids, and levels himself to Mk X by working. Other worker androids no longer craft.
- Max's own gear (only he can wear it): K9 filter muzzle, thermal coat, lead-lined vest, rubber paw boots. Human gear is now for Sam and Khan only (2 of each).
- Dog food (Max eats it instead of food, +5 HP) and dog treats (Max carries up to 3 outside; his Heal button becomes Treat, +25 HP).
- Fallback weapons: Sam now carries a knife. Out of bullets, a character takes the next weapon that can still fire, otherwise the knife, and goes back to the gun when ammo is found.
- Characters redrawn: longer legs and arms, shoulders that taper to the waist, smaller head with neck, eye, brow, nose and ear. The antenna pack, glowing lens, back light strip and white harness stripes are gone; the filter mask is a small half-mask shown only when equipped.

## v19 update (beta)
- New sounds, in the shelter Med Bay and on sorties alike:
  - Revive: defibrillator charge and discharge, a heartbeat returning, then a warm chord (about 4.5 s).
  - Medicine: wrapper tear, injector press, a breath, a soft rising two-note.
  - Anti-rad: injector click and hiss, geiger ticks thinning out, a low tone settling.
  - Dog treat: a crunch and a short happy chirp.

## v20 update (beta)
- Away work: shelter time pauses while the game is closed (no day passes, no food or water eaten), but each character keeps doing their assigned job. Work counts for up to 12 hours (24 with Ada). Rates per worker per hour, times room level and skill: farm 3 food, water 3, power 2, smelter 2 copper (2 scrap each), radio 0.5 intel; crafting about 3 items an hour while materials last; resting heals fully. A "While you were away" report shows on return, including when the app comes back from the background.
- AWAY ORDERS (in the Terminal): one screen to set every character's job, with the expected yield per hour.
- Mushroom Bay (new room, buildable from the start, 3 to 5 beds by level, each level -18% grow time). Grows on the real clock, also while the game is closed:
  - Oyster: 30 min, keeps 12 h, +3 food.
  - Chestnut: 1 h, keeps 24 h, +4 food.
  - Lion's Mane: 2 h, keeps 24 h, +2 food and +20 XP for the harvester.
  - Reishi: 4 h, keeps 36 h, +1 medicine and +30 energy for everyone at home.
  - Turkey Tail: 4 h, keeps 36 h, +2 medicine.
  - Planting costs water plus scrap or parts. Each species card shows its kitchen and medicinal uses. Ripe beds spoil after their keep time. A character on the Mushrooms job picks and replants while you play; Bob at Mk V and Ada also do it while you are away.
- Ada (the shelter mind, built in the Core Vault): unlocks after restoring all 3 data nodes or when Sam reaches level 8. Five stages, each needing materials then hours of work (Core Cradle, Tube Logic Racks, Core Memory, Nervous System, Awakening). Work continues while away. Once awake, Ada runs empty farm, water and power rooms at half speed, picks and replants mushrooms, and extends away work to 24 hours.

## v21 update (beta)
- Quarters is now double-wide (2 modules: bunks + table/lockers); old saves migrate automatically, moving a neighbouring room if needed.
- Sortie looting: followers never stand on, or in the path of, a crate/item being collected; they step aside.
- Containers: SEARCH tag only on never-opened boxes; partly emptied boxes show "OPENED / N ITEMS LEFT".
- Visible damage: bullet holes, cuts and blood scale with lost HP on Sam, Khan, Max and enemies.
- Healing removes wounds proportionally; med packs, Med Bay healing and revives show a bandage for a while.
- Gore: heavy hits can sever limbs; lethal shotgun/rifle hits can dismember (head, arm, leg, chunks) with physics gibs and blood trails.
