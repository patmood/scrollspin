'use strict'

var ScrollSpin = (function() {
  function ScrollSpin(el, frames = [], options = {}) {
    this.options = {
      frameDistance: options.frameDistance || 20,
      initialPreloadCount: options.initialPreloadCount || 10,
    }
    this.el = el
    this.img = document.createElement('img')
    this.img.src = frames[0]
    this.el.appendChild(this.img)

    this.preloadImages = []
    this.frames = frames

    this.preloadInitial()

    window.addEventListener('scroll', rafThrottle(this.update.bind(this)))
  }

  function rafThrottle(fn) {
    var throttled = false
    return function() {
      if (throttled) {
        return false
      }
      throttled = true
      window.requestAnimationFrame(function() {
        fn.apply(this, arguments)
        throttled = false
      })
    }
  }

  var _proto = ScrollSpin.prototype

  _proto.preloadInitial = function preloadInitial() {
    this.preloadImages = this.preloadImages.concat(
      this.frames.slice(0, this.initialPreloadCount).map(this.makeImg)
    )

    if (document.readyState !== 'loading') {
      // finish preloading now
      this.preloadRest()
    } else {
      // finish preloading later
      document.addEventListener('DOMContentLoaded', this.preloadRest.bind(this))
    }
  }

  _proto.preloadRest = function preloadRest() {
    this.preloadImages = this.preloadImages.concat(
      this.frames.slice(this.initialPreloadCount).map(this.makeImg)
    )
  }

  _proto.makeImg = function makeImg(src) {
    let img = document.createElement('img')
    img.src = src
    return img
  }

  _proto.update = function update() {
    const totalFrames = this.frames.length
    const index =
      Math.floor(window.scrollY / this.options.frameDistance) % totalFrames
    this.img.src = this.frames[index]
  }

  return ScrollSpin
})()
