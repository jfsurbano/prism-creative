// Documentation: https://github.com/studio-freight/lenis

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  lerp: 0.1,
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)