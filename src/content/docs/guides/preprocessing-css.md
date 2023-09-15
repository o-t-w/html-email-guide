---
title: Preprocessing CSS
description: Variables, Tailwind, etc
---

## Using CSS Variables in Maizzle
Few email clients support CSS custom properties so it’s necessary to transpile them at build time. We can do that with a [PostCSS plugin](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties). 

```bash
npm install postcss-custom-properties --save-dev
```
Then in your [config.js file](https://maizzle.com/docs/configuration/postcss) include this code:

```js
module.exports = {
  build: {
    postcss: {
      plugins: [
        require('postcss-custom-properties')()
      ]
    }
  }
}
```
Once that’s set up you can define variables in a `<style>` tag in the `<head>` in main.html. 

```css
:root {
  --red: #c73030;
  --blue: #3030c7;
  --green: #30c783;
}
```

## Tailwind

Tailwind is a library of CSS utility classes that has become incredibly popular. Automatic support for Tailwind is one of the selling points of both Maizzle. **Tailwind was not built with email in mind**. **Many of the classes that Tailwind provides won’t work in all email clients because support for CSS in most email clients is still limited and there’s no way of getting around that.** 

Having said that, Maizzle does a lot to help transform certain Tailwind styles so that they work in email. While TailwindCSS defaults to units like `rem`, Maizzle’s default output uses `px`, which has wider compatibility with different email clients. Because the HTML `<style>` element isn’t supported by all email clients, Maizzle will transform your Tailwind classes into inline styles by default. Some styles (`:hover`, `media queries`) can’t be defined as inline styles so are automatically put in a `<style>` tag and made `!important` (because `!important` is the only way to override an inline style). Support for Tailwind in React Email is more naive in comparison. 