let wakeLock = null;

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
  } catch (e) {
    console.warn(e);
  }
}

document.addEventListener('touchstart', requestWakeLock, { once: true });
