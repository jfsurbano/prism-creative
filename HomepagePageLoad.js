//Documentation: https://gsap.com/docs/v3/gsap/

// Import GSAP and its plugins
import { gsap } from "gsap";

// Function to play GSAP animations when the page starts loading
function playStartLoadingAnimations() {
  // Add your "page starts loading" animations here
  gsap.to(element, { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" });

  // Add more animations as needed
}


// Function to play GSAP animations when the page finishes loading
function playFinishLoadingAnimations() {
  // Add your "page finishes loading" animations here
  const element = document.querySelector(".your-finish-loading-element");
  gsap.to(element, { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" });

  // Add more animations as needed
}

// Listen for the page's "load" event and then trigger the "page finishes loading" animations
window.addEventListener("load", playFinishLoadingAnimations);

// Trigger the "page starts loading" animations as soon as this script is executed
playStartLoadingAnimations();
