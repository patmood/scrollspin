# Scrollspin

Animate an image based on the scroll position.

## How to use

Initialize `ScrollSpin` with the element to mount the image in, and an array of image urls.

## Example

In `index.html`, there is an element with the id `scrollspin` that is styled with css to be a fixed position background. `frames.js` loads the example `frames` array, and ScrollSpin can be initialized as follows:

`new ScrollSpin(document.getElementById('scrollspin'), frames)`

## Options

There is an optional 3rd argument that accepts an `options` object.

The options are:
`frameDistance` - Distance to scroll before next image (default 20)
`initialPreloadCount` - How many images to preload in the first batch (default 10)
