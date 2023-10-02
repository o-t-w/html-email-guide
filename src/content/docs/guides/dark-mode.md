---
title: Dark mode
description: Styling for dark mode and light mode.
---

## Dark mode on a web page vs dark mode in email
On a website, only light mode is supported by default. Dark mode is something developers opt into in [one of two ways](https://web.dev/color-scheme/#the-color-scheme-meta-tag):

#### 1. The CSS `color-scheme` property

```css
:root {
  color-scheme: light dark;
}
```

By specifying `light dark`, were indicating that we want to use a light color scheme in light mode and a dark color scheme in dark mode.

#### 2. A HTML `<meta>` tag in the `<head>` of the page
```html
<meta name="color-scheme" content="light dark">
```

On a website, both these approaches achieve the same end result — the default colors will change depending on the users settings. In light mode the default text color will be black and the default background-color will be white. In dark mode, the default text color will be white and the default background will be black. However, any colors you explicitly set with CSS will remain unchanged. 

Alternatively, if you want to use a dark color scheme regardless of user preferences you can set the CSS property or meta tag to `dark` so the default colors will always be white text on a black background. 

```css
:root {
  color-scheme: dark;
}
```

There's also an `only` keyword to make extra sure your chosen color-scheme is respected.

```css
:root {
  color-scheme: only light; /* use a light color scheme, including in dark mode */
}
```

In my own experience, the `only` keyword is unecessary and the above code is equivalent to `:root { color-scheme: light;}`

**In email clients, support for dark mode is the default**. In contrast to a web page, email clients act as if `color-scheme: light dark` were set on the HTML element. It's impossible to opt out of dark mode in the majority of clients because the `color-scheme` CSS property and meta tag are not widely supported. The `color-scheme` CSS property is only supported in Apple Mail, Samsung Mail and Thunderbird. The meta tag is only supported by Thunderbird and Apple Mail on macOS.

:::danger[Apple Mail bug]
You need to include `:root { color-scheme: light dark; }` in your CSS for the `prefers-color-scheme` media query to [work reliably in Apple Mail](https://github.com/hteumeuleu/email-bugs/issues/104).
:::

### Inverted colors
Certain email clients don't just change default colors. Gmail will invert background-colors and text colors that you've set in CSS, often leading to ugly color combinations and unreadable color-contrast. Dark mode is imposed on your email but you have no control over the colors that are used because the `prefers-color-scheme` media query is not supported. The `color-scheme` meta tag and CSS property are not supported. Here's some advice:

**1. Test your color choices early to make sure they look good in both light and dark mode.** 

**2. Gradients don't get altered.**

You can create a solid color using the CSS gradient syntax: 

```css
background-image: linear-gradient(#f3f6fd, #f3f6fd);
```
Unlike `background-color: #f3f6fd;`, this won't get altered.

The [workaround](https://www.hteumeuleu.com/2021/fixing-gmail-dark-mode-css-blend-modes/) for preventing text colors from being inverted is more complex. The solution makes use of CSS blend modes, which won't work for non-Gmail accounts.

**2. Images don't get altered.**
By and large, images, whether a CSS `background-image` or a HTML `<img>`, do not get altered by dark mode. Small images in Gmail seems to be the sole exception. **(Got the problem in Gmail with an image 60x60. Had to force it to 120x120 to get Gmail to stop it. -[Rémi Parmentier](https://emailgeeks.slack.com/archives/C1Z733K1P/p1695293828960729?thread_ts=1695289570.316099&cid=C1Z733K1P) )**

## The `prefers-color-scheme` media query
So far I've talked about default colors, but you might also want to specify you're own chosen colors for dark mode. For that we need the `prefers-color-scheme` media query:

```css
html, body {
        background-color: #e7eff5;
        color: #001625;
      }

@media(prefers-color-scheme: dark) {
  html, body {
    background-color: #001422;
    color: #f0fbfb;
  }
}
```