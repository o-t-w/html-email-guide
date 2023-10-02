---
title: CSS
description: Styling your email
---

## Use inline CSS

The vast majority of email clients support `<style>` tags in the `<head>` but there are some edge cases. Third-party email accounts used with the Gmail app don’t support the `<style>` tag. If you forward an email in the desktop webmail version of Gmail, all `<style>` tags are removed in the forwarded copy. The Yahoo Mail app for Android [strips styles](https://github.com/hteumeuleu/email-bugs/issues/28) from the `<head>`.

A `<style>` tag in the `<head>` is necessary to define things like media queries, `:hover` styles, and `@font-face` declarations because they can’t be defined inline. For all other styles, use inline CSS.

Never use a `<link>` tag with styles defined in a seperate file as most popular email clients do not support this. 

## `!important`
Use of `!important` is often considered a bad practice in frontend development. In email development its a necessity. `!important` is the only way to override an inline style. If you want styles in the `<head>` to override styles defined inline, `!important` is the only option.

## Mobile first
The CSS in the `<style>` tag in the head gets removed in some circumstances, which means none of your media queries will work. For that reason, its better to use a mobile-first approach. A single column of content (the typical mobile email design) will be readable and look acceptable on desktop if the `<style>` tag is stripped out. By contrast, a desktop layout of multiple columns usually looks terrible on a phone as the content can't comfortably fit so looks squished.

## Media queries
In web-based email clients, media queries apply depending on the size of the viewport (aka the users browser window), not depending on the size of the email itself. This is worth keeping in mind for web-based desktop clients like Gmail where a large part of the viewport is taken up by a sidebar that exists seperately from your email. 

## `box-sizing`
On the web it's common to set `box-sizing: border-box;` on all HTML elements. This is not supported by Yahoo Mail or AOL, so we're stuck with the default of `box-sizing: content-box`.

## Color
Both the hex syntax (`#ffffff`) and `rgb()` syntax are supported everywhere. Use comma-seperated values (`rgb(200, 120, 50)`) when using `rgb()` because space-seperated values (`rgb(200 120 50)`) will [cause issues](https://www.caniemail.com/features/css-rgb/) in some popular email clients, such as Gmail. 

More recent color functions such as `lch()`, `oklch()`, `lab()` and `oklab()` lack broad support and should not be used.

## Units
`rem` units are not universally supported so should not be used. `em` units, `px` and percentages all have good support. 

## Make use of inheritance
You need to use inline styles but you can still make good use of inheritance to avoid repitition. Rather than defining the `font-family` seperately on every element that contains text, define the `font-family` on a container element and everything inside it will inherit the value:

```html
<body>
  <div style="font-size:16px; font-family: system-ui;">
    <!-- email content goes here -->
  </div>
</body>
```

## Progressive enhancement
There are two approaches to email design. Let's take this CTA link design as an example:

<div class="button-container" style="display: flex;">
    <a class="fancy-button">Get the bundle</a>
</div>

It uses a subtle `linear-gradient`, `text-shadow` and a `box-shadow`, none of which are supported by all email clients.

You can either simplify the design for everyone, delivering something boring but consistent:

<div class="button-container" style="display: flex;">
    <a class="less-fancy-button">Get the bundle</a>
</div>

Or you can adopt a progressive enhancement approach. Use a gradient but add a solid `background-color` for clients that don't support `linear-gradient`:

```html
style="background-color: #4642c2; background-image: linear-gradient(#6862ea, #4642c2);"
```

`text-shadow` and `box-shadow` won't be seen by everybody but you can use them anyway. 

```html
<div style="display: flex;">
    <a href="https://example.com/" style="font-weight: 500; font-size: 18px; color: white; text-decoration: none; background-color: #4642c2; background-image: linear-gradient(#6862ea, #4642c2); padding: 12px 32px; border-radius: 6px; margin: 24px auto; box-shadow: #a09cec 0px 1px 1px 0px inset; border: 1px solid #5b51c0; text-shadow: #2e2b88 1px 1px 1px; display: inline-block;">Get the bundle</a>
</div>
```

No email is ever going to look exactly the same in every email client, regardless of the approach you take.

## Don't use `@supports`
Most of the time, if a CSS feature fails to work in a certain email client its because it's been stripped out of the markup, not because the browser doesn't support the feature. For example, Google Chrome browser supports CSS grid. If you use `display: grid` in an email and open the email using Gmail in Chrome, you can inspect the email to see that `display: grid` has been removed from the markup. `@supports` will give a lot of false positives, so should not be used. 