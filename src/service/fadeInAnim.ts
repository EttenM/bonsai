import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const fadeInAnimation = (target: any) => {
  gsap.fromTo(
    target,
    {
      y: 70,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "easeOut",
      scrollTrigger: {
        trigger: target,
        start: "top +=75%",
        // toggleActions: "play none play reset",
      },
    }
  );
};
