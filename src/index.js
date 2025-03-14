import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".name", { duration: 2, y: '-100', ease: 'bounce' });

gsap.to(".intro", { duration: 2, opacity: 1, delay: 2 });

// gsap.to(".about", {
// left: "50%",
// xPercent: -50,
// ease: "power3.in",
// delay: 3,
// duration: 2
// });

gsap.to(".about", {
    left: "50%",
    xPercent: -50,
    ease: "power1.in",
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "top 60%",
        markers: true,
        scrub: 0.5
    }
})
