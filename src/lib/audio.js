import { get } from "svelte/store";
import { systemVolume } from "./store";

// Browsers reject audio that starts before the user has interacted with the
// page ("autoplay policy"). win32.run used to unlock audio on the boot menu's
// Enter key; index.svelte now boots straight into XP, so system sounds get
// rejected and never play.
//
// Chrome still allows autoplay on origins the user has engaged with before, so
// always TRY first, and only fall back to waiting for a gesture if that fails.

let unlocked = false;
let pending = [];

const GESTURE_TYPES = ["pointerdown", "keydown", "touchstart", "mouseover"];

function unlock() {
  if (unlocked) return;
  unlocked = true;
  for (const type of GESTURE_TYPES) {
    window.removeEventListener(type, unlock, true);
  }
  //retry everything that was blocked; splice first so a failed retry
  //can't requeue itself into the list we're iterating
  for (const retry of pending.splice(0)) retry();
}

for (const type of GESTURE_TYPES) {
  window.addEventListener(type, unlock, { capture: true });
}

/**
 * Play a system sound, working around the autoplay policy.
 * @param src   url of the audio file
 * @param loop  keep repeating (installer background music)
 * @returns the HTMLAudioElement, plus a cancel_retry() to drop a queued retry
 *          so a short sound can't fire long after its screen is gone
 */
export function play_sound(src, { loop = false } = {}) {
  const audio = new Audio(src);
  audio.loop = loop;
  //system sounds ignored the tray volume slider entirely before this
  audio.volume = get(systemVolume);

  let cancelled = false;
  const attempt = () => {
    if (cancelled) return;
    audio.play().catch((e) => {
      if (unlocked || cancelled) {
        console.log("sound blocked", src, e.name);
        return;
      }
      pending.push(attempt);
    });
  };
  attempt();

  audio.cancel_retry = () => {
    cancelled = true;
  };
  return audio;
}
