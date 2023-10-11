// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);


// Target all headings (h1, h2, h3, h4, h5, h6)
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headings.forEach((heading) => {
  // Apply your GSAP animations to each heading
  gsap.from(heading, {
    y: '100%',
    opacity: 1,
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1,
  
    scrollTrigger: {
      trigger: heading,
      start: 'top center',
    }
  });
});
