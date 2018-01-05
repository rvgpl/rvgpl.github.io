---
title: Managing z-index with SASS
path: /managing-z-index-sass/
date: 2016-10-14T13:02:12.530Z
intro: Thoughts on managing z-index complexity using SASS
---

As the project grow z-index can quickly become messy and go out of control. Fortunately we we can leverage SASS to make it manageable.

One of the common issues is figuring out what `z-index` you need to assign so it stack on top or below a layer. I have seen projects with `z-index: 999999` because the dev wanted to put it on top and reading the code they couldn't find which was the largest value use. To solve this, we can put all our `z-index` values in one place so it is easier to new devs to quickly figure out which value to use.

### A Solution

```scss
// z-index scale
$z-index1: 100;
$z-index2: 200;
$z-index100: 100;

.modal {
  position: fixed;
  z-index: $z-index100;
}
```

We create a set of variables with values assigned starting from the least value to the largest value. We simple assign these variables to `z-index` property in our class names.

### Nice Solution

We can create a map of z-index values we use and use a SASS function `map-get` to get any value from the map.

```scss
$zindex: (
  modal     : 900,
  overlay   : 800,
  dropdown  : 700,
  header    : 600,
);

.modal {
  z-index: map-get($zindex, modal);
}
```

### Better Solution

We still need to think about which values to give, we can solve this by using `index` helper function in SASS. Set a variable called `$z-stack` with all the places you want to use `z-index`.

```scss
$z-stack: header,dropdown,overlay,modal;
```
We don't provide any values to our variable, we just give where we want to use them. Using index fucntion we can use `z-index` like

```scss
.modal {
  position: fixed;
  z-index: index($z-stack, modal);
}
```

`index` function takes a variable and returns the index position of where it is. It starts with 1 instead of 0 so we can directly make use of this without worrying about the zero index. So the above code renders to 

```css
.modal {
  position: fixed;
  z-index: 3;
}
```
