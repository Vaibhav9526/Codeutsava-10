// Chrome/Firefox/Edge/Safari block audio that starts before the user has
// interacted with the page ("autoplay policy"). win32.run used to unlock audio
// on the boot-menu's Enter key; index.svelte now boots straight into XP, so
// every system sound must wait for the first real user gesture before it can
// play.
//
// Usage:
//   import { audio_ready } from '$lib/audio_ready';
//   await audio_ready;
//   audio.play().catch(...)

let resolve_ready;
export const audio_ready = new Promise((resolve) => {
  resolve_ready = resolve;
});

const GESTURE_TYPES = [
  "pointerdown",
  "keydown",
  "touchstart",
  "click",
  "mouseover",
];

function unlock() {
  if (resolve_ready == null) return;
  resolve_ready();
  resolve_ready = null;
  for (const type of GESTURE_TYPES) {
    window.removeEventListener(type, unlock, true);
  }
}

for (const type of GESTURE_TYPES) {
  window.addEventListener(type, unlock, { once: true, capture: true });
}
