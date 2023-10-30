import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
    duration: 3,
    easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
    smoothWheel: true,
    infinite: false,
});

function raf(time :any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
