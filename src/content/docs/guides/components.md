---
title: Components
description: Reusable code.
---

SHOW CODE EXAMPLES FOR ALL OF THEM

## Maizzle

Maizzle is an incredibly well-documented open-source tool. Version 4.4 introduced a new [components system](https://maizzle.com/docs/components) with a syntax inspired by Blade, the templating language used by the Laravel PHP framework.

Maizzle offers a bunch of handy tools while staying out of your way. Cosmin Popovici, the creator of Maizzle, has said that the framework is “geared towards people who want to have full control” whereas, “other frameworks take some of that away in exchange for abstractions that non-email developers can use to create emails with a decent confidence that they’ll work well.” I’ve previously written about the upcoming updates to Outlook that will finally mean we can adopt more modern approaches to email markup and styling. The success of projects like MJML came from a desire to abstract away table-based layout. Increasingly then, these abstractions will be less necessary. “Stay in control and code your emails however you like”, is how [Maizzle markets itself](https://maizzle.com/). For anybody that wants to build fully custom emails with their own markup, Maizzle is the best option. 

#### Defining a component

Here’s a simple link component:

```html
<script props>
    module.exports = {
      href: props.href
    }
</script>

<a href={{href}} style="font-weight: 500; font-size: 18px; color: white; text-decoration: none; background-color: #4642c2; padding: 12px 32px; border-radius: 6px;"><content /></a>
```
#### Using the component
By default, all component names are prefixed with `x-`. So using the link component is as simple as writing: 

```html
<x-link href="https://stackoverflow.com">Buy now</x-link>
```

Any additional classes are automatically passed down to the HTML element:

```html
<x-link class="mt-4" href="https://stackoverflow.com">Buy now</x-link>
```

## Parcel

Parcel is an online text editor specifically designed for building emails. It’s a great tool that’s become much loved among the HTML email community. Parcel offers plenty of useful features for free but the components functionality requires a pro or business subscription.


## React Email

React Email is an open-source project that describes itself as " acollection of high-quality, unstyled components for creating beautiful emails using React". Along with customizing those components with CSS, it also enables you to write components from scratch. Email does not support JavaScript. React email uses React purely as a templating syntax that outputs HTML markup. You can see some [great-looking examples](https://react.email/examples) of React Email being used to recreate emails in the style of popular brands. 

SHOW CODE EXAMPLES FOR ALL OF THEM

I’m not a fan of having to use `className` instead of `class` or `style={{}}` instead of `style=""` for inline styles. I’d rather just use HTML syntax. React Email has marketed itself as modernising HTML email. Throwing React at the hard problems of developing for email doesn’t solve much. Using React can’t magically improve client support for any CSS or HTML features. If you like the look of the pre-built components it offers then great. If you want to write something with a lot of custom styling you'll still need to possess in-depth knowledge of how to code for email. 

## MJML

MJML is an older option. MJML stands for "Mailjet Markup Language". It’s an open-source project from the email marketing platform Mailjet. MJML was originally released eight years ago but it’s still maintained, although hasn’t seen a major version bump since 2018. It remains the most popular framework for building emails with over 15,000 GitHub stars. MJML is primarily a library of components. It also offers the ability to write fully custom components from scratch but that is badly documented and not the main thrust of the project. The syntax for creating components is [unnecessarily complex](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36). For anybody that wants full control, it’s not the best option. 


## Conclusion

React Email has already proven rather popular: it has 7000 GitHub stars. Maizzle is four years old and has accumulated 1900 stars. Maizzle is a mature and active project that has kept improving during that time. GitHub stars shouldn’t be used as the best arbiter of the underlying quality of either project. Sadly, React is such a hype-train that React-*anything* will garner popularity even when it's not the best option. React Email is still an early-stage beta project that doesn’t feel at all mature and is primarily popular with React developers rather than email geeks.