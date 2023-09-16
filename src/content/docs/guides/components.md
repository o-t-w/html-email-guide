---
title: Components
description: Reusable code.
---

## Maizzle

Maizzle is an incredibly well-documented open-source tool. Version 4.4 introduced a new [components system](https://maizzle.com/docs/components) with a syntax inspired by Blade, the templating language used by the Laravel PHP framework.

#### Defining a component

Here’s a simple link component (styled like a button):

```html
<script props>
    module.exports = {
      href: props.href
    }
</script>

<a href={{href}} style="font-weight: 500; font-size: 18px; color: white; text-decoration: none; background-color: #4642c2; padding: 12px 32px; border-radius: 6px;"><content /></a>
```
#### Using the component
By default, all component names are prefixed with `x-`. So using the button component is as simple as writing: 

```html
<x-button href="https://stackoverflow.com">Buy now</x-button>
```

Any additional classes used on the component are automatically passed down to the HTML element:

```html
<x-button class="mt-4" href="https://stackoverflow.com">Buy now</x-button>
```

Cosmin Popovici, the creator of Maizzle, has said that the framework is “geared towards people who want to have full control” whereas, “other frameworks take some of that away in exchange for abstractions that non-email developers can use to create emails with a decent confidence that they’ll work well.” I’ve previously written about the upcoming updates to Outlook that will finally mean we can adopt more modern approaches to email markup and styling. The success of projects like MJML came from a desire to abstract away table-based layout. Increasingly then, these abstractions will be less necessary. “Stay in control and code your emails however you like”, is how [Maizzle markets itself](https://maizzle.com/). For anybody that wants to build fully custom emails with their own markup, Maizzle is the best option. 

## Parcel

Parcel is an online text editor specifically designed for building emails. It’s a great tool that’s become much loved among the HTML email community. Parcel offers plenty of useful features for free but the [components functionality](https://parcel.io/docs/components) requires a pro or business subscription.

## React Email

[React Email](https://react.email/) is an open-source project that describes itself as " acollection of high-quality, unstyled components for creating beautiful emails using React and TypeScript". Along with customizing those components with CSS, it also enables you to write components from scratch. Email does not support JavaScript. React email uses React purely as a templating syntax that outputs HTML markup.

React Email has marketed itself as modernising HTML email. Throwing React at the hard problems of developing for email doesn’t solve much. Using React can’t magically improve client support for any custom fonts or CSS features. I’m not a fan of having to use `className` instead of `class` or `style={{}}` instead of `style=""`. I’d rather just use HTML syntax. It's a beta project thats still bug-ridden and badly documented so I won't cover it further here. 

## MJML

MJML is an older option. MJML stands for "Mailjet Markup Language". It’s an open-source project from the email marketing platform Mailjet. MJML was originally released eight years ago but it’s still maintained, although hasn’t seen a major version bump since 2018. It remains the most popular framework for building emails with over 15,000 GitHub stars. MJML is primarily a library of components. It also offers the ability to write fully custom components from scratch but that is badly documented and not the main thrust of the project. The syntax for creating components is [unnecessarily complex](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36). For anybody that wants full control, it’s not the best option. 
