const clockEl = document.getElementById('clock');

function tick() {
  const now = new Date();
  const formatted = now.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
  });
  clockEl.textContent = `${formatted} IST`;
}

tick();
setInterval(tick, 1000);
