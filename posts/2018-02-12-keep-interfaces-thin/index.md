---
title: Keep your interfaces thin
path: /keep-your-interfaces-thin/
date: 2018-02-12T21:00:00.530Z
intro: Interfaces in Typescript with many optional keys makes it harder to reason about
---

I’ve been writing TypeScript for a while now, If you’ve never used TypeScript before, the quick way to describe it is that it’s ES2015+ and types thrown together. Ie. modern JavaScript with real typing.

TypeScript is awesome and I love writing it and over time, I’ve noticed my own style and my own patterns emerge one of which I’d like to share and, hopefully, justify why I stick to those patterns.

Interfaces in TypeScript are essentially object definitions that describe what an object should minimally look like. For example, if I had a `Image` interface, it might look something like this:

```js
interface ImageObject {
  key: string;
  url: string;
  fileName: string;
  fileSize: number;
}

function uploadImage(image: ImageObject) {
  // upload image functionality
}
```

What that basically means is that whenever you call the function `uploadImage`, you need to pass in an object that looks like the `ImageObject` interface (along with the appropriate typings for its properties).

Now there is another function which manipulates the image, say it adds a caption property to `ImageObject`. So essentially we will modify the `ImageObject` interface to accept `caption` as a optional key. So our modified `ImageObject` would then look like

```js
interface ImageObject {
  key: string;
  url: string;
  fileName: string;
  fileSize: number;
  caption?: string;
}

function addCaptionToImage(image: ImageObject) {
  //add caption to image
}
```

This `ImageObject` interface, if shared, will grow exponentially to encompass the needs of every function that might touch this object. A `addCaptionToImage` function might additionally look for a `caption` property on that config which will now be required by every function that references this interface, whether they use it or not. Imagine that we also had a function that would add a width or height to the image for so we might need a `width` or `height` property which no function cares about except the one which adds width or height.

Basically, sharing interfaces or global interfaces causes interfaces to bloat and to impose artificial requirements on properties that might not even be used by the functions that references the interface. It creates a strange “coupling” between possibly unrelated pieces of code.

Instead, what I suggest is writing interfaces local to a file which describe only the necessary properties required to be in the object by the code in that file. Eg. if you have a `addDimensionsToImage` function, you might write something like this:

```js
interface ImageObjectWithDimensions extends ImageObject {
  width: number;
  height: number;
}

function resizeImage(image: ImageObjectWithDimensions) {
  //image.width and image.height are used somewhere in this code block
}
```
`ImageObjectWithDimesions` is local to the file, we’re telling the developer working in that file that all we really need is `width` and `height` along with other metadata.

I like this idea that Types provide nice way to document functions and easier to read if the interfaces are local to the file. 
