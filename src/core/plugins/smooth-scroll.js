import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
    duration: 3,
    touchMultiplier: 2,
    easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
    smoothWheel: true,
    infinite: false,
    syncTouch: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
