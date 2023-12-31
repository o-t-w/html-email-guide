---
title: Boilerplate
description: The reusable shell of every email.
---

The following code can copy/pasted as a starting-off point for your emails:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
  <title>Your email title goes here</title>
  <style>
    /* Anything that can't be defined inline goes here: media queries, @font-face declarations, etc */

    :root {
    color-scheme: light dark;
    }
  </style>
</head>
<body class="body">
  <div lang="en" dir="ltr">
    <!-- email content goes here -->
  </div>
</body>
</html>
```

## Things to put in the `<head>`

### `<meta name="x-apple-disable-message-reformatting">`
If you're experiencing [issues](https://github.com/hteumeuleu/email-bugs/issues/18) in Apple Mail, this meta tag might help. 

## CSS reset
A reset is some CSS boilerplate to include in the `<head>` to reduce inconsistencies between email clients. Given that this page has told you to mostly use inline styles, the idea of using a CSS reset in the `<head>` might sound odd, but there are certain styles you'll want to include with every email you send. 

### `color-scheme`
The following code is required for the `@prefers-color-scheme` media query to work correctly in Apple Mail:
```css
:root {
  color-scheme: light dark;
  }
```
### Blue links on iOS an macOS
In any mail app on macOS, any email address written in the content of your email will be automatically transformed into a link. On iOS, the same is also true of physical addresses.

```html
<p>For help feel free to email us at help@somecompany.com or send us a letter at 6 Pancras Sq, London N1C 4AG</p>
```

These links do provide useful behaviour: clicking an address will automatically show that location in whatever map app you have installed, clicking an email address will automatically open your default email app and create a new message with the To field already filled out, etc. However, it can clash with your visual styling. 

You can remove this styling in a rather manual labour-intensive way:

```html
<p>For help feel free to email us at <span class="ios-remove-link-styling">help@somecompany.com</span> or send us a letter at 6 Pancras Sq, London N1C 4AG</p>
```

```css
.ios-remove-link-styling a {
color: inherit !important;
text-decoration: none !important;
}
```

### Email Normalize

One reset is [Email Normalize](https://github.com/maizzle/email-normalize#about) from the creator of Maizzle. That projects readme gives a good description of what the purpose of a reset is:

> "Like browsers, email clients use default styles for HTML. Unlike browsers, there is little to no standardization, and email developers need to be familiar with many, constantly changing CSS reset techniques."

Here's the bulk of the code:

```css
/*
 * Reset body
 *
 * Apple Mail, iOS Mail plus many more have preset margin and padding for
 * the HTML <body> - this normalizes it so rendering is consistent.
 */

 body {
    margin: 0;
    padding: 0;
  }
  
  /*
   * Normalize headings
   *
   * Values used are browser CSS defaults.
   *
   * Mail.ru:      resets font-size on <h1> & <h3>
   * Outlook.com:  resets margin on <h3>
   */
  
  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }
  
  h2 {
    margin: 0.83em 0;
    font-size: 1.5em;
  }
  
  /* `html[dir] h3` increases specificity, to override Outlook.com */
  
  h3,
  html[dir] h3 {
    margin: 1em 0;
    font-size: 1.17em;
  }
  
  /**
   * Normalize triggered links, such as dates or phone numbers,
   * in Apple Mail / iOS Mail
   */
  
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* Normalize links in Gmail */
  
  u + #body a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  
  /* Hide the download button on large images */
  
  u ~ div img + div > div {
    display: none;
  }
```