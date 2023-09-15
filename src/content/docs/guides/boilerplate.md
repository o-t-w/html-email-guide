---
title: Boilerplate
description: The reusable shell of every email.
---

The following code can copy/pasted as a starting-off point for all your emails:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <meta name="x-apple-disable-message-reformatting">
  <title>Your email title goes here</title>
  <style>
    /* Anything that can't be defined inline goes here: media queries, @font-face declarations, etc */
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

:::danger
The head will be stripped out by Yahoo on Android DOUBLE CHECK THIS.
:::