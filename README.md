# Project Atlas - Earthside

A browser game set in 2092: run an underground shelter, then take Sam, Khan and Max the dog out on night sorties to scavenge, restore the grid and find Ali.

The whole game is `index.html`. No build step, no libraries, no server.

## Files

| File | What it is |
|---|---|
| `index.html` | The game |
| `manifest.webmanifest` | Lets phones install it as an app |
| `icon-192.png`, `icon-512.png` | App icons |
| `sw.js` | Lets the game start without a connection after the first visit |

## Publish with GitHub Pages

1. Upload all five files to the top level of the repository.
2. Settings > Pages > Deploy from a branch > `main`, folder `/ (root)` > Save.
3. After a minute or two the game is at `https://<your-username>.github.io/<repository-name>/`.

## Install on a phone

- iPhone: open the address in Safari > Share > Add to Home Screen.
- Android: open it in Chrome > menu > Add to Home screen / Install app.

## Saved progress

Progress is stored in the browser on each device. It is not shared between devices and is lost if site data is cleared.

## Updating

Upload a new `index.html` over the old one. The address stays the same.
