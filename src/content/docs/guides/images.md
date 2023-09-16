---
title: Images
description: Which image formats should you use in email?
---

## Image blocking
Some email clients block images by default - meaning the recipient won't be able to see any images when they first open your email. This is the case for:
- Gmail users with non-Gmail accounts
- Desktop versions of Outlook
- AOL webmail

Microsoft gives [this rationale](https://support.microsoft.com/en-us/office/block-or-unblock-automatic-picture-downloads-in-email-messages-15e08854-6808-49b1-9a0a-50b81f2d617a): 

> - Helping you avoid viewing potentially offensive material.
> - Helping to keep malicious code from damaging the data on your computer.
> - Allowing you to decide — especially if you're on a low-bandwidth connection — whether a particular image warrants the time and bandwidth required for downloading.
> - Helping you avoid tracking pixels: invisible images that can tell a sender you’ve read the email.

Coding for email has so many limitations that some marketers forgo most CSS and HTML entirely by sending emails constructed entirely out of images. This is certainly a bad idea as, for some amount of users, images will not be displayed by default.  

## Which image formats are supported?

All email clients support png and jpg. Most support AVIF and WebP.

:::danger[SVG]
SVG are not well supported in email clients.
:::

## Animated images ('gifs')
For animated images (effectively video without audio), `.gif` is universally supported.

:::caution[gif is an old legacy format]
gifs have a large file size and bad visual fidelity.
:::

Animated AVIF is a modern image format that offers a far smaller file size and improved visual quality compared to gif. Check the support data on [Can I Email](https://www.caniemail.com/search/?s=avif) before deciding to use this format.

## Optimise your images
Run your images through a tool like [Squoosh](https://squoosh.app/) to reduce the file size.

## Video
Video is not widely supported by email clients.

<iframe title="Can I email… &lt;video&gt; element" src="https://embed.caniemail.com/html-video/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>