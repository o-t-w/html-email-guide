---
title: Layout
description: Positioning things
---

Many long-standing standard CSS properties lack broad support among email clients. This includes many properties used for layout:
- `display: grid` and most grid-related CSS properties
- `position`
- `z-index`
- `gap`, `column-gap` or `row-gap`
- `calc()`
- `transform` and `translate`

`display: flex` is supported by the [majority of email clients](https://www.caniemail.com/features/css-display-flex/), with the notable exception being Gmail when used with a non-Gmail email address. However, most flex-related CSS properties are not widely supported, including:
- `flex-wrap`
- The `flex` shorthand property or `flex-grow`, `flex-shrink` or `flex-basis`
- `flex-direction`
- `justify-content`
- `align-items`

Inline block is currently the most reliable way to approach layout in email. 

## `display: inline-block`

Here's an example of a three-column layout using a Tailwind-inspired `md-` prefix for styles that only apply to screens that are a medium width or larger:

```css
@media (min-width: 600px) {
  .md-width-30 {
    width: 30%;
    display: inline-block;
  }
  
  .md-mr-5 {
    margin-right: 5%;
  }
}
```

<div style="font-size: 0; line-height: 1.3; font-family: redacted; margin-bottom: 32px;">
    <p style="margin-top: 0; display: inline-block; width: 30%; font-size: 16px; margin-right: 5%">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni, accusantium cumque veritatis perspiciatis tenetur.</p>
    <p style="margin-top: 0; display: inline-block; width: 30%; font-size: 16px; margin-right: 5%">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni, accusantium cumque veritatis perspiciatis tenetur.</p>
    <p style="margin-top: 0; display: inline-block; width: 30%; font-size: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni, accusantium cumque veritatis perspiciatis tenetur.</p>
</div>

```html
<div style="font-size: 0;">
    <p class="md-width-30 md-mr-5" style="font-size: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni, accusantium cumque veritatis perspiciatis tenetur.</p>
    <p class="md-width-30 md-mr-5" style="font-size: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni, accusantium cumque veritatis perspiciatis tenetur.</p>
    <p class="md-width-30" style="font-size: 16px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magni, accusantium cumque veritatis perspiciatis tenetur.</p>
</div>
```

An unfortunate quirk of using `inline-block` for layout: even if you set `margin: 0`, a series of `inline-block` elements will have white spaces between them. This adds to the overall width, meaning if you have two elements both sized at 50%, the combined total will be over 100%, so they won't be displayed side by side. That's why in the code shown above I've set `font-size: 0` on the parent element, which removes the excess space.  

Gmail on iOS adds `word-spacing: 1px;` to the body. This also creates extra space between elements which prevents them from displaying side-by-side. Setting `word-spacing:normal` fixes the issue.

```html
<body style="word-spacing:normal">
```

## The `float` property

If you want to wrap text around an image, you need to use the CSS `float` property.

```html
<img style="float: left;" src="some-image.png">
```

<div style="max-width: 600px;">
<img style="width: 120px; height: 120px; float: left; margin-right: 16px;" src="../../src/assets/wireframe-image.png" alt="a placeholder wireframe image">
<p class="scribble" style="line-height: 1.3; font-family: redacted; font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

The `float` property itself is widely supported by email clients, but there is one caveat. 

### The clearfix hack doesn't work
Floated elements come with some weird behaviour. Floated elements do not add to the height of their parent element. If you are using a background-color or border on the parent, this will be visibly apparent. For the below example, I've given the parent a red border:

<div style="display: flow-root;">
<div style="max-width: 600px; border: solid 2px red;">
<img style="width: 120px; height: 120px; float: left; margin-right: 16px;" src="../../src/assets/wireframe-image.png" alt="a placeholder wireframe image">
<p class="scribble" style="line-height: 1.3; font-family: redacted; font-size: 18px;">Lorem ipsum dolor sit amet.</p>
</div>
</div>

<div display="flow-root"></div>
Because the text in this example has a shorter height than the floated image, the image overflows the container.

Traditionally developers used the "clearfix hack" to solve this problem. The old clearfix hack won't work because it relies on a CSS `::after` pseudo-element, which most email clients don't support. The modern alternative, `display: flow-root`, also lacks full support among email clients. For this reason you should avoid using floats for layout.

