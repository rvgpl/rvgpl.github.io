---
title: Naming SASS colour variables
path: /naming-sass-colour-variables/
date: 2016-10-14T20:00:00.530Z
intro: Thoughts on naming SASS colour variables to improve code readability
---
Let's face it naming things is hard. Having a proper naming convention can help save time and makes it easier for new developers to understand the codebase.

### The Problem
Having colour variables saves time and one of the reasons why people use a preprocessor. In my old projects I used to name my colour variables with colour names. Got half way through a project, and realised what a mistake it was.

```scss
// Bad
$blue: #367588;
$red: #A01C1C;
$dark-red: #800000;
```
What is the problem here?

- The variable names don't tell me if they have any relationship with one other.
- What's the primary brand colour? Is it red or blue?
- `dark-red` doesn't tell me how much darker it is. If I need to add a new shade of red, should I name it `$less-dark-red` or `$more-dark-red`.

> What happens if project's colour scheme changes? Do we replace the variable `$red` with a shade of some other colour? It defeats the point of having variables in the first place.

### A Solution
We can rename our colour variables for what they are than what the colour they represent. Giving some context to our variables helps us see some relationship between our colours.

```scss
// Good
$primary-color: #A01C1C;
$secondary-color: #367588;
$border-color: #1A1A1A;
```

We have `$primary-color` and `$secondary-color` which would be our brand colours and have a utility variable such as `$border-color`.

### My perfect solution

Following the above approach, colour hex codes are added to variable names which is fine but reading it wouldn't make any sense to the developer as we still don't know what the primary colour is. Is it red or blue?

```scss
//Internal variables not used anywhere directly
$color-red: #A01C1C;
$color-blue: #367588;

// Global variables
$primary-color: $color-red;
$secondary-color: $color-green;
```
We create internal variables of our colour palette. Internal variables are never assigned directly to any property, they are generally assigned to some global variable. Global variables are assigned to properties. Say if you want your button to be in brand primary colour, you don't assign the variable `$color-red` to our `background` instead we use `$primary-color` variable.

```scss
//Bad
button {
  background: $color-red;
}

//Good
button {
  background: $primary-color;
}
```

This helps dev working on the codebase what the actual colour is and helps keep our global colour variables free of any bias. Because let's face it, hex codes are for machines.

