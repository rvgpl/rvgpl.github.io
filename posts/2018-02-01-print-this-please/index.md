---
title: Print This, Please!
path: /print-this-please/
date: 2018-01-02T19:01:34.0530Z
intro: Thoughts and learnings about writing stylesheets for articles on the web
---

More and more people enjoy reading articles on web using their digital devices but there is a small set of people who like to print out their articles/drafts and read along. I’ve seen people printing out articles and pondering or thinking about it more deeply as I feel it is lot easier to mark and scribble on paper.

To make any article print ready, you add a `@media print` media query and write the necessary rules. I did the exact same thing and learnt a few things along the way.

### Print media query
Use of a media query to specify the print styles. This tells the browser that all the styles contained in this block are only to be applied under a special circumstance. `color` part of the media query adds rules only when a color print out is given which is neat.

```css
@media print and (color) {
  * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
}
```

The `print-color-adjust` property used to force printing of background colors and images in browsers based on the WebKit engine, not supported in [non-webkit browsers](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust).

### Add some margins to the page
When you print any article on the web it prints it from end to another. To make it look pretty, we can make use `@page` and set required default margins.

```css
@page {
    margin: 2cm;
}
```

### Disable styles to improve readability
Use universal selector (*) to remove any background of the page, turn text color to black and disable text-shadows. All of these improves readability and saves on ink. Apparently, black(`#000`) prints faster.

```css
*,
*:before,
*:after {
  background: transparent !important;
  color: #000 !important;
  box-shadow: none !important;
  text-shadow: none !important;
}
```

### Font sizes are set in pt
Points are traditionally used in print media. One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size.

```css
body {
  font-size: 14pt;
}

h1 { font-size:19pt; }

h2 { font-size:17pt; }

h3 { font-size:15pt; }

h4,
h5,
h6 {
  font-size:14pt;
}
```

### Paper friendly links
Generally, you would add a underline to make the user know that a particular text is a link but when it is printed out. You are a hyperlinked text with underline than the actual link. We can solve this by making use of `attr` and pseudo element, add a `:after` element to `a` tag with the `href` value. So it looks like `Link(https://linktosomewhere)`

We also disable pseudo links for fragment identifiers or `a` links which are use to navigate around different parts of the web page.

```css
a[href]:after {
    content: " (" attr(href) ")";
}

a[href^="#"]:after,
a[href^="javascript:"]:after {
  content: "";
}
```

### Proper page breaks
We can make use of  `page-break-after`, `orphans` and `windows` properties to disable page breaks in-between text and helping the pages flow better. `page-break-after` forbids a page break directly after text like headings and paragraphs where-ever possible. We also add rules for no less than three lines can be orphaned or widowed on a page.

What are orphans and widows? When you have the first line of a paragraph stranded alone at the bottom of a page, that’s an orphan. Similarly, the last line of a paragraph may be carried over by itself to the next page, this is a widow. The code below ensures that at least three lines of text will appear.

```css
p,
h2,
h3 {
  orphans: 3;
  widows: 3;
}
```

### Images
We make sure the `max-width` of the images are set to 100% so there are not image bleeding and disable links to images.

```css
img {
  margin: 1em;
  width: 100%;
  max-width: 100% !important;
  page-break-inside: avoid;
}

a[href$=".jpg"]:after,
a[href$=".jpeg"]:after,
a[href$=".gif"]:after,
a[href$=".png"]:after {
  content: " ";
  display: none;
}
 ```

A few concerns when printing articles when they are media heavy.
 - __Images__. The above css makes the images full width and with no page break, you end up printing a lot of paper.
 - __Videos__. A video from Youtube will look like a black box with a video icon on it, there nothing the user can do about with it. We can't just hide the video and use the after pseudo element to add the link as you can't add after elements to iframes. One of the ways to fix this would be to use javascript and fetch the cover image of the youtube video and use a `img` tag and append a link to youtube video.

![A black box is shown when you print a Youtube video](./youtube-video-print.jpg)
*A black box is shown when you print a Youtube video*

If you are interested in seeing how a print version of an article or a website looks like, you can use Chrome DevTools and trigger print media query. Go to *Settings> More Tools> Rendering> Emulate CSS Media> print*.

I compiled a list of these rules in one css file so if you want to read and drop it into your project or tweak it further. Code is available at this git [repo](https://www.github.com/rvgpl/paper)