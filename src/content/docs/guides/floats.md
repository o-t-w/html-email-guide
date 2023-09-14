---
title: Wrapping text around an image
description: A guide in my new Starlight docs site.
---

If you want to wrap text around an image, you need to use the CSS `float` property.

```html
<img style="float: left;" src="some-image.png">
```
<!-- 
<div style="max-width: 600px;">
<img style="border-radius: 8px; width: 120px; height: 120px; float: left; margin-right: 16px;" src="../../src/assets/abstract-purple.png" alt="a purple abstract 3D shape">
<p style="line-height: 1.4;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div> -->

<div style="max-width: 600px;">
<img style="width: 120px; height: 120px; float: left; margin-right: 16px;" src="../../src/assets/wireframe-image.png" alt="a placeholder wireframe image">
<p class="scribble" style="line-height: 1.3; font-family: redacted; font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

The `float` property is widely supported. 

## The clearfix hack
**_EXPLAIN WHAT THE CLEARFIX HACK IS EVEN FOR_**
Traditionally developers used the "clearfix hack" to solve this problem. The old clearfix hack won't work because it relies on a CSS `::after` pseudo-element, which most email clients don't support. The modern alternative to the clearfix hack, `display: flow-root`, also lacks full support among email clients.

