/* Deep Field parallax: continuous motion throughout the frame's viewport passage. */
(() => {
  const images = document.querySelectorAll('.home-page .science-image-wrap .science-image');
  if (!images.length) return;

  let queued = false;
  function update() {
    queued = false;
    const viewportHeight = window.innerHeight;
    for (const image of images) {
      const frame = image.parentElement;
      const rect = frame.getBoundingClientRect();
      const overflow = Math.max(0, image.offsetHeight - rect.height);
      // 0: frame enters viewport at bottom; 1: frame exits at top.
      const travel = Math.max(1, viewportHeight + rect.height);
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / travel));
      // Move downward continuously inside the clipped window as the page scrolls down.
      const y = -overflow * (1 - progress);
      image.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    }
  }
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('pageshow', schedule);
  document.addEventListener('DOMContentLoaded', schedule);
  schedule();
})();
