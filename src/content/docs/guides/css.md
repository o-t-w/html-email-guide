---
title: CSS
description: Styling your email
---

## Use inline CSS

The vast majority of email clients support `<style>` tags in the `<head>` but there are some edge cases. If you forward an email in the desktop webmail version of Gmail, all `<style>` tags are removed in the forwarded copy. Third-party email accounts used with the Gmail app don’t support the `<style>` tag either.

A `<style>` tag in the `<head>` is necessary to define things like media queries, `:hover` styles, and `@font-face` declarations because they can’t be defined inline. Don't use a `<link>` tag with styles defined in a seperate file as most popular email clients do not support this. For all other styles, use inline CSS.

### `!important`
Use of `!important` is often considered a bad practice in frontend development. In email development its a necessity. `!important` is the only way to override an inline style. If you want styles in the `<head>` to override styles defined inline, `!important` is the only option.

```css
SHOW MEDIA QUERY CODE WITH IMPORTANT!
```

## Mobile first
The CSS in the `<style>` tag in the head gets removed in some circumstances, which means none of your media queries will work. For that reason, its better to use a mobile-first approach. A single column of content (the typical mobile email design) will be readable and look acceptable on desktop if the `<style>` tag is stripped out. By contrast, a desktop layout of multiple columns usually looks terrible on a phone as the content can't comfortably fit so looks squished.

## How wide should an email be?

## box-sizing
On the web it's incredibly common to set `box-sizing: border-box;`. This is not supported by Yahoo Mail or AOL, so we're stuck with the default of `box-sizing: content-box`.

## Units: use pixels and percentages
`rem` and `em` units are not universally supported by email clients. 

## Q: Should you put styles on the body? Or does it get removed??

## Make use of inheritance
Yes, you still need to use inline styles, but you can still make good use of inheritance. 

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

Accept that `text-shadow` and `box-shadow` won't work for everybody but use them anyway.

```html
<div style="display: flex;">
    <a href="https://example.com/" style="font-weight: 500; font-size: 18px; color: white; text-decoration: none; background-color: #4642c2; background-image: linear-gradient(#6862ea, #4642c2); padding: 12px 32px; border-radius: 6px; margin: 24px auto; box-shadow: #a09cec 0px 1px 1px 0px inset; border: 1px solid #5b51c0; text-shadow: #2e2b88 1px 1px 1px; display: inline-block;">Get the bundle</a>
</div>
```

## Don't use `@supports`
Most of the time, if a CSS feature fails to work in a certain email client its because it's been stripped out of the markup, not because the browser doesn't support the feature. For example, Google Chrome browser supports CSS grid. If you use `display: grid` in an email and open the email using Gmail in Chrome, you can inspect the email to see that `display: grid` has been removed from the markup. `@supports` will give a lot of false positives, so should not be used. 