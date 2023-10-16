//Documentation: https://gsap.com/docs/v3/gsap/

// Import GSAP and its plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let typeSplit = new SplitType('[heading]', {
  types: 'lines, words, chars',
  tagName: 'span'
});

// Second SplitType instance that splits only lines of words
let typeSplit2 = new SplitType('[paragraph]', {
  types: 'lines',
  tagName: 'span'
});

// Create a timeline to control the animation sequence
const textAnimation = gsap.timeline(
    {
        delay: 1
    }
    );

// Animation for .word
textAnimation.from('[heading] .word', {
  y: '100%',
  opacity: 0,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: document.querySelector('[heading]'),
    start: 'top center',
  }
});

// Animation for .line with a stagger
textAnimation.from('[paragraph] .line', {
  y: '100%',
  opacity: 0,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: document.querySelector('[paragraph]'),
    start: 'top center' ,
  }
});
