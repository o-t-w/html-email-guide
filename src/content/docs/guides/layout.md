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

But if you want to display things side-by-side, `display: flex` is still the best option.

EXPLAIN ISSUES WITH INLINE BLOCK - EG RANDOM WHITE SPACE, NEEDING TO SET font-size: 0 and line-height: 0;

### Multiple columns
You could use `display: inline-block` here, but I find `flex` a slightly better option. I'm going to take this email from Vimeo as inspiration and recreate its three-column layout. 

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