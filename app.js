let wakeLock = null;

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
  } catch (err) {
    console.warn('Wake Lock failed:', err);
  }
}

document.addEventListener('click', requestWakeLock, { once: true });
