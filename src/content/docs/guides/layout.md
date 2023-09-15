---
title: Layout
description: Positioning things
---

Many long-standing standard CSS properties lack broad support among email clients. This includes many properties used for layout:
- `position`
- `z-index`
- `display: grid` and most grid-related CSS properties

`display: flex` is supported in most email clients but there are some large caveats - the following properties are not widely supported:
- `flex-wrap`
- The `flex` shorthand property or `flex-grow`, `flex-shrink` or `flex-basis`
- `gap`, `column-gap` or `row-gap`
- `flex-direction`
- `justify-content`
- `align-items`

EXPLAIN ISSUES WITH INLINE BLOCK - EG RANDOM WHITE SPACE, NEEDING TO SET font-size: 0 and line-height: 0;

### Multiple columns
I'm going to take this email from Vimeo as inspiration and recreate its three-column layout. 

![](/assets/vimeo-email.png)

We can use margins instead of `gap`. You might thing you could use an advanced selector here like:

```css
.desktop-gap-42 > * + *{
    margin-left: 42px;                
}
```

Complex selectors aren't supported everywhere, so to be safe we'll use a utility class instead:

## `display: flex`


## `display: inline-block`

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

