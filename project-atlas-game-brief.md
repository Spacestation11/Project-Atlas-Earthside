# PROJECT ATLAS: SHELTER — GAME BRIEF (v5, real-time)
### `project-atlas-game-brief.md` // Design reference for `project-atlas-shelter-game.html`

## 1. Pitch
A phone-first survival-management game in the Project Atlas - Earthside world (2042, nine years after the Harmonic Collapse of 2033), in the spirit of *This War of Mine* and *Dying Light*. By day you run an underground shelter. Outside, a real-time sortie takes the squad into radioactive, stormy ruins. The long arc: place relays, restore three data-center nodes, wake the AI, and find Ali, Sam's wife, who has spent a year in the Meridian Treatment Center looking for a cure.

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

## GitHub Update 2 (build v21, beta)
Includes builds v15 to v21. GitHub Update 1 was build v14.

### v21 changes
- Quarters is now double-wide (2 modules: bunks + table/lockers); old saves migrate automatically, moving a neighbouring room if needed.
- Sortie looting: followers never stand on, or in the path of, a crate/item being collected; they step aside.
- Containers: SEARCH tag only on never-opened boxes; partly emptied boxes show "OPENED / N ITEMS LEFT".
- Visible damage: bullet holes, cuts and blood scale with lost HP on Sam, Khan, Max and enemies.
- Healing removes wounds proportionally; med packs, Med Bay healing and revives show a bandage for a while.
- Gore: heavy hits can sever limbs; lethal shotgun/rifle hits can dismember (head, arm, leg, chunks) with physics gibs and blood trails.


## Versioning
GitHub updates are numbered in commit order. The internal (Claude) build number is shown in brackets. **Update 1 = build v14. Update 2 = builds v15 to v21. Update 3 = builds v22 to v30. Update 4 = builds v31 to v34.** Builds v22 to v29.2 were delivered as files and previews but never committed; each has its own section below, and all of them belong to the third GitHub update. Lines below that say "Menu shows BETA · UPDATE n" record what that build showed at the time; Update 3 as committed showed "BETA · UPDATE 3" (service worker cache v22); Update 4 as committed shows "BETA · UPDATE 4" (cache v23). Build v31 was packaged as Update 4 on 19 November but not uploaded, so GitHub Update 4 holds builds v31 to v34.

## Build v22 (beta) · part of GitHub Update 3
- Controls: compact survivor chips and one bottom row (End Day, Sortie). Jobs pop up over the scene when a survivor is tapped and close after a pick, a tap elsewhere, or 9 s. Sortie: compact unit chips, action row, and Follow / Pack / Recall; the backpack opens as a pop-up. Controls stay along the bottom in portrait and landscape.
- Climbing: ladders are climbed (back view, hands and feet on the rungs), clearly different from walking. Max cannot use ladders, only stairs. Shelter has a ladder shaft (left) and a stairwell (right). Sortie buildings with upper floors always have stairs, most also a ladder. Hounds, Kilns, Husks and the Choir use stairs only.
- Containers: SEARCH shows only on unopened containers; partly emptied ones say OPENED / N ITEMS LEFT. Loot fills the searcher and anyone right beside them; if items remain, the next teammate with room walks over and takes the rest.
- Weather, cold, fog, radiation, dawn and lightning no longer interrupt searching or work; only enemy hits do.
- Enemies, the Shifted: people whose nervous system locked onto the frequency shift after heavy radiation.
  - Flicker (early stage): fast, erratic, freezes and mutters. Can collapse instead of dying; while collapsed (15 s) Sam can cure them with one anti-rad and the null pulse. The cured person walks home; +1 intel, +25 XP.
  - Hollow: hides motionless and ambushes within 3 tiles. Max, Sam's Scan, or getting close reveals it.
  - Echo: blind, crystal crust over the eyes, hunts by sound (hearing x2.2), clicks to echolocate. Sneaking passes it.
  - Kiln: bloated, glowing, armoured; lobs radioactive slag that leaves hot spots; bursts on death (damage, radiation, breaks nearby doors and walls).
  - Husk: years gone, rotten and slow; loses limbs easily, crawls without legs, gives off radioactive dust when hit.
  - The Choir (boss): a fused mass of many Shifted; static scream (damage + radiation) in a radius; tears new Flickers/Husks loose at 75/50/25% health; Sam's Scan nulls it for 3 s. Appears once a night deep out.
  - Scavengers (raiders, gunmen, brutes) and irradiated hounds remain.
- Gore: each kill rolls a style by weapon and overkill: clean, one limb, several limbs popping one after another, head off, head burst, everything off, or a full explosion that throws parts and blood everywhere. Heavy non-lethal hits can take a limb.
- Blood: big drops arc and splat with spatter, fine spray hangs in the air, pools spread under bodies, wall runs and ceiling drips grow, and stains darken over time.
- Destruction: doors open when walked through; tap a door to kick it in. Brick partitions on upper floors can be broken through (Khan 1.4 s, others 2.6 s, not Max). Bricks and planks fly and come to rest as rubble.
- Maps: 13 building types (apartment, shop, warehouse, factory, clinic, office, station, lab, chapel, cabin, bunker, weather station, pump house) dealt without repeats, each with its own back wall, roof (parapet, saw-tooth, chimney, antenna, clock, dish, gable, sandbags, dome, water tank), old signs, furniture, windows and hanging lamps. Large landmarks per stretch (locomotive, tram, bus, ambulance, crashed helicopter, tank, pylons, crane, water tower, dish, ski lift, shrine).
- Awards (Bronze, Silver, Gold, Platinum): 28 awards plus the platinum "Earthside" for earning all of them. A pop-up shows each one. AWARDS in the Command terminal lists them with points. Points raise the Survivor Tier: II = +1 backpack slot, III = +10% XP, IV = another backpack slot. Explosion awards: Pink Mist (1), Splatter Artist (10), Meat Rain (50).
- Menu shows "BETA · UPDATE 3". Service worker cache v7.

## Build v23 (beta) · part of GitHub Update 3
- Timed field actions now show a small labelled bar above the character: what they are doing, a progress bar and the seconds left. Shown only for actions of 0.6 s or longer where it helps:
  - searching: Prying open the crate, Searching the cabinet, Opening the locker, Cracking the vault, Pulling parts from the rack, Opening the med case, Checking the body, Taking what's left;
  - objectives: Setting the relay, Restoring the data node, Reading the archive, Helping her up;
  - items: Applying medicine, Injecting anti-rad, Eating a treat;
  - Null pulse · restoring mind, Breaking through the wall, Breaking free!
- Quick actions (door kick, shots, moves) keep no label. Labels from several characters stack instead of overlapping, and they stay on screen. The selected character's label is drawn on top and slightly larger.
- The status line at the bottom uses the same wording ("Opening the locker 35% · attacks interrupt").
- Unit chips only flag urgent states now (DOWN, HELD, FIGHT, WATCH), since the action shows above the character.
- Menu shows "BETA · UPDATE 4". Service worker cache v8.

## Build v24 (beta) · part of GitHub Update 3
- **Work labels in the shelter:** every timed job (crafting, growing, filtering, building) shows what it is doing, a bar and time left at the room where it happens.
- **Elevator:** a lift shaft next to the ladder. Humans and robots take the lift when it is nearer than the stairs; Max uses it only when he is close and it is free, otherwise he takes the stairs.
- **Bigger rooms, smaller people:** characters scaled to about 80%, the shelter is wider, rooms feel like real rooms.
- **Storage room:** the main access point for shelter stock and each character's kit (tap it to open the inventory).
- **Backdrop:** an inactive nuclear plant behind the city blocks (reactor block, banded vent stack, confinement arch, unfinished cooling tower, ferris wheel), original art inspired by the real exclusion zone.
- **Bays:** building shows scaffold, sparks and a short bar. Long-press a bay to drag it to an empty slot. DISMANTLE any bay (not the airlock) for about 60% of its materials back. Items can be scrapped in the inventory for raw materials.
- **Enemies reworked:** the Shifted (radiation-sick humans, now all clearly human), rabid dogs, mutant roaches (weakest, come in swarms), and occasional thugs, thieves (steal and run), bandits, cannibals and hunters. No animal-headed humans.
- **Hunting:** a new Hunting Grounds map full of deer, boar and hare; animals also graze in quiet gaps between buildings. They flee, tire and get cornered; a cornered or hurt boar charges. Carcasses give food and hide.
- **Bow, arrows and spear:** crafted at the Workbench for Sam and Khan (arrows +6 per craft, some recovered after hits). Leather armour from hide. Max hunts alone if nobody has hunting gear, otherwise he runs prey down and pins it for the others.
- **Show mercy:** with no anti-rad left, tapping a collapsed Flicker offers SHOW MERCY or LEAVE THEM.
- **Survivors:** people you cure come home with you. Welcome them or let them go. They wait in the common area until you build a Dormitory, recover for one day, then work bays and craft like crew.
- **Bob:** Mk V can craft; Mk IX is fully autonomous.
- **Records:** Terminal → RECORDS shows people saved, joined, released, mercy, kills by type, gore kills, hunting and a log.
- **New awards:** first recruit, first hunt, roach squish, five recruits, twenty hunts, gore chain, mercy, 25 saved. Gore kills give a bonus.

## Build v25 (beta) · part of GitHub Update 3
- **Hunting v2:** nobody attacks game on their own. Tap an animal and the selected hunter strikes once with the hunting weapon; you pick the moment. Tired, cornered or pinned game takes harder hits.
- **Max** never bites game. He drives it, runs it tired and pins it for the hunters. He only fights an animal that turns on the squad (a boar).
- **Hunting slot:** bow, spear and knife have their own slot, shown in each hunter's inventory page, the gear locker and the sortie planner. Crafted gear lands there automatically. Bow is first choice by default; tap another in the inventory, or use the hunting button next to the gun button outside. Fallback: bow → spear → knife.
- **Visible gear:** bow and quiver or spear are carried on the back outside, and drawn in the hands when used.
- **Clearing the way:** if a hostile stands between a hunter and the animal (or comes at them), the hunter switches to the gun, kills it, then goes back to the hunt.
- **Butchering:** every carcass is skinned, butchered and gutted on the spot, with a kneeling animation (hide peeled and laid out, meat stacked, heart and liver set aside). Yields: meat, pelt (prime/good/poor) and organ meat.
- **Organ meat:** a slow, continuous heal (about 1 HP/s for 45 s outside; eaten automatically in the shelter by anyone under 80 HP).
- **Rescues:** only some cured people ask to join; others thank you, leave a gift and go their own way.
- **Squad choice:** any mix of Sam, Khan and Max. Max never goes out alone.
- **Exclusion Zone:** a new sortie map at the dead plant (opens after 4 sorties): high radiation, Kilns, reactor control log, more relics.
- **Khan:** two paths (Soldier: valor from kills; Pilgrim: faith from mercy, rescue, icons and the departed), 8 perks. He sees and speaks with the departed, and shares short sayings: scripture, the Stoics, the Desert Fathers and his own.
- **Relics:** 10 icons and holy objects for Khan, 8 instruments and books for Sam, 6 keepsakes for Max, each with a real bonus. Terminal → RELICS & KHAN'S PATHS.
- **16 new awards** for Khan, Sam, Max, hunting and the Zone.
- **Missing materials:** every build, upgrade and craft screen now says exactly what is missing ("Missing: 2 scrap, 1 parts").
- **Backpack:** the sortie button reads BACKPACK.
- **Wounded, not lost:** Khan and Max go down wounded with a 75 s bleed-out timer. A squad mate bandages them back up (automatic, or tap them); with medicine they return at 45 HP. Recalled while wounded, they come home alive. Khan no longer dies on recon; he comes back badly hurt.
- **Weapon tiers (hit points per strike):** I knife 4–6, bite 3–4 · II pistol 5–7, bow 5–8, spear 6–9 · III rifle 8–11, combat axe 8–11 · IV shotgun 10–14 close, katana 13–17 · V grenade 22–46, Molotov 6 per 0.5 s. Shown on the weapon button and in each inventory page.
- **Combat axe and katana:** crafted at the Workbench (katana needs level 2). They replace the knife automatically and are drawn on the body.
- **Grenades and Molotovs:** crafted, up to 4 of each taken out. Throw button, range 7. Grenade: 2.5 tile blast, gore, breaks doors, walls and cover. Molotov: fire spreads up to 3 tiles and burns about 6 s, burning enemies keep burning.
- **Mercy:** a single clean blade stroke.
- **Families:** a woman and a man sharing a dormitory may become a couple and, with food to spare, have up to two children. MOVE lets you choose who shares a room.
- **5 more awards.**
- **Sam's ICU:** if Sam falls on a sortie and someone is left to carry him (or Bob is fully autonomous), he is resuscitated at once when there is medicine, otherwise he spends one day in intensive care.
- **Game over rule:** the game ends only when Sam, Khan and Max are all gone, and Bob is not yet Mk IX. An autonomous Bob carries the fallen to the Med Bay; they wake the next day.
- **Field medicine:** medicine is now made from reishi (2 reishi + 1 water). Bandages are made from cloth (lockers, cabinets, bodies, or cut from hide). Khan can craft too.
- **Foraging:** mushroom patches on every map: reishi (medicine), lion's mane (Focus tonic, +10% to hit), cordyceps (Vigor tonic, +15% damage), chaga (Ironbark brew, 15% less damage). Tonics are drunk at the door and last one sortie.
- **Flashlight:** crafted; switches on by itself in the dark (+2 tiles of sight, visible beam).
- **The Undercity:** a new dark, close-combat map with an army depot (opens after 2 sorties). The Exclusion Zone opens after 4.
- **Navigator:** finer, denser path dots. Green = move, blue = work (search, gather), orange = attack, red = kill or hunt.
- **The freed soul:** a translucent coil of light rises from a cured Shifted; Khan remarks on it, sometimes Sam.
- **Shelter HUD:** core buttons stay on screen; People, Records, Relics, Awards, Sound, Tips and About sit under the "..." menu.
- **Stairs:** faster, with a stepping motion; Max bounds up them.
- **Names:** every survivor has a unique name (Romanian, European and universal). A name is free again only after its owner dies.
- **Kitchen:** hot stew, coffee, herbal tea, mushroom broth, elderflower cordial. Each once a day.
- **Calendar and birthdays:** day 1 is April 10, 2039 (originally 2092; moved in build v26.3). Sam's birthday is April 11 (38). Everyone has a birthday, zodiac sign and life path number; birthdays bring a cake, a drink and a small boost. Khan is master number 33: his last human life.
- **Capacity and unrest:** survivors are limited to beds plus 3 places in the common area. Without food or water they sicken and die, and at unrest 3/3 they rebel: supplies are taken, Sam and Khan are hurt, a bay can be wrecked.
- **Tips:** a few short tips at the start and when the player is idle for a long time. Can be switched off.
- **Portraits:** new original photo face for Sam; Ali's portrait appears in the epilogue.
- **Music:** a slower, reflective score of long swelling chords. A short sung chant plays on Khan's scripture, relics, the departed and mercy: somber or hopeful.
- **Authorship:** copyright notice in the page, the code and an About screen; LICENSE.md in the repository; a notice appears on modified or re-hosted copies.

## Build v26 (beta) · part of GitHub Update 3
- **Day and night:** the clock now runs through the day, 06:00 to 20:00. The shelter sky follows it (morning, noon, dusk), with the sun moving and stars at dusk. At dark, a short night passes: everyone rests, the androids keep watch, then the morning report.
- **Night outside:** sorties start in daylight and get darker. After 20:00 it is night: more enemies come, and they hit 20% harder. The old burning dawn is gone. RECALL still works from anywhere, at any time.
- **Rain and weather:** rain falls in three depths with wind gusts, splashes and ground mist, in the shelter view and outside. Storm lightning over the shelter; drifting fog banks outside.
- **Auto-engage:** a new AUTO ENGAGE switch on sorties. Off: you pick targets. On: each squad member picks the most dangerous target in reach, starting with whoever threatens Sam.
- **Protect Sam:** in both modes, Khan and Max drop what they are doing to take on anyone grabbing or closing on Sam, unless you just gave them an order.
- **Awards** stay on screen about two seconds longer.
- **Life path:** Sam is 6, Khan is 33.
- **Portraits:** new photo faces for Sam, Khan, Max and Bob.
- **Portrait fix (7.1):** the character photo card now moves above the job panel on phones instead of hiding behind it, and Sam's player icon defaults to his photo (existing players switched once; "Drawn face" can still be picked in the player menu).

## Build v26.2 (beta) · part of GitHub Update 3
- **Portrait card placement:** in the shelter the selected character's card always sits below the lowest row of bays, with a margin, and above the job panel or dock. It shrinks to fit. When there is no room below the bays (landscape, desktop), it uses the left margin beside the first bay column. If neither fits, it hides instead of covering a bay. On sorties it stays where it was.
- **Docs:** README.md rewritten with the core mechanics and a simplified story arc; new CHANGELOG.txt lists every GitHub update with its Claude build and every Claude build.
- Menu shows "BETA · UPDATE 7.2". Service worker cache v13.

## Build v26.3 (beta) · part of GitHub Update 3
- **New timeline:** the game is now set in **2039**, eight years after the Harmonic Collapse (14 March 2031). ATLAS went live in 2029, the CHORUS array in 2030. Menu reads "2039 · EIGHT YEARS AFTER THE HARMONIC COLLAPSE".
- **Calendar:** day 1 is April 10, 2039. Birth dates moved with it: Sam April 11, 2001 (38, life path 6), Khan September 30, 1983 (55, life path 33), Max October 4, 2035 (3). Survivors' birth years are drawn relative to 2039.
- **Lore:** "25 years" becomes "8 years" throughout; the data-rot problem now rests on worn, warm-stored flash losing its charge within a few unpowered years (see the story bible).
- Menu shows "BETA · UPDATE 7.3". Service worker cache v14.

## Build v27 (beta) · part of GitHub Update 3
- **Character sheet:** each character's inventory page opens on a full-length image (photo, or the drawn figure if the player chose "Drawn face") framed by equipment slots, in the style of an RPG paper doll.
  - Sam and Khan: Head (filter mask), Body (thermal), Lining (rad shield), Belt (ground rods), Ears (dampers), Armour, Primary, Blade, Hunting, Throw, Light, Pouch.
  - Max: Muzzle, Coat, Vest, Paws, Armour, Bite, Treats.
  - Lit slot = equipped; dim = not crafted. Tap a gear slot to equip or unequip it (switches auto-equip off). Tap Blade to carry the axe/katana or the plain knife, Light to take or leave the flashlight, Throw to take or leave grenades and Molotovs, Hunting to change the first-choice hunting weapon.
- **Stats card** under the image: level and rank, XP, HP, energy, radiation, skill ranks, kills, skill points, age, zodiac and life path; Khan's valor and faith; Bob's model and autonomy.
- **Portrait card in the shelter:** sits low, just above the bottom bar; moves up above the job panel or an open sheet; never enters the bay area (falls back to the left margin beside the bays, or hides).
- Menu shows "BETA · UPDATE 8". Service worker cache v15.

## Build v27.1 (beta) · part of GitHub Update 3
- **Fixed: sorties froze when night fell.** The sky colour was computed from a light level below its expected range, which stopped the picture from being drawn on every map once it got dark (seen on Alpine Ridge). Light is now clamped.
- **Fixed:** errors when the last squad member fell to cold, radiation, fog or lightning in the middle of a game step; the sortie now ends cleanly.
- **Fixed:** the flashlight flag shared a name with the lightning flash.
- **Portrait card:** appears at once in its place when a character is tapped and glides when a panel opens; portraits are decoded up front.
- AUTO ENGAGE button moved slightly down so it clears the top-right chips.
- Menu shows "BETA · UPDATE 8.1". Service worker cache v16.

## Build v28 (beta) · part of GitHub Update 3
- **New timeline:** the Harmonic Collapse is **14 March 2033**; the game starts on **10 April 2042**, nine years later. 2027–2032 are the "helper years": AI assistants and home robots in every household. Menu reads "2042 · NINE YEARS AFTER THE HARMONIC COLLAPSE".
- **Birth dates:** Sam 11 April 2004 (38 on day 2, life path 6), Khan 21 June 1986 (55, life path 33), Max 4 October 2038 (3). Survivors' birth years count from 2042 (existing saves are shifted once).
- **Stopped helpers** on every map: home helpers, cleaners and fallen delivery drones. Search them for parts, copper, boards and sometimes power. About one in three holds a last log; some logs give intel.
- **Flickers:** a stopped helper near the squad may wake for about three seconds, say its last line, and stop again (at most twice each).
- **Shield can** (Workbench: 2 scrap, 2 copper). Sam carries up to 2. Tapping a stopped helper then offers WAKE IT or SALVAGE. Waking takes 5 s and gives one of: a wall safe (8 rounds, medicine, anti-rad), the floor plan with everything that moves within 22 tiles, or what it was carrying (food, water, cloth, sometimes a relic).
- **Rebuilt helper** (Workbench: 3 parts, 2 copper, 1 power). Place it in a dormitory from the dormitory sheet: unrest drops by one more each morning and the sick recover faster. It is drawn walking in the room.
- **Lore:** Bob is a pre-Collapse household helper that Sam rebuilt; androids are built on salvaged helper chassis; new lines for Khan, the departed and rescued survivors.
- **Awards:** Good Morning (wake a helper), Spare Parts (salvage 10).
- Menu shows "BETA · UPDATE 9". Service worker cache v17.

## Build v29 (beta) · part of GitHub Update 3
**Fixes**
- **"Cannot reach" loop:** when a unit cannot path to its target, Sam or Khan now breach the brick wall in the way (tile 8) and resume the attack. If nothing can be broken, the target is dropped for that unit for 10 s (`e.nr[unit]`), auto-engage and the hunting "clear the way" logic skip it, and the toast is throttled.
- **Bob "offline":** androids stop when the Power Bus is empty. The job panel now says so and how to restart. (The Mk II upgrade was not the cause.)

**Field**
- **Field kit** (KIT button or portrait; pauses the sortie): heal, anti-rad, field craft in 4 s from the squad's backpacks (bandage = 2 cloth; medicine = 2 reishi; anti-rad = 1 medicine + 2 parts), equip trinkets. Weapons, suits and hazard gear are read-only outside.
- **Locked strongboxes** (tiers I-III; more in the Undercity and the Exclusion Zone). Only Sam or Khan. Lockpicking I at start; 3 locks -> II; 8 locks -> III. Pick time 4 / 7 / 10 s.
- **16 unique items**, two special slots each for Sam, Khan and Max. Trinkets can be equipped outside; suits only in the shelter. Effects: damage resistance, radiation, cold, elements (fog, lightning, fire), hit chance, gun and blade damage, extra healing, regeneration, XP, Max's bite.
- **Suit upgrades** (shelter, character sheet): levels 0-3; each level -6% damage, -10% cold, -8% radiation. Cost: scrap, cloth, hide.
- **Death sounds:** one per enemy and animal type (16).
- **AUTO ENGAGE off:** nobody attacks unless ordered or the enemy is on the next tile; no automatic rush to protect Sam (Max still frees a grabbed teammate). **On:** as before.
- **Formation:** followers keep 2-3 tiles behind the selected character.
- **Multi-kill:** 2+ kills from one grenade/explosion, from fire within 5 s, or a rifle round passing through (30% after a rifle kill, next enemy within 4 tiles on the same row). Call-out, sting, spoken line. Awards: first, then every 10th up to 100.
- **Headshots:** pistol 7%, rifle 12%, shotgun 4%, bow 10% (+10 against an unaware target); 2.5x damage; 0.8 s slow motion. Awards at 1, 10, 50, 100.
- **Kill board** ("..." menu): totals, by weapon, leaderboard (1 point per kill, 3 per multi-kill, 2 per headshot).

**Shelter**
- **Surface pads:** 4 WIND (x 36, 71.5, 107, 142) and 4 SOLAR (x 304-394). Tap to build or upgrade. Efficiency I / II / III = 1x / 1.5x / 2.1x. Pads per kind = shelter floors (max 4). Efficiency III needs the Core Vault. The old turbine is a wreck until pad 2 is built.
- **Output** (power per day): solar = eff x 2.4 x sin(day) x (1 - 0.6 cloud) x (1 - 0.6 rain) x season; wind = eff x 2.2 x clamp((wind - 0.12) x 1.7). Seasons: daylight 0.55 / 0.85 / 1 / 0.8 and panel efficiency 1.12 / 1.04 / 0.94 / 1.04 for winter / spring / summer / autumn. Panels track the sun and stow flat at night; turbines yaw into the wind.
- **Battery bank:** rigs charge up to 4 + 3 per battery cell. Cells: 3, or 8 with the Inverter (+25% rig output). Night: wind adds about 45% of a day's wind yield before the night's consumption. Manual generation and Charge cells are not capped.
- **Conditions** (per person: hungry nights, thirsty nights, anxiety 0-100; shelter: dark nights, temperature): see the README table. Energy on waking = 100 - 15 per hungry night - 15 per dry night (max 3 each) - 20 if cold - 15 / 30 for anxiety 50 / 80, never below 40. A good night removes one hungry and one dry night and lowers anxiety by 25. Survivors may fall sick from cold from the second dark night.
- **Shelter conditions sheet** ("..." menu or the red PROBLEMS chip): status, people, cause -> effect -> fix, power summary.
- **Awards:** Click, Any Door, Tailored, Collector, Two at Once, Multi-kill x10...x100, Clean Shot, Marksman, Dead Eye, One Round Each, Daylight, Into the Wind, Off the Crank, Peak Output, Stored Light, Full Bank, Warm and Fed.
- Source: three new parts (25 locks/gear/field kit, 26 kill board/sun/wind, 27 conditions/battery). Menu shows "BETA · UPDATE 10". Service worker cache v18.

## Build v29.1 (beta) · part of GitHub Update 3
- **Med Bay treats by itself:** the Treat job no longer uses medicine or anti-rad. Choose **Heal wounds** (+30 HP every 6 s, +10 per Med Bay level) or **Cure radiation sickness** (-40r every 6 s, -10 more per level); it repeats until the character is at full health or clear of radiation, then they rest. Medicine and anti-rad are still used on sorties and for revives.
- **Craft orders:** the Workbench has a HOW MANY bar: minus / plus (1 to 99), quick picks 1, 5, 10, and LOOP. One tap on a recipe crafts 1 (the default each time the Workbench opens). A batch stops early if a material runs out; LOOP runs until one does. Each recipe shows how many the stock is enough for. Androids and Bob's upgrade are always single.
- **Khan's bench:** Khan crafts only soldier's work: armour plate, ammunition, bow, arrows, spear, leather armour, combat axe, katana, grenades, Molotovs, bandages and cloth. Sam, survivors and Bob (from Mk V) craft everything.
- Source: one new part (28 Med Bay and craft batches; 29 parts in all). Menu shows "BETA · UPDATE 10.1". Service worker cache v19.

## Build v29.2 (beta) · part of GitHub Update 3
- **Fixed: dragging a character onto the Storage room broke the game.** Rooms without a job (Storage, Dormitory, Kitchen) gave the character an empty task, which stopped the shelter from drawing. Now a drop is accepted only where that character can work.
- **Drop back:** dropped on a room with no job, on a job that character cannot do (for example Max at the Workbench), or outside any room, the character glides back in a short arc to where they were and keeps the job they had. A message says why.
- **Repair:** a save that already holds an empty task is repaired on load and while playing (the character rests).
- Menu shows "BETA · UPDATE 10.2". Service worker cache v20.

## Build v30 (beta) · part of GitHub Update 3
**Battery Bay (new bay, needs the Power Bus)**
- **Chain:** generator, sun and wind -> **24 V pack** -> Power Bus -> everyday systems (lights, heat pump, life support, hydroponics, androids). 24 V pack full -> inverter -> **48 V pack** -> Power Bus level 2 -> smelter (and later heavy machines).
- **Cells:** "Battery cell" and "Inverter" are now crafted as items (Workbench) and installed in the bay. Tap an empty slot (+) to install a cell; tap a cell to remove it (1 copper + 1 scrap back). 3 slots per pack, 8 with the inverter installed. Cells and an inverter built in build v29 are returned to stock for installing.
- **24 V pack:** the Power number in the HUD is its charge. Storage = 4 + 3 per cell x health.
- **48 V pack:** its own charge. With the inverter it charges from sun and wind whenever the 24 V pack is full; MOVE 1 POWER TO 48 V does it by hand. While it holds charge the smelter works 50% faster and uses 1 power per 2 minutes of smelting per worker. Empty or missing, the smelter runs as before.
- **Inverter:** +25% from sun and wind, slots 4 to 8, 48 V charging.
- **Readouts (live):** voltage (V), load current (A), load power (W), cell health (%), charge and capacity in power and Ah, for each pack. Voltage follows the state of charge (24 V pack about 21.6 to 28.4 V, 48 V pack twice that) and sags under load.
- **Cell health:** cells lose 0.15 to 0.4% a night, 1.5% more on a cold night. Below 60% a cell is weak; below 55% it can fail (6% a night) and stores nothing until replaced.
- **Self-test:** runs every morning and on RUN SELF-TEST (cells are scanned one by one): per-pack cell count, health, capacity against nominal, weak and failed cells, inverter state. Failures appear in the morning report.
- **Room art:** two racks with eight cell positions each (lit by charge, amber when weak, flashing red when failed), a voltage readout per rack, the inverter with a turning fan, and charge moving along the bus bar.

**Med Bay extensions and the lost squad**
- **Lost sortie:** if every squad member who went out has fallen (nobody standing, nobody wounded-but-alive), the mission fails. They are carried in, resuscitated and kept in a **coma for 3 days**; everything they carried is lost. The game is not over.
- **Intensive Care** (new bay, needs the Med Bay): coma lasts 2 days instead of 3. Shows who is in a coma and for how long.
- **Isolation Room** (new bay, needs the Med Bay): people wake at 60 HP, clear of radiation and calm (28 HP without it).
- Unchanged: on a sortie a fallen squad mate can only be bandaged or carried while someone is still standing; a single fallen character with survivors is carried home as before.
- **Awards:** Industrial, Carried Home; Stored Light and Full Bank now count installed cells.
- Source: one new part (29 battery bay and ICU; 30 parts in all). Menu shows "BETA · UPDATE 3". Service worker cache v22.

## Build v31 (beta) · part of GitHub Update 4
Previewed as `atlas-update4-preview.html` and approved by Sam on 19 November 2026.

**The shelter view**
- **Depth:** every bay is drawn as a concrete box seen from the front: side walls, ceiling and a floor that runs back into the room. The walls and the floor lines follow the view, so a bay left of centre shows its left wall and a bay below the eye line shows more ceiling. Shadowed corners, a lamp cone on the back wall and a light pool on the floor (skipped on the Minimal graphics level). Each floor slab shows its front face. Unbuilt spots are raw alcoves in the rock.
- **Layers that move at their own speed:** two far ridgelines, the dead plant and the town, the shelter, then conduits, a sagging cable, grass, rubble and a fence line in front. The cut earth has strata, stones, roots and a buried main.
- **Sky and margins:** the view now travels 170 units above the surface, 150 to each side and 70 below the lowest floor. Zoomed far out, the ground line can sit between a third and just past half way down the screen and the rest is sky; turbines and solar arrays are never cut. Zoom range 0.3 to 2.4 (was 0.5 to 2.4) in the shelter and on sorties; on a sortie the view can be dragged 5 tiles past either end and up into the sky.
- **Depth of the shelter:** up to 6 floors (was 4).

**Bays**
- **Moving:** three ways. Press and hold a bay (0.33 s) and drag it; press and hold without dragging, which starts move mode; or MOVE BAY at the top of any bay's sheet. In move mode free spots are green (MOVE HERE) and bays that can trade places are blue (SWAP); CANCEL ends it. A press that starts on a character standing in a bay also picks the bay up after 0.5 s. A two-cell bay lands where it fits around the spot touched.
- **Swapping:** a bay dropped on another bay asks "Swap bays?". Levels, workers and installed parts stay with each bay. The airlock does not move. If the two do not fit in each other's place, the game says so.
- **More of the same bay:** Hydroponics, Water Reclaimer, Mushroom Bay, Dormitory, Med Bay, Smelter and Battery Bay can be built more than once: 2 per kind with 2 floors, 3 with 3, 4 with 4 or more. Each further copy costs 50% more. Levels add up: work speed uses the sum of levels, hydro trays and rain collectors count every level, each Mushroom Bay adds 3 beds, each Battery Bay adds a rack (3 slots per pack, 8 with the inverter). Workers spread over the copies. The other bays are one per shelter.

**People**
- **One PEOPLE button** in the bottom row replaces the row of survivor cards; Sam, Khan, Max, Bob and androids keep their cards. It shows the count against the limit.
- **The list:** everyone who joined, newest at the bottom, each with level, specialisation, gender, partner, faith, condition (sick, hurt, exhausted, hungry, thirsty, cold, anxious, no bed, recovering, expecting) and stars. Filters: status, level, specialisation, gender, relationship, faith. Group by any of these, with TICK GROUP.
- **Acting on many:** tick people (or ALL), then HEAL (free in a Med Bay, otherwise 1 medicine each: cures sickness and gives 30 HP, +10 per Med Bay level), REST, EXTRA RATION (1 food each, +25 energy), or give them all one job. JOB on a row opens that person's job panel.
- **Specialisation:** 300 seconds of work at one job makes someone a Farmer, Water tech, Power hand, Smelter, Radio operator, Mushroom keeper, Guard, Maker or Medic: +10% at that job. Applies to everyone, including androids.
- **Limit:** the smaller of beds + 3 common-area places and 6 people per floor. The list says which of the two sets the limit and what raises it.

**The top bar**
- The five numbers are labelled FOOD, WATER, POWER, AMMO, ARMOR. Tapping one opens its panel: what it is, where it comes from, what happens at zero, who is on it now; today's made by day, made at night, brought from sorties, used, lowest and highest stock, net; a table for today, 7 days and 30 days (total, average per day, weakest and best day, day shift, night, sorties, used, stock range); bars for the last 14 days; and a legend for the whole top bar.
- **Shortages:** when food, water or power hits zero the game records when and for how long. Whoever is making it when it comes back gets a star (20 XP) and is named in the panel; a sortie that brings it home credits Sam and Khan. Awards: Back On Line, Three Stars, Troubleshooters, Iron Shift (an android ends one).
- Statistics are kept for 36 days in the save.

**Power**
- **Power Bus:** the switchboard, with the hand generator and a buffer of its own: 6 power at level 1, 9 at level 2, 12 at level 3 (4 before it is built).
- **Battery Bay:** the racks. Empty racks store nothing.
- **Battery modules** (the crafted battery cells): the storage. Only with at least one working module in the 24 V pack is power from solar arrays and wind turbines kept, up to buffer + 3 per module.
- **Without modules:** array power is used as it is made. While it flows, Hydroponics and Water run 20% faster and the hand at the Power Bus charges the buffer up to 2.5 times faster. Night wind carries what the night needs at that moment and no more. The hand generator stops when the buffer (or the modules) are full, with a message.
- **Shown in the game:** modules are drawn in their slots with terminals and a charge bar; a sign over the racks reads STORING or NO MODULES · NOT STORING; a tag on the surface reads LIVE ONLY · NOT STORED, STORING or MODULES FULL, with charge moving on the feeder cable. The Power panel, the Power Bus sheet and the Battery Bay sheet open "Power, in three parts", which explains all three with a flow diagram and the next step.

**Sorties**
- **One revive:** anyone who falls (now Sam too) goes down bleeding for 75 s and can be got up once per sortie. A second fall, or bleeding out, cannot be undone outside: they are carried home into a coma in intensive care for one full day (awake by the next morning with the Intensive Care room). Sam no longer wakes at once with medicine. The Med Bay revive (2 medicine, 2 power) still brings someone back early. A squad that is wiped out is still the 3-day coma.
- **Helping each other:** the field kit has HELP A SQUAD MATE: heal them from your kit (medicine 30, bandage 18, organ meat 22, treat 25 for Max), give anti-rad, or pass any backpack stack (GIVE 1 or ALL), within 8 tiles. Ammo and arrows were already one pool for the squad; the kit now says so. Awards: Field Medic, Pass It On.
- **Movement:** steps follow the ground actually covered, so feet no longer slide, and a walk eases in and out instead of snapping. In the shelter, people at a job work with their hands.
- **Blood:** a kill bleeds out in four or five fading pulses that feed the pool; squad members under 45 HP and enemies under half health leave drops as they move.

**Other**
- How to Play has three new entries. New awards: Twice the Bay, Full House.
- Source: three new parts (31 depth and bays, 32 people, top bar and power, 33 sorties; 33 parts in all). Menu shows "BETA · UPDATE 4". Service worker cache v23.

## Build v32 (beta) · part of GitHub Update 4
Previewed as `atlas-update5-preview.html`.

**Blood**
- Every drop is a particle with mass, quadratic drag, gravity (800 px/s²) and wind outdoors, moved in small sub-steps so fast drops do not pass through walls. Big fast drops break up in flight and trail a short tail.
- **Floors:** a stain stretched along the direction of travel (longer for shallow, fast impacts), with a satellite tail and crown droplets; a drop that lands on fresh blood joins the stain instead of lying on top.
- **Walls and back wall:** spatter with a run that grows downward at its own speed and wobbles; indoors part of every spray has depth and ends on the room's back wall. Fast drops throw back-spatter.
- **Ceilings:** stains hold volume and release real drops that fall and land.
- **Pools** under bodies merge and grow lobes; **bootprints** from anyone who walks through a pool; outdoor rain washes stains and pools away.
- **Hits:** guns and the bow make an entry puff and an exit cone; blades and clubs fling a line of drops (cast-off); some blood is thrown up hard enough to reach the ceiling. Squad members bleed when hit. Close messy kills can put blood on the screen.
- **Wounds and parts:** entry wound with a bruise ring and a trickle, ragged exit wound, cuts, claw marks, soaked cloth; stumps drip; severed parts twitch, roll and leave smears, and squad members kick resting parts.
- Stain limits per graphics level; when the limit is reached the floor is cleared first and walls and ceilings stay.

**Weather**
- **Rain** stops at the first roof or floor it meets and splashes there, with rings in puddles and drips from roof edges.
- **Snow** settles per column, thaws slowly and is pressed down where people walk; on the shelter surface snow and rime settle too.
- **Fog** drifts in puffs that part around people and thin indoors.
- **Frost** grows in from the edges of the screen as branching crystals in deep cold; **breath** shows in the cold.
- The weather chip says Light snow, Snow, Heavy snow, Blizzard or Ash snow when it is snowing.

## Build v33 (beta) · part of GitHub Update 4
**More blood and gore**
- About 1.5× (Light), 1.9× (Balanced) and 2.3× (High) as much blood from each wound, with higher limits for drops and stains.
- **Arteries:** a severed limb or head pumps blood in pulses that follow a heartbeat which slows and weakens over 3–4 seconds; heavy non-lethal hits can open a smaller one.
- **Strands:** a severed part stays tied to the body by a strand of tissue that stretches, holds it back for a moment and snaps, flicking blood from both ends.
- **Flying parts** leave blood trails, and splat on floors and walls they hit with a wet thud.
- Rifle and shotgun hits tear off small pieces; explosions keep bleeding for a moment; blood mist is drawn in two soft layers.

**Sound**
- The whole mix is tilted: +3.5 dB below 150 Hz, −4 dB around 2.6 kHz, −8 dB above 4.2 kHz, a gentle low-pass at 9.5 kHz and a new compressor. Reverb and rain lose their hiss.
- Tones above 1.1 kHz are played quieter, and buzzy square waves above 500 Hz become softer triangle waves.
- New body sounds built from low thumps, wet filtered noise, squelches and bone cracks: flesh hits by weapon, severing, head bursts, pumping blood, parts landing, walking through pools.
- Deeper gunshots; softer clicks, button taps, metal steps and dog yelp; lower deaths for roaches, Echoes, hunters and hounds.

## Build v34 (beta) · GitHub Update 4
**Sortie camera and tapping**
- **Free pan:** drag in any direction, past both ends of the map, above the roofs and below the ground (cut earth is drawn there); a flick keeps gliding. The view stays where you leave it until you tap **CENTER**, pick another character, or the selected character walks within a few percent of the screen edge.
- **Tap markers:** ground (a ripple at the exact spot), object (yellow brackets), enemy (rotating red reticle), animal (orange), person, helper or collapsed Shifted (green), squad member (blue), breach (orange), no route (red X). Whatever the selected character is working on or aiming at glows softly.
- **Exact stop:** people stop where you tapped inside a tile, not on its middle; followers spread a little instead of stacking.

**Characters**
- Sam: olive field coat with a cream fleece collar, messy dark hair, dark beard greying at the chin (new look options Field jacket, Messy hair, Dark brown hair, Salt & pepper beard; new default). Players still on the original default look move to it once; custom looks are kept.
- Khan: ribbed olive beanie, long grey beard and moustache, heavier brows. Max: black-and-tan shepherd with a black saddle and muzzle mask, tall ears, brown eyes.

**Life and overgrowth**
- Birds (crows, pigeons, gulls, sparrows, ravens by map) perch on roofs, peck and hop, take off at footsteps (less when sneaking) and at shots, and land again further on; far flocks cross the sky; bats at night over water and woods.
- Rats run along indoor floors and flee; butterflies by day and fireflies at night in the Forest and Hunting Grounds.
- Ivy climbs the outside walls of ruined buildings, hangs from roof edges and grows up inside rooms; moss and grass on roofs, saplings on some roofs.

**Guns, arrows, spear**
- Each shot is built from a crack, a blast, a low thump, then either the room booming (indoors) or a rolling tail with echoes off buildings (outdoors), then the gun's own action: pistol slide, rifle bolt, shotgun pump. Brass cases and red shotgun hulls fly out and bounce with a tinkle.
- Star-shaped muzzle flash, smoke puffs, recoil, fast tracers.
- Arrows fly an arc, turn along their path and stick in the target or the ground for a while. The spear thrust winds up and follows through.

**Mining and surprises**
- **Ore veins:** copper, gold and coal in the rock or as boulders on every map, mixed by map (gold in the Alps and the Zone, coal in the woods and on the rail lines). Tap MINE; only Sam or Khan can dig (Khan 25% faster); pick strikes, chips and noise.
- **Coal** is a new resource. New recipes: Gold-contact PCB (1 copper, 1 gold, 1 parts → 2 PCB), Copper coil pack (3 copper, 1 scrap → 2 parts).
- **One surprise per sortie,** placed about 30 to 70 tiles out and hinted on the SDR at the start: a warm meteorite (dig: gold, copper, a board), a supply drop under a parachute (medicine, anti-rad, bandages, ammo), a fuel depot (8 coal), a gold seam (dig), a time capsule from 2033 (intel, boards, gold and a note), a soldier's cache (grenades, ammo, armour). A light beam marks it once seen.

**New bays**
- **Backup Generator** (6 scrap, 3 parts, 3 copper; 2 levels): when the batteries cannot cover the night it burns coal, 3 power per coal (4 at level 2); AUTO START on or off; BURN 1 COAL NOW. The morning report says what it burned.
- **Rec Room** (4 scrap, 3 parts, 1 PCB; 2 levels): after a night with power everyone at home wakes with 10% less anxiety per level.
- **Library** (4 scrap, 1 parts, 1 intel; 2 levels): every evening +5 XP per level for everyone at home and 4% less anxiety per level.

**Sound and radiation**
- Footsteps by surface (concrete and metal, gravel, snow, leaves, water) and by walker (Khan heavier, robots metallic, Max's paws with claw clicks on hard floors), quieter when sneaking.
- **Max barks at big enemies** (brutes, Kilns, Hollows, the Choir) within 8 tiles: they are slowed to 45% for 3.5 s (every 7 s at most).
- **Geiger counter:** short sharp clicks at random intervals, with rare background clicks on clean ground; a small dial beside the radiation chip on every sortie shows µSv/h (green, yellow above 1, red above 10) and blinks with each click. Tap it for an explanation.
- Menu shows "BETA · UPDATE 4". Service worker cache v23.
