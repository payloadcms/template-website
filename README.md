# Payload Website Template

A template for [Payload CMS](https://github.com/payloadcms/payload) to power websites from small to enterprise. There is a complete front-end website for this template which can be found [here](https://github.com/payloadcms/template-website-nextjs).

Core features:

- [Pre-configured Payload Config](#how-it-works)
- [Access Control](#access-control)
- [Preview](#preview)
- [ISR](#isr)
- [Nested Docs](#nested-docs)
- [Layout Builder](#layout-builder)
- [SEO](#seo)
- [Redirects](#redirects)

For more details on how to get this template up and running locally, see the [development](#development) section.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

- #### Users

  Users are auth-enabled and encompass both admins and public users based on the value of their `roles` field. Only `admin` can access your admin panel to manage your website's content whereas `user` has limited access to the platform, see [access control](#access-control) for more details.

- #### Pages

  All pages are layout-builder enabled so you can generate unique layouts for each page using layout-building blocks, see [Layout Builder](#layout-builder) for more details. They can also be nested inside of one another, for example "About > Team". See the [Nested Docs](#nested-docs) for more details.

- #### Posts

  All posts are layout-builder enabled so you can generate unique layouts for each post using layout-building blocks, see [Layout Builder](#layout-builder) for more details. They can also be nested inside of one another, for example "News > World". See the [Nested Docs](#nested-docs) for more details.

- #### Media

  This is the uploads-enabled collection used by pages and products to contain media, etc.

- #### Categories

  A taxonomy used to group posts together. Categories can be nested inside of one another, for example "News > World". See the official [Payload Nested Docs Plugin](https://github.com/payloadcms/plugin-nested-docs) for more details.

## Access Control

Basic role-based access control is setup to determine what users can and cannot do based on their roles, which are:

- `admin`: They can access the Payload admin panel to manage your website. They can see all data and make all operations.
- `user`: They cannot access the Payload admin panel and have a limited access to operations based on their user (see below).

This applies to each collection in the following ways:

- `users`: Only admins and the user themselves can access their profile. Only admins can create and delete users.
- `pages`: Everyone can see published pages but only admins can see drafts and create, update, and delete pages.
- `posts`: Same as pages.

For more details on how to extend this functionality, see the [Payload Access Control](https://payloadcms.com/docs/access-control/overview#access-control) docs.

## Preview

To enter preview mode we format a custom URL using a [preview function](https://payloadcms.com/docs/configuration/collections#preview) in the collection config. When a user clicks the "Preview" button, they are routed to this URL along with their http-only cookies and revalidation key. Your front-end can then use the `payload-token` and revalidation key to verify the request and enter into its own preview mode.

For more information, see the official [Preview Example](https://github.com/payloadcms/payload/tree/master/examples/preview/cms#readme).

## ISR

If your front-end is statically generated then you may also want to regenerate the HTML for each page as they are published. To do this, we add an `afterChange` hook to the collection that fires a request to your front-end in the background each time the document is updated. You can handle this request on your front-end and regenerate the HTML for your page however needed.

For more information, see the official [Preview Example](https://github.com/payloadcms/payload/tree/master/examples/preview/cms#isr) which includes ISR.

## Nested Docs

This template comes pre-configured with the official [Payload Nested Docs Plugin](https://github.com/payloadcms/plugin-nested-docs) so you can easily create hierarchies of pages, posts, and categories. A front-end solution for this can be found [here](https://github.com/payloadcms/template-website-nextjs).

## Layout Builder

Pages and posts can be built using a powerful layout builder. This allows you to create unique layouts for each page or post. This template comes pre-configured with the following layout building blocks:

- Hero
- Content
- Media
- Call To Action
- Archive

A complete front-end solution for this can be found [here](https://github.com/payloadcms/template-website-nextjs).

## SEO

This template comes pre-configured with the official [Payload SEO Plugin](http://payloadcms.com/) so you can easily manage metadata for each page of your website. A front-end solution for this can be found [here](https://github.com/payloadcms/template-website-nextjs).

## Redirects

This template comes pre-configured with the official [Payload Redirects Plugin](https://github.com/payloadcms/plugin-redirects) so you can properly redirect content as your website scales. A front-end solution for this can be found [here](https://github.com/payloadcms/template-website-nextjs). For additional help, see the official [Redirects Example](https://github.com/payloadcms/payload/tree/master/examples/preview/cms#readme).

## Development

To spin up the template locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `yarn && yarn dev`
1. Now open `http://localhost:8000/admin` in your browser
1. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app—but your database is blank. You can optionally seed the database with a few pages and posts, more details on that [here](#seed).

### Seed

To seed the database with a few pages and posts you can run `yarn seed`.

> NOTICE: seeding the database is destructive because it drops your current database to populate a fresh one from the seed template. Only run this command if you are starting a new project or can afford to lose your current data.
