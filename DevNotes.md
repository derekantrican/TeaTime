# Todo:

- On mobile, auto hide navbar when the page is scrolled down
- Add a contact button/page somewhere. A mailto link is probably sufficient (but use the `@tea-time.social` domain for the email)
- Have a description blurb for each group (and make the "what happens at Tea Time" on the About page more generic)
- Smaller res pictures for mobile loading
- Group images should be loaded locally rather than from imgur
- It'd be nice to have a `/groups/{id}` endpoint that can link directly to a group (so that groups advertising at events can provide links/qr codes straight to their group)
  - I'm not exactly sure what "link directly to a group" will mean in practice. Maybe it just means that group is listed first?
- SEO meta tags
- I'd like isMobile to be de-duped as a utils.isMobile or whatever
- Google Analytics? https://github.com/react-ga/react-ga might work
- In the future, if this site actually becomes popular, we may want to give group managers a way to manage their group info (eg date & time meeting or description) without going through me. Like an "admin view".

## HashRouter vs BrowserRouter

It would be great to be able to use BrowserRouter (urls like '/groups') rather than HashRouter (urls like '/#/groups'), but GitHub Pages doesn't seem to support it. There's a workaround [here](https://github.com/rafgraph/spa-github-pages) by using a custom 404 page, but that still shows a "that page cannot be found" in the browser even when the page is navigated to. Ultimately, this is probably on GitHub Pages to fix.

Maybe, we can use a version of the custom 404 page solution to *allow* people to put 'tea-time.social/groups' in their browser and still get to the page.

## Dev Process

### Publishing

To publish a new version of the the site:

1. Make changes *(optionally: test changes with `npm run start`)*
2. Commit changes
3. Deploy changes publicly by running `npm run deploy`

### Instructions I followed to make this site

https://github.com/derekantrican/react-gh-pages/tree/master (originally forked from https://github.com/gitname/react-gh-pages but I added info on using a custom domain)